import React from "react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full border border-t-2 border-solid border-dark font-medium text-lg">
            <div
                className={`w-full h-full z-0 bg-light p-32 py-8 flex items-center justify-between`}
            >
                <span>{currentYear} &copy; All Rights Resevered</span>
                <div className="flex items-center">
                    Build with{" "}
                    <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
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
                    href="/"
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
