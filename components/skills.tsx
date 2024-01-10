"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
//import { motion } from "framer-motion";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  //const { ref } = useSectionInView("Skills");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
        id="skills"
        ref={ref}
      
        style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}>
    <section
      
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-black/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            exit="initial" // Set exit to "initial" to reset the animation when the user leaves
            transition={{
            delay: 0.05 * index,
            }}
            //custom={index}
            //whileHover="animate" // Add this line to make the animation repeat
            whileInView="animate"
            viewport={{
              once: true, //true, true is it happens once when u look at away and false loops after you come back
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
    </motion.div>
  );
}