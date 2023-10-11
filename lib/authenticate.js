import prisma from "./prisma";

const authenticate = async (req) => {
    const accessToken = req?.cookies?.get("accesstoken").value || req?.headers?.get("authorization")?.split(" ")[1];

    const token = await prisma.token.findUnique({
        where: {
            token: accessToken
        }
    })

    if (!token)
        return false

    const timeDiff = Math.abs(
        new Date().getTime() - token?.createdAt.getTime()
    );

    const diffMin = Math.ceil(timeDiff / (1000 * 60));

    if (diffMin >= 60 * 24)
        return false

    return true
}

export default authenticate