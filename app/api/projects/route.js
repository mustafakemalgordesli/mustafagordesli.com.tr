import authenticate from "@/lib/authenticate"
import next from "@/lib/next";
import prisma from "@/lib/prisma";
import httpStatus from "http-status";
import { NextResponse } from "next/server";
import { z } from "zod"

const createSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    imageUrl: z.string().min(1)
})

export const POST = async (req) => {
    try {
        const user = await authenticate(req)
        if (!user) return next({ statusCode: httpStatus.BAD_REQUEST, message: "Invalid token or expired" });

        const body = await req.json()

        const isValidData = createSchema.parse(body)

        const project = await prisma.project.create({
            data: isValidData
        })

        return NextResponse.json({ success: true, project: project }, { status: httpStatus.OK })
    } catch (error) {
        return next({
            error
        })
    }
}

export const GET = async (req) => {
    try {
        const projects = await prisma.project.findMany();

        return NextResponse.json({
            success: true,
            projects: projects
        }, { status: httpStatus.OK })
    } catch (error) {
        return next({
            error
        })
    }
}
