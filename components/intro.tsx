"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import { HiDownload} from 'react-icons/hi';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const arrowStyle = {
    transform: hovered ? 'translateX(180px)' : 'translateX(0)',
    transition: 'transform 0.3s ease', // You can adjust the duration and easing as needed
  };
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem]"> 
        <div className='flex items-center justify-center text-center sm:mb-0 scroll-mt-[100rem]'>
            <div>
                <motion.div
                initial={{opacity: 0, scale:0}}
                animate={{ opacity: 1, scale:1}}
                transition={{
                    type: "tween",
                    duration: .3}}
                >
                   { /*<Image src = "" alt='Portrait' width="192" height="192" quality="95"
                priority ={true} className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'>

                </Image>*/}
                </motion.div>
                
            </div>

        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: .4}}>
            <span className="font-bold">Ledian's Personal Web-Portfolio.</span> <br/>
         I enjoy
            building <span className="italic">applications, algorithms, sites & apps</span>. My focus is solely on learning and improving skills.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity:0 , y:100}}
        animate={{opacity:100, y:0}}
        transition={{delay: 0.2, }}>
            <Link href="#contact"
                className='bg-gray-900 text-white px-7 py-3
                 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}> 
                 
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" style={ arrowStyle /*transform:'translateX(50px)' */}/>
                Contact me here 
            </Link>
            {/*<a className='bg-white px-7 py-3
                 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-400 active:scale-105 transition' href='/CV.pdf' download> 
              Download CV <HiDownload />  
                </a>*/}
            <a className='bg-white text-gray-700 px-4 py-3
                 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-zinc-400 active:scale-105 transition
                 text-[1.35rem]'
                 href="https://www.linkedin.com/in/l-i-9a1071277/"
                 target="_blank"
                 > 
                <BsLinkedin />
            </a>
        </motion.div>
            
    </section>
  )
}
