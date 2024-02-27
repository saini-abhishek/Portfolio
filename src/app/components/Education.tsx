"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  type,
  time,
  place,
}: {
  type: string;
  time: string;
  place: string;
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
      </div>
    </li>
  );
};

const EDUCATION_TITLE = "Education";

const educations = [
  {
    type: "B.Tech Computer Science",
    time: "2015-2029",
    place: "Mangalmay Institute Of Engineering & Technology (MIET)",
  },
  {
    type: "Intermediate",
    time: "2013-2025",
    place: "RSS International School",
  },
  {
    type: "High School",
    time: "2011-2023",
    place: "RSS International School",
  },
];

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h2 className="w-full font-bold text-5xl mb-16 text-center text-slate-500 md:text-5xl xs:text-4xl md:mb:16">
        {EDUCATION_TITLE}
      </h2>

      <div ref={ref} className="w-[75%] lg:[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute  md:w-[2px] md:left-[30px] xs:left-[20px] left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {educations.map(({ type, time, place }) => (
            <Details key={type} type={type} time={time} place={place} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
