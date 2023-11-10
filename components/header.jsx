'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ModeToggle } from './mode-toogle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SocialMediaNav from './social-media-nav';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '@/lib/update-menu-state';
import { selectMenuState } from '@/store/menu-store';

export default function Header() {
    const dispatch = useDispatch();

    const activeMenu = useSelector(selectMenuState);

    const [navbarOpen, SetNavbarOpen] = useState(false);

    useEffect(() => {
        SetNavbarOpen(false);
    }, [activeMenu]);

    const changeActiveMenu = () => updateState(dispatch);

    return (
        <>
            <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div
                    className={`container flex h-14
         sm:h-14 items-center max-w-screen-xl`}
                >
                    <div className="sm:w-[172px] w-[160px]">
                        <LogoLink changeActiveMenu={changeActiveMenu} />
                    </div>

                    <nav className="items-center sm:ml-auto flex w-full sm:w-auto sm:flex sm:space-x-6 text-sm font-medium">
                        <ul className="hidden sm:flex sm:mt-0 sm:flex-row sm:space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
                            <li>
                                <HomeLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <AboutLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <ResumeLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <ProjectLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <ContactLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                        </ul>
                    </nav>

                    {/* <Button
            variant="outline"
            size="icon"
            className="ml-auto rounded border-0 h-10 w-10"
          >
            <Image
              src="/turkey.png"
              width={20.8}
              height={20.8}
              alt="turkey logo"
            />
          </Button> */}

                    {/* <SocialMediaNav className={'ml-auto hidden sm:flex'} /> */}
                    <SocialMediaNav className={'sm:ml-auto flex'} />

                    {/* <div className="w-10 h-10">
                        <ModeToggle />
                    </div> */}

                    {/* <div className="sm:hidden space-x-1 flex flex-row">
                        <Button
                            variant="outline"
                            onClick={() => SetNavbarOpen((s) => !s)}
                            size="icon"
                            className="bg-background hover:bg-accent hover:text-accent-foreground rounded border-0 sm:hidden h-10 w-10"
                        >
                            <HamburgerMenuIcon
                                className={`w-icon h-icon ${
                                    navbarOpen && 'hidden'
                                }`}
                            />

                            <div
                                className={`w-icon h-icon ${
                                    !navbarOpen && 'hidden'
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                    className="fill-black w-icon h-icon dark:fill-white"
                                >
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                </svg>
                            </div>
                        </Button>
                    </div> */}
                </div>

                {/* mobile screen navbar */}
                {/* <div
                    className="sm:hidden absolute w-full bg-white dark:bg-black border-y"
                    id="mobile-menu"
                    style={{ display: !navbarOpen ? 'none' : '' }}
                >
                    <div className="px-2 w-auto space-x-0.5">
                        <div
                            className={`${
                                pathname === '/'
                                    ? 'bg-gray-700 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } block rounded px-3 py-2 text-base font-medium`}
                        >
                            <HomeLink
                                className={`${
                                    pathname === '/'
                                        ? '!text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            />
                        </div>
                        <div
                            className={`${
                                pathname.startsWith('/about')
                                    ? 'bg-gray-700 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } block rounded px-3 py-2 text-base font-medium`}
                        >
                            <AboutLink
                                className={`${
                                    pathname.startsWith('/about')
                                        ? '!text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            />
                        </div>
                        <div
                            className={`${
                                pathname.startsWith('/resume')
                                    ? 'bg-gray-700 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } block rounded px-3 py-2 text-base font-medium`}
                        >
                            <ResumeLink
                                className={`${
                                    pathname.startsWith('/resume')
                                        ? '!text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            />
                        </div>
                        <div
                            className={`${
                                pathname.startsWith('/projects')
                                    ? 'bg-gray-700 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } block rounded px-3 py-2 text-base font-medium`}
                        >
                            <ProjectLink
                                className={`${
                                    pathname.startsWith('/projects')
                                        ? '!text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            />
                        </div>
                        <div
                            className={`${
                                pathname.startsWith('/contact')
                                    ? 'bg-gray-700 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } block rounded px-3 py-2 text-base font-medium`}
                        >
                            <ContactLink
                                className={`${
                                    pathname.startsWith('/contact')
                                        ? '!text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            />
                        </div>

                     <SocialMediaNav className="flex flex-row ml-0 mr-auto space-x-1 px-3 mt-0" />
                    </div>
                </div> */}
            </header>
        </>
    );
}

function LogoLink({ changeActiveMenu }) {
    return (
        <Link
            href="#home"
            className="w-full font-bold text-center"
            onClick={() => {
                changeActiveMenu();
            }}
            scrollsmooth
        >
            <div className="sm:hidden w-[65px]">M. K. G.</div>
            <span className="hidden sm:block">Mustafa K. Gordesli</span>
        </Link>
    );
}

const HomeLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
            activeMenu == '#home' ? 'text-foreground' : 'text-foreground/60'
        } ${className}`}
        onClick={changeActiveMenu}
        href="#home"
        scrollsmooth
    >
        Home
    </Link>
);

const AboutLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
            activeMenu == '#about' ? 'text-foreground' : 'text-foreground/60'
        } ${className}`}
        onClick={changeActiveMenu}
        href="#about"
    >
        About
    </Link>
);

const ResumeLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
            activeMenu == '#resume' ? 'text-foreground' : 'text-foreground/60'
        } ${className}`}
        onClick={changeActiveMenu}
        href="#resume"
    >
        Resume
    </Link>
);

const ProjectLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${
            activeMenu == '#projects' ? 'text-foreground' : 'text-foreground/60'
        } ${className}`}
        href="#projects"
        onClick={changeActiveMenu}
    >
        Projects
    </Link>
);

const ContactLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={` block transition-colors hover:text-foreground/80 p-2 sm:p-0 text-foreground${
            activeMenu == '#contact' ? '' : '/60'
        } ${className}`}
        href="#contact"
        onClick={changeActiveMenu}
    >
        Contact
    </Link>
);
