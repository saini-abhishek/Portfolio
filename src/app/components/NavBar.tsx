"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    StackOverflow,
    SunIcon,
} from "./Icon";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { THEME } from "../utils/constants";

const CustomLink = ({
    href,
    title,
    className = "",
}: {
    href: string;
    title: string;
    className: string;
}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block ${
                    pathname === href ? "w-full" : "w-0"
                } bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({
    href,
    title,
    className = "",
    toggle,
}: {
    href: string;
    title: string;
    className: string;
    toggle: () => any;
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            onClick={handleClick}
            className={`${className} relative group text-light dark:text-dark my-2`}
        >
            {title}
            <span
                className={`h-[1px] inline-block ${
                    pathname === href ? "w-full" : "w-0"
                } bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light`}
            >
                &nbsp;
            </span>
        </button>
    );
};

const SOCIAL_NAV_ITMES = [
    {
        href: "https://stackoverflow.com/users/10689556/abhishek-saini",
        icon: "stackoverflow",
    },
    {
        href: "https://github.com/saini-abhishek",
        icon: "github",
    },
    {
        href: "https://www.linkedin.com/in/abhishek-saini-74a029182/",
        icon: "linkedin",
    },
];

const IconComponents = {
    stackoverflow: StackOverflow,
    linkedin: LinkedInIcon,
    github: GithubIcon,
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="dark:bg-dark items-center justify-between w-full px-32 py-8 font-medium flex text-dark dark:text-light relative lg:px-16 md:px-12 sm:px-8 ">
            <button
                onClick={handleClick}
                className="flex-col justify-center items-center hidden lg:flex"
            >
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm m-0.5  transition-all duration-300 ease-out ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink
                        href="/projects"
                        title="Projects"
                        className="mx-4"
                    />
                    {/* <CustomLink
                        href="/articles"
                        title="Articles"
                        className="ml-4"
                    /> */}
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    {SOCIAL_NAV_ITMES.map(
                        ({ href, icon }: { href: string; icon: string }) => {
                            const IconComponent = (IconComponents as any)[icon];
                            return (
                                <motion.a
                                    key={icon}
                                    href={href}
                                    target="_blank"
                                    className="w-6 mx-3"
                                    whileHover={{
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                >
                                    <IconComponent />
                                </motion.a>
                            );
                        }
                    )}

                    <button
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                            mode === THEME.DARK
                                ? "bg-light text-dark"
                                : "bg-dark text-light"
                        }`}
                        onClick={() =>
                            setMode(
                                mode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
                            )
                        }
                    >
                        {mode === THEME.DARK ? (
                            <SunIcon className={"fill-dark"} />
                        ) : (
                            <MoonIcon className={"fill-dark"} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className=" min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded backdrop-blur-md py-32"
                >
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projects"
                            className=""
                            toggle={handleClick}
                        />
                        {/* <CustomMobileLink
                            href="/articles"
                            title="Articles"
                            className=""
                            toggle={handleClick}
                        /> */}
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        {SOCIAL_NAV_ITMES.map(
                            ({
                                href,
                                icon,
                            }: {
                                href: string;
                                icon: string;
                            }) => {
                                const IconComponent = (IconComponents as any)[
                                    icon
                                ];

                                const githubClasses =
                                    icon === "github"
                                        ? "bg-light dark:bg-dark rounded-full"
                                        : "";
                                return (
                                    <motion.a
                                        key={icon}
                                        href={href}
                                        target="_blank"
                                        className={`w-6 mx-3 sm-mx-1 ${githubClasses}`}
                                        whileHover={{
                                            y: -2,
                                        }}
                                        whileTap={{
                                            scale: 0.9,
                                        }}
                                    >
                                        <IconComponent />
                                    </motion.a>
                                );
                            }
                        )}

                        <button
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                                mode === THEME.DARK
                                    ? "bg-light text-dark"
                                    : "bg-dark text-light"
                            }`}
                            onClick={() =>
                                setMode(
                                    mode === THEME.LIGHT
                                        ? THEME.DARK
                                        : THEME.LIGHT
                                )
                            }
                        >
                            {mode === THEME.DARK ? (
                                <SunIcon className={"fill-dark"} />
                            ) : (
                                <MoonIcon className={"fill-dark"} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
