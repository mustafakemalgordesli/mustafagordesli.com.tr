"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./mode-toogle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SocialMediaNav from "./social-media-nav";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const [navbarOpen, SetNavbarOpen] = useState(false);
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div
          className={`container flex h-14
         sm:h-14 items-center max-w-screen-xl`}
        >
          <div className="mr-auto w-[170px]">
            <Link href="/" className="w-full font-bold">
              Mustafa K. Gordesli
            </Link>
          </div>

          <nav className="items-center flex w-full sm:w-auto sm:flex sm:space-x-6 text-sm font-medium">
            <ul className="hidden sm:flex sm:mt-0 sm:flex-row sm:space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
              <li>
                <HomeLink pathname={pathname} />
              </li>
              <li>
                <AboutLink pathname={pathname} />
              </li>
              <li>
                <ResumeLink pathname={pathname} />
              </li>
              <li>
                <ProjectLink pathname={pathname} />
              </li>
              <li>
                <ContactLink pathname={pathname} />
              </li>
            </ul>
          </nav>

          <SocialMediaNav className={"w-[150px] hidden sm:flex"} />

          <div className="sm:hidden min-w-[90px] space-x-1 flex flex-row">
            <ModeToggle />

            <Button
              variant="outline"
              onClick={() => SetNavbarOpen((s) => !s)}
              size="icon"
              className="bg-background hover:bg-accent hover:text-accent-foreground rounded border-0 sm:hidden h-10 w-10"
            >
              <HamburgerMenuIcon
                className={`w-icon h-icon ${navbarOpen && "hidden"}`}
              />

              <div className={`w-icon h-icon ${!navbarOpen && "hidden"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="fill-black w-icon h-icon dark:fill-white"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </div>
            </Button>
          </div>
        </div>
        <div
          className="sm:hidden absolute w-full bg-white dark:bg-black py-2"
          id="mobile-menu"
          style={{ display: !navbarOpen ? "none" : "" }}
        >
          <div className="px-2 py-1 w-auto space-x-0.5">
            <div
              className={`${
                pathname === "/"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } block rounded px-3 py-2 text-base font-medium`}
            >
              <HomeLink
                className={`${
                  pathname === "/"
                    ? "!text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              />
            </div>
            <div
              className={`${
                !pathname.startsWith("/about")
                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "bg-gray-700 text-white"
              } block rounded px-3 py-2 text-base font-medium`}
            >
              <AboutLink
                className={`${
                  pathname.startsWith("/about")
                    ? "!text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              />
            </div>
            {/* <div className="block rounded-md text-base font-medium"> */}
            <SocialMediaNav className="flex flex-row ml-0 mr-auto space-x-1 px-3 mt-0" />
            {/* </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

const HomeLink = ({ pathname = "", className = "" }) => (
  <Link
    className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
      pathname === "/" ? "text-foreground" : "text-foreground/60"
    } ${className}`}
    href="/"
  >
    Home
  </Link>
);

const AboutLink = ({ pathname = "", className = "" }) => (
  <Link
    className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
      pathname.startsWith("/about") ? "text-foreground" : "text-foreground/60"
    } ${className}`}
    href="/about"
  >
    About
  </Link>
);

const ResumeLink = ({ pathname = "" }) => (
  <Link
    className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
      pathname.startsWith("/resume") ? "text-foreground" : "text-foreground/60"
    }`}
    href="/resume"
  >
    Resume
  </Link>
);

const ProjectLink = ({ pathname = "" }) => (
  <Link
    className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
      pathname.startsWith("/projects")
        ? "text-foreground"
        : "text-foreground/60"
    }`}
    href="/projects"
  >
    Projects
  </Link>
);

const ContactLink = ({ pathname = "" }) => (
  <Link
    className={` block transition-colors hover:text-foreground/80 p-2 sm:p-0 text-foreground${
      pathname.startsWith("/contact") ? "" : "/60"
    }`}
    href="/contact"
  >
    Contact
  </Link>
);
