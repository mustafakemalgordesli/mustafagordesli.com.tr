import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import next from "@/lib/next"
import crypto from "crypto"
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';

const loginSchema = z.object({
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    password: z.string().min(6)
})

export async function POST(req) {
    try {
        const body = await req.json()

        const isValidData = loginSchema.parse(body)

        const user = await prisma.user.findFirst({
            where: {
                email: isValidData.email,
            },
            select: {
                name: true,
                email: true,
                id: true,
                password: true
            }
        })

        if (!user)
            return NextResponse.json({
                success: false,
                message: "User not found",
            }, { status: httpStatus.BAD_REQUEST });


        const match = await bcrypt.compare(isValidData.password, user.password)

        if (match) {
            user.password = undefined;

            const token = await prisma.token.upsert({
                where: {
                    userId: user.id
                },
                update: {
                    token: uuidv4() + crypto.randomBytes(32).toString('hex'),
                    createdAt: new Date()
                },
                create: {
                    token: uuidv4() + crypto.randomBytes(32).toString('hex'),
                    createdAt: new Date(),
                    userId: user.id
                }
            })

            if (!token) return NextResponse.json({
                success: true,
                data: user,
            }, { status: 200 });

            const response = NextResponse.json({
                success: true,
                data: user,
                token: token.token
            }, { status: 200 });

            response.cookies.set({
                name: "accesstoken",
                value: token.token,
                path: "/",
            });

            return response
        }

        return next({
            statusCode: httpStatus.BAD_REQUEST,
            message: "Password is wrong",
        })

    } catch (error) {
        return next({
            error
        })
    }
}