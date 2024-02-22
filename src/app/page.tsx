import Head from "next/head";
import Image from "next/image";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icon";
import HireMe from "./components/HireMe";
import TextTypingAnimation from "./about/TextTypingAnimation";

export default function Home() {
    return (
        <>
            <Head>
                <title>Abhishek Saini</title>
                <meta name="description" content="Abhishek Saini" />
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <Image
                            src="/images/profile/developer-pic-1.png"
                            alt="abhishek-saini"
                            className="w-full h-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center">
                        <AnimatedText
                            text="Hi! I'm Abhishek Saini. Fullstack Web Developer"
                            className="!text-4xl !text-left"
                        />
                        <p className="my-4 text-base font-medium">
                            <TextTypingAnimation
                                text="As a skilled full-stack developer, I am dedicated to
                                turning ideas into innovative web applications.
                                Explore my latest projects and articles, showcasing
                                my expertise in React.js and web development"
                            />
                        </p>
                        <div className="flex items-center self-start mt-2">
                            <Link
                                href="/Abhishek-Saini-Resume.pdf"
                                target={"_blank"}
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                                download={true}
                            >
                                Resume <LinkArrow className={"w-6 ml-1"} />
                            </Link>
                            <Link
                                href="mailto:atumabhi@gmail.com"
                                target={"_blank"}
                                className="ml-4 text-lg font-medium capitalize text-dark underline"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <HireMe />
                <div className="absolute right-8 bottom-8 inline-block w-20">
                    <Image
                        src="/images/svgs/miscellaneous_icons_1.svg"
                        alt="Abhishek Saini"
                        className="w-full h-full"
                        width={30}
                        height={30}
                    />
                </div>
            </main>
        </>
    );
}
