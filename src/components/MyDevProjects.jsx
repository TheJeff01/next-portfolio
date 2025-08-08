"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import { Images } from "./assets/images/Images";

const heading = "My {dev} projects";
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const projects = [
  {
    thumbnail: Images.weather,
    techstack: "HTML CSS ExpressJS",
    heading: "Weather App",
    text: "A simple weather application built with HTML, CSS, and Express.js that fetches real-time weather data from the OpenWeatherMap API based on user input. It showcases my ability to work with APIs, handle user requests, and dynamically display external data.",
    link: "https://weather-project-production-a76b.up.railway.app/",
  },
  {
    thumbnail: Images.placeholder,
    techstack: "ReactJS CSS",
    heading: "Social Media Management Tool",
    text: "Still in development... A social media management tool that allows users to schedule posts, track engagement, and manage multiple accounts from a single dashboard. Built with ReactJS and CSS, it features a user-friendly interface.",
    link: "https://social-media-management-tool-lilac.vercel.app/",
  },
  {
    thumbnail: Images.placeholder,
    techstack: "NextJS CSS Tailwind",
    heading: "Blank",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
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
        </div>
      </div>
      <div  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((option, index) => (
          <React.Fragment key={index}>
            <ProjectCard
              thumbnail={option.thumbnail}
              techstack={option.techstack}
              heading={option.heading}
              text={option.text}
              link={option.link}
            />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}

export default MyDevProjects;
