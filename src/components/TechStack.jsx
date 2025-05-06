"use client";
import React from "react";
import TechStackCard from "./TechStackCard";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const techStack = [
  {
    icon: <IoLogoJavascript />,
    iconName: "Javascript",
    text: "Javascript Knowledge and advanced web development.",
  },
  {
    icon: <FaReact />,
    iconName: "React",
    text: "Building fast and efficient React App's and websites.",
  },
  {
    icon: <RiNextjsFill />,
    iconName: "Next.js",
    text: "Fast server-side rendering, dynamic routing and less code",
  },
  {
    icon: <DiGit />,
    iconName: "git",
    text: "DevOps tool for streamlined source code management",
  },
  {
    icon: <RiTailwindCssFill />,
    iconName: "TailwindCSS",
    text: "A utility first widely used frontend CSS framework",
  },
  {
    icon: <FaWordpress />,
    iconName: "Wordpress",
    text: "A widely used, content-first open-source platform for building dynamic websites and blogs.",
  },
  {
    icon: <FaHtml5 />,
    iconName: "HTML",
    text: "A foundational markup language used to structure content on the web.",
  },
  {
    icon: <FaCss3Alt />,
    iconName: "CSS",
    text: "A styling language used to design and visually enhance web content.",
  },
];

function TechStack() {
  return (
    <main className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto w-full">
      {techStack.map((option, index) => (
        <React.Fragment key={index}>
          <TechStackCard
            icon={option.icon}
            iconName={option.iconName}
            text={option.text}
          />
        </React.Fragment>
      ))}
    </main>
  );
}
export default TechStack;
