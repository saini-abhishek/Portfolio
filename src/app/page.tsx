import Head from "next/head";
import Image from "next/image";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icon";
import HireMe from "./components/HireMe";
import TextTypingAnimation from "./about/TextTypingAnimation";
import Animate from "./components/Animate";
import ProfileImg from "../../public/images/profile/abhishek-saini.webp";

export default function Home() {
  return (
    <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
      <div className="flex items-center justify-between w-full lg:flex-col">
        <div className="w-1/2 md:w-full">
          <Image
            src={ProfileImg}
            alt="abhishek-saini"
            className="w-full h-auto rounded-[50%] lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              50vw"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
          <Animate>
            <h1
              className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-4xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl`}
            >
              <TextTypingAnimation text="Hi! I'm Abhishek Saini." />
            </h1>
            <h1
              className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-4xl`}
            >
              <TextTypingAnimation text="Fullstack Web Developer" />
            </h1>
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              <TextTypingAnimation
                text="As a skilled full-stack developer, I am dedicated to
                                turning ideas into innovative web applications.
                                Explore my latest projects and articles, showcasing
                                my expertise in React.js and web development"
              />
            </p>
          </Animate>
          <div className="flex items-center self-start mt-2 lg:self-center">
            <Link
              href="/Abhishek-Saini-Resume.pdf"
              target={"_blank"}
              className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
              download={true}
            >
              Resume <LinkArrow className={"w-6 ml-1"} />
            </Link>
            <Link
              href="mailto:atumabhi@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-20 md:hidden">
        <Image
          src="/images/svgs/miscellaneous_icons_1.svg"
          alt="Abhishek Saini"
          className="w-full h-full"
          width={30}
          height={30}
        />
      </div>
    </main>
  );
}
