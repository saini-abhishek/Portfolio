"use client";

import { motion } from "framer-motion";

const TextTypingAnimation = ({ text }: { text: string }) => {
    return (
        <>
            {text.split(" ").map((word, index) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: index / 10,
                    }}
                    key={index}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </>
    );
};

export default TextTypingAnimation;
