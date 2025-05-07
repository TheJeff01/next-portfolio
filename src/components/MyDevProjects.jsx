"use client";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
import { motion } from "framer-motion";

const heading = "My {dev} projects";
const intro = "From Websites to javascript projects";
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
function MyDevProjects() {
  return (
    <main className="container max-w-7xl mx-auto w-full">
      <div className=" text-center mb-[42px]">
        <div className="">
          <motion.h2
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="text-[30px] mb-[12px] lg:text-[60px] font-bold"
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
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="text-[16px] lg:text-[20px]"
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
      </div>
    </main>
  );
}

export default MyDevProjects;
