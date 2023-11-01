"use client"
import Link from "next/link"

export default function Error() {
    return <section className="flex justify-center items-center min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">500</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-400 md:text-4xl ">Something&apos;s missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500 ">Internal Server Error </p>
                <Link href="/" className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4">Back to Homepage</Link>
            </div>
        </div>
    </section>
}