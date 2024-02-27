import React from "react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full border-0 border-t-2 border-solid border-dark dark:border-light font-medium text-lg text-dark dark:text-light sm:text-base">
            <div
                className={`w-full h-full z-0 bg-light dark:bg-dark p-24 sm:p-12 py-8 flex items-center justify-between lg:flex-col lg:py-6`}
            >
                <span>{currentYear} &copy; No  copyright issues.</span>
                <div className="flex items-center lg:py-2">
                    Build with{" "}
                    <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>{" "}
                    by&nbsp;
                    <Link
                        href="/"
                        className="underline underline-offset-2"
                        target={"_blank"}
                    >
                        Abhishek Saini
                    </Link>
                </div>
                <Link
                    href={"mailto:atumabhi@gmail.coom"}
                    target={"_blank"}
                    className="underline underline-offset-2"
                >
                    Say Hello
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
