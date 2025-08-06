"use client";
import { HiCheckCircle } from "react-icons/hi";
import { Images } from "./assets/images/Images";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
import ProblemSolverBrief from "./ProblemSolverBrief";
import { motion } from "framer-motion";
import React from "react";

const heading = "Problem solver <Coder>";
const subheading = "Frontend Developer with over 2 years of experience";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const data = [
  {
    boxicon: <HiCheckCircle />,
    text: "Holder of a Bachelor's Degree in Computer Science from Coal City University, Enugu State.",
  },
  {
    boxicon: <HiCheckCircle />,
    text: "Skilled in React.js and Next.js, with a passion for staying ahead of the curve through continuous learning and adoption of emerging technologies.",
  },
  {
    boxicon: <HiCheckCircle />,
    text: "I love working in a team environment, but I can also work independently.",
  },
];

function ProblemSolver() {
  return (
    <main className="container max-w-7xl mx-auto w-full px-4 mb-[70px] lg:mb-[90px] relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="text-[30px] mb-[12px] lg:text-[60px] font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent leading-tight"
          >
            {heading.split("").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.5 }}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="mb-[12px] text-[18px] lg:text-[26px] text-gray-600 dark:text-gray-300 font-medium"
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

        {/* Enhanced content section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-[40px] gap-12">
          {/* Left content - Experience points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 space-y-8"
          >
            {data.map((option, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProblemSolverBrief
                  boxicon={option.boxicon}
                  text={option.text}
                />
              </motion.div>
            ))}

            {/* Additional stats section */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Enhanced image section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            {/* Image container with enhanced styling */}
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 group-hover:opacity-40 blur transition-opacity duration-500" />
              
              {/* Main image */}
              <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl">
                <img 
                  src={Images.jeff} 
                  alt="jeffery ibeh" 
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with tech stack icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                animate={{
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom border with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-16 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent origin-center"
        />
      </div>
    </main>
  );
}

export default ProblemSolver;