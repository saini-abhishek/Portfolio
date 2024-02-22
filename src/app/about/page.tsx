import Head from "next/head";
import Image from "next/image";
import { Metadata } from "next";
import AnimatedText from "../components/AnimatedText";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import AnimatedNumbers from "./AnimatedNumbers";

export const metadata: Metadata = {
    title: "Abhishek Saini | About",
    description: "Abhishek Saini, iamabhisheksaini",
};

const about = () => {
    return (
        <>
            <Head>
                <title>Abhishek Saini | About</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
                <div className="grid w-full grid-cols-8 gap-16">
                    <div className="col-span-6 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                            Biography
                        </h2>

                        <p className="font-medium mb-2">
                            Hi, I am Abhishek Saini, a Fullstack Web Developer
                            with a passion for creating beautiful, functional,
                            and user-centered digital experiences. With 4+ years
                            of experience in the field.
                        </p>

                        <p className="font-medium mb-2">
                            I am proficient in modern web technologies including
                            HTML5, CSS3, and JavaScript, with expertise in
                            frameworks like React. Adept at crafting engaging
                            user interfaces, optimizing performance, and
                            collaborating effectively in cross-functional teams.
                            Passionate about creating exceptional web
                            experiences that blend creativity with technical
                            excellence.
                        </p>

                        <p className="font-medium">
                            Whether I am working on a website, mobile app, or
                            other digital product, I bring my commitment to
                            design excellence and user-centered thinking to
                            every project I work on. I look forward to the
                            opportunity to bring my skills and passion to your
                            next project.
                        </p>
                    </div>

                    {/* <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                            <Image
                                src="/images/profile/developer-pic-2.jpg"
                                alt="abhishek-saini"
                                className="w-full h-auto"
                                width={600}
                                height={600}
                            />
                        </div> */}

                    <div className="col-span-2 flex flex-col items-end justify-between">
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={3} /> +
                            </span>
                            <h2 className="text-xl font-medium captilize text-dark/75">
                                satisfied clients
                            </h2>
                        </div>

                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={6} />+
                            </span>
                            <h2 className="text-xl font-medium captilize text-dark/75">
                                project completed
                            </h2>
                        </div>

                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className="text-xl font-medium captilize text-dark/75">
                                year of experience
                            </h2>
                        </div>
                    </div>
                </div>

                <Skills />

                <div className="flex w-full">
                    <Experience />
                    <Education />
                </div>
            </main>
        </>
    );
};

export default about;
