import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        const accessToken = req?.headers?.get('authorization')?.split(' ')[1];

        if (!accessToken)
            return NextResponse.json({
                success: false,
            });

        const token = await prisma.token.findFirst({
            where: {
                token: accessToken,
            },
        });

        if (!token)
            return NextResponse.json({
                success: false,
            });

        const timeDiff = Math.abs(
            new Date().getTime() - token?.createdAt.getTime()
        );

        const diffMin = Math.ceil(timeDiff / (1000 * 60));

        if (diffMin >= 60 * 24) {
            await prisma.token.delete({
                where: {
                    id: token.id,
                },
            });
            return NextResponse.json({
                success: false,
            });
        }

        const response = NextResponse.json({
            success: true,
            userId: token?.userId,
        });
        response.headers.set('authorization', token?.userId);
        return response;
    } catch (error) {
        return NextResponse.json({
            success: false,
        });
    }
};