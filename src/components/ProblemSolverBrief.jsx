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
    <motion.div 
      className="group relative flex flex-col text-[16px] lg:text-[20px] max-w-[600px] mb-8 lg:mb-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-500 hover:shadow-lg"
      whileHover={{ x: 10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Enhanced icon */}
        <motion.div 
          className="mb-4 text-[36px] lg:text-[42px] text-green-500 dark:text-green-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.6 }
          }}
        >
          {props.boxicon}
        </motion.div>

        {/* Animated text */}
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.01 }}
          className="leading-relaxed text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
        >
          {props.text.split("").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.3, delay: index * 0.01 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Subtle accent border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />
    </motion.div>
  );
}

export default ProblemSolverBrief;