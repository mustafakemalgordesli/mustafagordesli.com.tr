import authenticate from "@/lib/authenticate"
import next from "@/lib/next";
import prisma from "@/lib/prisma";
import httpStatus from "http-status";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';

export const POST = async (req) => {
    // const client = new AWS.S3({ region: "eu-central-1" });
    try {
        const user = await authenticate(req)
        if (!user) return next({ statusCode: httpStatus.BAD_REQUEST, message: "Invalid token or expired" });

        const formData = await req.formData()

        const projectId = formData.get("id")

        console.log(projectId)


        const project = await prisma.project.findFirst({
            where: {
                id: projectId
            }
        })

        const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID
        const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY

        const s3 = new AWS.S3({
            accessKeyId: AWS_ACCESS_KEY,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
        });

        const fileData = formData.get("image")

        if (!fileData) {
            return NextResponse.json({ success: false });
        }

        const fileName = uuidv4() + fileData.name

        const bucketName = process.env.BUCKET_NAME;

        s3.upload({
            Bucket: bucketName,
            Key: fileName,
            Body: fileData
        }, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`File uploaded successfully. ${data.Location}`);
            }
        });

        return NextResponse.json({ success: true, project: project }, { status: httpStatus.OK })
    } catch (error) {
        return next({
            error
        })
    }
}