"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, StackOverflow } from "./Icon";

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
        group-hover:w-full transition-[width] ease duration-300`}
            >
                &nbsp;
            </span>
        </Link>
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
    return (
        <header className="items-center justify-between w-full px-32 py-8 font-medium flex">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink
                    href="/projects"
                    title="Projects"
                    className="mx-4"
                />
                <CustomLink
                    href="/articles"
                    title="Articles"
                    className="ml-4"
                />
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
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
