"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [isLoading, SetLoading] = useState(false);
  return (
    <form>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your Email"
          required
          className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-4">
        <textarea
          rows="6"
          placeholder="Your Message"
          className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
        ></textarea>
      </div>
      <div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-primary border-primary w-full rounded border p-3 py-6 text-white transition hover:bg-opacity-90"
        >
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </div>
    </form>
  );
}
