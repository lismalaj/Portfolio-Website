import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/neuralNetwork.png";
import rmtdevImg from "@/public/krypt.png";
import wordanalyticsImg from "@/public/endlessFall.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /*{
    name: "Experience",
    hash: "#experience",
  },*/
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Neural Network Prediction Model",
    description:
    "A small-scale model implemented in Python. This model uses the sigmoid function for pattern recognition, making it suitable for various tasks such as image sorting, predictions, or text pattern recognition. You can train it with your own data to meet your specific needs. However, it's important to note that this is still a prototype and far from being production-ready. It lacks a user-friendly interface and requires further development.",
    tags: ["Python", "Problem Solving", "Mathematics"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Web3 Crypto-Exchange Website",
    description:
      "Cryptographic currency exchange board for optimal, fast and secure transactions. Additionally, user may be able to communicate after the exchange. Applied web development and programming skills to create a secure transaction with beginner-friendly UI. Utilized external resources, such as online courses and documentation, to enhance knowledge and problem-solving abilities.",
    tags: ["React", "Vite", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Mobile Apps",
    description:
      "Two mobile application made on the iOS Appstore and Google Playstore. It utilizes the physic engine, 'Unity' to create the games. It uses C# for the scripting. They are still in early-development stages.",
    tags: ["Game Dev", "Unity3D", "C#", "XCode", "iOS", "Andriod"],
    imageUrl: wordanalyticsImg,
  },
] as const; // remove as const if it's not static basically

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "C++",
  "Java",
  "C#",
  "SQL",
  "Framer Motion",
] as const;