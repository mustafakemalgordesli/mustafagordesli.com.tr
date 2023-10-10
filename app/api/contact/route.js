
import { NextResponse } from "next/server"
import sendMail from "@/lib/send-mail"
import { z } from "zod"

const createSchema = z.object({
    title: z.string().min(1),
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    content: z.string()
})

export const POST = async (req) => {
    try {
        const body = await req.json()

        const isValidData = createSchema.parse(body)

        const htmlTemplate = `<div>
        <h1>${isValidData.email}</h1></br>
        <p>${isValidData.content}</p>
        </div>`

        const mailRes = await sendMail("m.kemalgordesli@gmail.com", isValidData.title, null, htmlTemplate)

        if (mailRes) return NextResponse.json({ success: true }, { success: 200 })

        return NextResponse.json({ success: false }, { success: 200 })


    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 })
    }
}