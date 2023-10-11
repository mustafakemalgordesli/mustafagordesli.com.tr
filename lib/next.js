import { NextResponse } from "next/server";
import httpStatus from "http-status";

export default function next(err) {
    console.log(err)
    let statusCode = err?.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    let resMessage = err?.message || "Internal Server Error";
    if (!err?.error) err.error = {
        name: "InternalServerError",
        message: "Internal Server Error"
    }
    const { name, message } = err?.error
    if (name === "ZodError") {
        resMessage = "Request not valid";
        statusCode = httpStatus.BAD_REQUEST;
    }
    if (name === "JsonWebTokenError") {
        resMessage = "Auth Failed";
        statusCode = httpStatus.UNAUTHORIZED;
    }
    if (name === "PrismaClientKnownRequestError") {
        resMessage = "Not Found";
        statusCode = httpStatus.NOT_FOUND;
    }
    return NextResponse.json({
        success: false,
        message: resMessage,
    }, { status: statusCode })
}