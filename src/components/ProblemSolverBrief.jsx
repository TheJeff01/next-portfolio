"use client";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import React from "react";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
function ProblemSolverBrief(props) {
  return (
    <div className="flex flex-col text-[18px] max-w-[550px] justify-between lg:text-[22px] mb-[40px] ">
      <div className="mb-[10px] text-[30px]">{props.boxicon}</div>
      <motion.p
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
      >
        {props.text.split("").map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.5 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
export default ProblemSolverBrief;
