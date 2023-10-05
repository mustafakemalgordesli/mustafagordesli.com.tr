import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "./mode-toogle";

export default function SocialMediaNav({ className }) {
  return (
    <nav className={`sm:flex sm:space-x-1 items-center ml-auto ${className}`}>
      <Link
        href="/docs"
        className="flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-background hover:bg-accent hover:text-accent-foreground rounded"
      >
        <LinkedInLogoIcon className="h-icon w-icon" />
      </Link>

      <Link
        href="/docs"
        className="flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-background hover:bg-accent hover:text-accent-foreground rounded"
      >
        <GitHubLogoIcon className="h-icon w-icon" />
      </Link>
      <Link
        href="mailto:m.kemalgordesli@gmail.com?body=My mail adress"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-background hover:bg-accent hover:text-accent-foreground rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="fill-black dark:fill-white w-icon h-icon"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
        </svg>
      </Link>

      <ModeToggle className="hidden sm:inline-flex" />
    </nav>
  );
}
