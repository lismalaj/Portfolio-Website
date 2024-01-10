"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        yoyo: Infinity, // This makes the animation loop
      }}
      /*viewport={{
        once: true,
      }}*/
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-black/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          ledismalaj@gmail.com
        </a>{" "}
        for professional inquiries.
      </p>
    </motion.section>
  );
}
/*"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({ opacity: 0 }); // Fade out
        await new Promise((resolve) => setTimeout(resolve, 10000)); // Delay for 1 second
        await controls.start({ opacity: 1 }); // Fade in
        await new Promise((resolve) => setTimeout(resolve, 10000)); // Delay for 1 second
      }
    };

    animate();
  }, [controls]);

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>

      <motion.p
        className="text-gray-700 -mt-6 dark:text-black/80"
        initial={{ opacity: 1 }}
        animate={controls}
      >
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        for professional inquiries.
      </motion.p>
    </motion.section>
  );
}
*/
