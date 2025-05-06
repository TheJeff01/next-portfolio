"use client";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import React from "react";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

function TechStackCard(props) {
  return (
    <div className="p-[10px] text-[20px]">
      <div className="text-[40px] mb-[10px]">{props.icon}</div>
      <div className="font-bold mb-[10px]">{props.iconName}</div>
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
export default TechStackCard;
