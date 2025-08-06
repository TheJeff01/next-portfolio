"use client";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import React from "react";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function TechStackCard(props) {
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group relative p-6 lg:p-8 text-[18px] lg:text-[20px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating background elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 dark:bg-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        {/* Enhanced icon container */}
        <motion.div 
          className="text-[50px] lg:text-[60px] mb-4 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
        >
          {props.icon}
        </motion.div>
        
        {/* Tech name with enhanced styling */}
        <motion.div 
          className="font-bold mb-4 text-xl lg:text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {props.iconName}
        </motion.div>
        
        {/* Animated description */}
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.01 }}
          className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
        >
          {props.text.split("").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.3 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/30 transition-all duration-500 pointer-events-none" />
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
    </motion.div>
  );
}

export default TechStackCard;