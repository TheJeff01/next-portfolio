"use client";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
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
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const buttonVariantsRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const backgroundVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    }
  }
};

function HeroBanner() {
  return (
    <main className="relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          background: "linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)",
          backgroundSize: "400% 400%",
        }}
        variants={backgroundVariants}
        animate="animate"
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/10 dark:bg-green-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container flex flex-col items-center max-w-7xl mx-auto w-full px-4 text-center mt-[64px] mb-[70px] lg:mt-[90px] relative z-10">
        <div className="mb-[42px]">
          {/* Main heading with enhanced styling */}
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="text-[48px] mb-[12px] lg:text-[80px] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent leading-tight"
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
          </motion.h1>

          {/* Skills with enhanced styling */}
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="mb-[20px] text-[18px] lg:text-[26px] text-gray-600 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-800/50 px-6 py-3 rounded-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700"
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

          {/* Introduction with enhanced styling */}
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="text-[16px] lg:text-[22px] max-w-[800px] leading-relaxed text-gray-700 dark:text-gray-300"
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

        {/* Enhanced buttons */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-6 items-center text-[14px] lg:text-[18px]">
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-[16px] px-[32px] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold min-w-[200px]"
            initial="hidden"
            animate="visible"
            variants={buttonVariantsLeft}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects">
              <span className="flex items-center justify-center gap-2">
                🚀 See my dev work
              </span>
            </a>
          </motion.button>

          <motion.button
            className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 py-[14px] px-[32px] rounded-full transition-all duration-300 font-semibold min-w-[200px] backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            variants={buttonVariantsRight}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              📄 Download CV
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
              animate={{
                scaleY: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default HeroBanner;