"use client";

import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toogle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center max-w-screen-xl">
        <div className="mr-auto w-[150px]">
          <span className="hidden font-bold sm:inline-block">
            Mustafa K. Gordesli
          </span>
        </div>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            className={`transition-colors hover:text-foreground/80 text-foreground${
              pathname === "/" ? "" : "/60"
            }`}
            href="#home"
          >
            Home
          </Link>
          <Link
            className={`transition-colors hover:text-foreground/80 text-foreground${
              pathname.startsWith("/about") ? "" : "/60"
            }`}
            href="#about"
          >
            About me
          </Link>
          <Link
            className={`transition-colors hover:text-foreground/80 text-foreground${
              pathname.startsWith("/resume") ? "" : "/60"
            }`}
            href="#resume"
          >
            Resume
          </Link>
          <Link
            className={`transition-colors hover:text-foreground/80 text-foreground${
              pathname.startsWith("/projects") ? "" : "/60"
            }`}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={`transition-colors hover:text-foreground/80 text-foreground${
              pathname.startsWith("/contact") ? "" : "/60"
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <nav className="hidden sm:flex items-center ml-auto w-[150px]">
          <Link
            href="/docs"
            className="flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
          >
            <LinkedInLogoIcon className="h-[1.5rem] w-[1.5rem]" />
          </Link>

          <Link
            href="/docs"
            className="flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
          >
            <GitHubLogoIcon className="h-[1.5rem] w-[1.5rem]" />
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
