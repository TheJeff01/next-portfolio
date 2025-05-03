"use client";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import splitStringUsingRegex from "./utils/splitStringUsingRegex"; // fixed typo
import ProblemSolverBrief from "./ProblemSolverBrief";
import { motion } from "framer-motion";
import React from "react";

const heading = "Problem solver <Coder>";
const subheading = "Frontend Developer with over 2 years of experience";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const data = [
  {
    boxicon: <MdCheckBoxOutlineBlank />,
    text: "Holder of a Bachelor’s Degree in Computer Science from Coal City University, Enugu State.",
  },
  {
    boxicon: <MdCheckBoxOutlineBlank />,
    text: "Skilled in React.js and Next.js, with a passion for staying ahead of the curve through continuous learning and adoption of emerging technologies.",
  },
  {
    boxicon: <MdCheckBoxOutlineBlank />,
    text: "I love working in a team environment, but I can also work independently.",
  },
];

function ProblemSolver() {
  return (
    <main className="container max-w-7xl mx-auto w-full px-4">
      <div className="border-b-[2px]">
        <div className="text-center mb-[34px] lg:mb-[80px] ">
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
            className="mb-[12px] text-[20px] lg:text-[24px]"
          >
            {subheading.split("").map((char, index) => (
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
        <div>
          {data.map((option, index) => (
            <React.Fragment key={index}>
              <ProblemSolverBrief boxicon={option.boxicon} text={option.text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProblemSolver;
