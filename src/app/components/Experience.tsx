"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const EXPERIENCE_TITLE = "Experience";

const experience = [
    {
        position: "Associate-Project",
        company: "Cognizant",
        time: "Dec-2021 - Present",
        address: "Noida, UP",
        companyLink: "https://www.cognizant.com/in/en",
        description: [`<p>Client: <strong>Max life Insurance</strong></p>`],
    },
    {
        position: "Software Engineer",
        company: "Thinksys Software Pvt. Ltd.",
        time: "June-2019 - Dec-2021",
        address: "Noida, UP",
        companyLink: "https://thinksys.com/",
        description: [`<p>Client: <strong>Gefen Technologies</strong></p>`],
    },
    {
        position: "Software Intern",
        company: "OpexAI Business Consulting Ltd.",
        time: "Sep-2018 - Nov-2028",
        address: "Noida, UP",
        description: [`<p>Client: <strong>Open AI</strong></p>`],
    },
];

const Details = ({
    position,
    company,
    companyLink,
    time,
    address,
    description,
}: {
    position: string;
    company: string;
    companyLink?: string;
    time: string;
    address: string;
    description?: string[];
}) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
        >
            <LiIcon reference={ref} />
            <div>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {description?.map((point, index) => (
                        <div className="flex mt-4" key={index}>
                            <div dangerouslySetInnerHTML={{ __html: point }} />
                        </div>
                    ))}
                </p>
            </div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-32">
            <h2 className="w-full font-bold text-5xl mb-16 text-center md:text-6xl xs:text-4xl md:mb:16">
                {EXPERIENCE_TITLE}
            </h2>

            <div ref={ref} className="w-[75%] lg:[90%] md:w-full mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className=" absolute md:w-[2px] md:left-[30px] xs
                    :left-[20px] left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    {experience.map(
                        ({
                            position,
                            company,
                            time,
                            address,
                            companyLink,
                            description,
                        }) => (
                            <Details
                                key={company}
                                position={position}
                                company={company}
                                time={time}
                                address={address}
                                companyLink={companyLink}
                                description={description}
                            />
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
