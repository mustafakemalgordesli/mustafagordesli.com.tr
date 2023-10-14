# My personel portfolio site

### Live: https://mustafagordesli.com.tr

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tools used

-   Nextjs
-   React
-   Tailwind
-   shadcn/ui
-   Radix Icons
-   Prisma
-   MongoDB
-   AWS S3

## Libraries used

-   @aws-sdk/client-s3
-   nodemailer
-   next-themes
-   use-immer
-   zod
-   uuid
-   bcrypt
-   axios
-   @prisma/client

## ENV

```bash
DATABASE_URL="<DATABASE URL>"
MAIL_HOST="<MAIL SMTP HOST URL>"
MAIL_PORT=587 #MAIL PORT
MAIL_USER="<example@mail.com>"
MAIL_PASS="<MAIL PASSWORD OR SMTP KEY>"
MAIL_SERVICE="<YOUR MAIL SERVICE>" # example: gmail
NEXT_PUBLIC_CAPTHA="<GOOGLE CAPTHA PUBLIC KEY>"
NEXT_PUBLIC_CAPTHA_SECRET="<GOOGLE CAPTHA SECRET KEY>"
AWS_ACCESS_KEY_ID="<AWS ACCESS KEY ID>"
AWS_SECRET_ACCESS_KEY="<AWS SECRET KEY ID>"
BUCKET_NAME="<AWS S3 BUCKET NAME>"
AWS_REGION="<AWS REGION>"
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Licence

MIT License

Copyright (c) 2023 Mustafa Kemal Gördesli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
