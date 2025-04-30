"use client";
import splitStringUsingRegex from "./utils/splitSringUsingRegex";
import { motion } from "framer-motion";

const heading = "Frontend Developer";
const skills = "{JavaScript, React, Next.js, git, HTML, CSS, Tailwind...}";
const intro =
  "Hi, I'm Jeff — a passionate web developer with expertise in React and Next.js. I craft dynamic, user-friendly web experiences, utilizing the latest technologies to bring ideas to life and deliver seamless, modern solutions.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
const buttonVariantsLeft = {
  hidden: { x: -50, opacity: 0 }, // Start from the left (x: -50px) and invisible
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }, // Animate to original position (x: 0)
};

const buttonVariantsRight = {
  hidden: { x: 50, opacity: 0 }, // Start from the right (x: 50px) and invisible
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }, // Animate to original position (x: 0)
};
function HeroBanner() {
  return (
    <main className="container max-w-7xl mx-auto w-full px-4 text-center mt-[64px] mb-[70px] lg:mt-90px">
      <div className="mb-[42px]">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className="text-[48px] mb-[12px] lg:text-[70px] font-bold"
        >
          {heading.split("").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className="mb-[12px]"
        >
          {skills.split("").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.35 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
        >
          {intro.split("").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.35 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <motion.div className="flex justify-center gap-10 items-center">
        <motion.button
          className="bg-[#4285f4] text-white py-[14px] px-[28px] rounded-[50px]"
          initial="hidden"
          animate="visible"
          variants={buttonVariantsLeft}
        >
          See my dev work
        </motion.button>
        <motion.button
          className="border-b-2 border-blue-500 text-blue-500"
          initial="hidden"
          animate="visible"
          variants={buttonVariantsRight}
        >
          Download CV
        </motion.button>
      </motion.div>
    </main>
  );
}

export default HeroBanner;
