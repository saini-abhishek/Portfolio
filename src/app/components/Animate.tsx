"use client";

import { motion } from "framer-motion";
import React from "react";

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Animate = ({ children }: { children: any[] }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.8 }}
    >
      {children?.map((child, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={defaultAnimation}
        >
          {child}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Animate;