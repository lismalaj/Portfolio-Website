"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-30"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Expected graduation date with a degree in{" "}
        <span className="font-medium">Computer Science</span> by May 2024. I decided to pursue my
        passion for programming. I have learned {" "}
        <span className="font-medium">multiple programming languages like, </span>{" "}
        <span className="italic">C++, Python, Java, C#, Javascript, CSS, HTML and React-JS.</span>{" "}
        <span className="font-medium">I actively seek challenges to better improve my problem-solving skills. On my freetime, I work on algorithms, data structure assignments and improve the performance of my mobile games.</span> 
      </p>

      <p>
        <span className="font-medium">I have two mobile games currently on the iOS Appstore, and one on Google Playstore. I used physic engines like Unity and Unreal to experiment and create them.  </span> I enjoy playing
        exploring new ideals and activities, such as this website I have created. It may not be ideal, but I enjoy the process of learning and improvement. 
      </p>
    </motion.section>
  );
}