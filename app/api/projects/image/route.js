import authenticate from "@/lib/authenticate"
import next from "@/lib/next";
import prisma from "@/lib/prisma";
import httpStatus from "http-status";
import { NextResponse } from "next/server";
import {
    S3Client,
    PutObjectCommand,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';


// const s3 = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// });

export const POST = async (req) => {
    console.log("buradaa")
    // const client = new AWS.S3({ region: "eu-central-1" });
    try {
        const user = await authenticate(req)
        if (!user) return next({ statusCode: httpStatus.BAD_REQUEST, message: "Invalid token or expired" });

        const formData = await req.formData()

        const fileData = formData.get("image")

        if (!fileData) {
            return NextResponse.json({ success: false });
        }

        const projectId = formData.get("id")

        const project = await prisma.project.findFirst({
            where: {
                id: projectId
            }
        })

        if (!project) {
            return NextResponse.json({ success: false });
        }

        const fileName = uuidv4() + fileData.name

        const fileContentArray = fileName.split(".")

        const fileContent = fileContentArray[fileContentArray.length - 1]

        const FileBody = await fileData.arrayBuffer();

        const bucketName = process.env.BUCKET_NAME;


        const s3 = new S3Client({
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });

        const res = await s3.send(new PutObjectCommand({ Bucket: bucketName, Key: fileName, Body: FileBody, ContentType: `image/${fileContent}` }));

        if (res['$metadata']?.httpStatusCode != 200) {
            return NextResponse.json({ success: false }, { status: httpStatus.BAD_REQUEST })
        }

        const updatedProject = await prisma.project.update({
            where: {
                id: projectId
            },
            data: {
                imageUrl: fileName
            }
        })

        return NextResponse.json({ success: true, project: updatedProject }, { status: httpStatus.OK })

    } catch (error) {
        return next({
            error
        })
    }
}