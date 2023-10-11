import authenticate from "@/lib/authenticate"
import next from "@/lib/next";
import httpStatus from "http-status";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const res = await authenticate(req)
    if (!res) return next({ statusCode: httpStatus.BAD_REQUEST, message: "Invalid token or expired" });
    return NextResponse.json({ success: true }, { status: httpStatus.OK })
}