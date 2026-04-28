"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { about } from "../lib/data/about";

const FULL_TEXT = "Hi, I'm Sam Jenish";
const TYPING_SPEED = 100; // ms per character
const START_DELAY = 400; // ms before typing begins

export default function Hero() {
  // Ensure the page starts at the top on load/refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        charIndex++;
        setDisplayedText(FULL_TEXT.slice(0, charIndex));
        if (charIndex >= FULL_TEXT.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, TYPING_SPEED);
      return () => clearInterval(interval);
    }, START_DELAY);
    return () => clearTimeout(startTimeout);
  }, []);

  // Blink the cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 25 },
    },
  };

  // Split displayed text into two visual lines:
  // Line 1: "Hi, I'm" portion  |  Line 2: "Sam Jenish" portion
  const prefixEnd = "Hi, I'm ".length;
  const line1 = displayedText.slice(0, Math.min(displayedText.length, prefixEnd));
  const line2 = displayedText.length > prefixEnd ? displayedText.slice(prefixEnd) : "";
  const cursorOnLine1 = displayedText.length <= prefixEnd;

  return (
    <section
      className="relative flex flex-col justify-center min-h-screen px-4 md:px-12 pb-24 pt-32"
      id="home"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto flex flex-col items-start"
      >
        <motion.p variants={itemVariants} className="text-gray-400 uppercase tracking-[0.3em] font-medium text-xs mb-8 ml-1">
          {about.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between w-full mb-12 gap-8 md:gap-0">
          <div className="flex flex-col">
            <h1 className="text-[10vw] md:text-[6vw] lg:text-[4.5vw] font-bold tracking-tighter text-neutral-500 leading-[1.1] uppercase">
              {line1}
              {cursorOnLine1 && (
                <span
                  className="inline-block w-[3px] md:w-[4px] bg-[#ededed] ml-1 align-middle"
                  style={{
                    height: "0.85em",
                    opacity: showCursor ? 1 : 0,
                    transition: "opacity 0.1s",
                  }}
                />
              )}
            </h1>
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold tracking-tighter text-[#ededed] leading-[0.85] uppercase whitespace-nowrap">
              {line2}
              {!cursorOnLine1 && (
                <span
                  className="inline-block w-[3px] md:w-[5px] bg-[#ededed] ml-1 align-middle"
                  style={{
                    height: "0.85em",
                    opacity: showCursor ? 1 : 0,
                    transition: "opacity 0.1s",
                  }}
                />
              )}
            </h1>
            <p 
              className="mt-6 md:mt-8 max-w-lg text-gray-400 text-base md:text-lg font-light leading-relaxed"
              style={{ opacity: typingDone ? 1 : 0, transition: "opacity 0.8s ease" }}
            >
              I’m a CS student at Karunya Institute of Technology and Sciences — and I build full stack systems that solve real problems. Not tutorials. Not just UI. Systems that are designed to work.
            </p>
          </div>

          <div className="flex justify-start md:justify-end md:pr-12 lg:pr-24 w-full md:w-auto">
            <div className="relative w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-neutral-800">
              <Image
                src="/my_pic.png"
                alt="Sam Jenish"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-12 w-full mt-8 border-t border-neutral-800 pt-12 items-stretch"
          style={{ opacity: typingDone ? 1 : 0.3, transition: "opacity 0.6s ease" }}
        >
          <p className="max-w-lg text-gray-400 text-base md:text-lg font-light leading-relaxed">
            What sets my approach apart is how I <span className="text-[#ededed] font-medium">explore beyond just development</span>. I actively experiment with AI, DevOps, and cloud—integrating them into my projects to understand how real-world systems are built, deployed, and maintained. Because writing code is one thing. Making it work in real environments is another.
          </p>

<div className="flex flex-col items-center justify-between md:ml-auto w-full md:w-auto h-full min-h-[240px]">
  {/* Social icons above buttons */}
  <div className="flex gap-8 my-auto">
    <a href="https://github.com/SamJenish" target="_blank" rel="noopener noreferrer"
       className="relative flex items-center text-[#ededed] hover:text-[#ffffff] transition-colors duration-300 group"
       aria-label="GitHub">
      <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[90px] group-hover:opacity-100 group-hover:mr-2 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">can we go!!</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.746.083-.73.083-.73 1.205.086 1.84 1.238 1.84 1.238 1.07 1.834 2.806 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.65.242 2.874.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.476 5.92.43.37 0.823 1.1020.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.217.698.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#ededed] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
    <a href="https://www.linkedin.com/in/sam-jenish-c-7bb25b350" target="_blank" rel="noopener noreferrer"
       className="relative flex items-center text-[#ededed] hover:text-[#0a66c2] transition-colors duration-300 group"
       aria-label="LinkedIn">
      <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[90px] group-hover:opacity-100 group-hover:mr-2 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">shall we go!</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.94v5.665h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.602 0 4.269 2.371 4.269 5.456v6.284zM5.337 7.433a2.07 2.07 0 110-4.139 2.07 2.07 0 010 4.139zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.724v20.551C0 23.229.792 24 1.771 24h20.451C23.208 24 24 23.229 24 22.275V1.724C24 .771 23.208 0 22.225 0z" />
      </svg>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#ededed] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
    <a href="mailto:sammjenis@gmail.com"
       className="relative flex items-center text-[#ededed] hover:text-[#c71610] transition-colors duration-300 group"
       aria-label="Email">
      <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[90px] group-hover:opacity-100 group-hover:mr-2 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">shall we go!</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
        <path d="M12 12.713l-11.985-7.713h23.97L12 12.713zM0 4v16h24V4H0z" />
      </svg>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#ededed] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
  </div>
  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-6 md:ml-auto items-center mt-6">
    <a href="#projects" className="group relative overflow-hidden inline-flex items-center justify-center w-48 py-4 rounded-xl border border-neutral-700 text-[#ededed] font-medium uppercase tracking-widest text-[10px] hover:bg-[#ededed] hover:text-[#050505] hover:-translate-y-2 transition-all duration-300" data-cursor="link">
      <span className="transition-transform duration-300 group-hover:translate-x-10">Work</span>
      <span className="absolute left-6 opacity-0 -translate-x-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 font-bold uppercase tracking-widest text-[8px] whitespace-nowrap">wanna see!!</span>
    </a>
    <a href="https://flowcv.com/resume/141eb2fiec4s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-[#ededed] text-[#050505] font-medium uppercase tracking-widest text-[10px] hover:bg-neutral-300 hover:-translate-y-2 transition-all duration-300" data-cursor="link">
      Resume
    </a>
    <a href="#contact" className="group relative overflow-hidden inline-flex items-center justify-center w-64 py-4 rounded-xl bg-neutral-900 text-[#ededed] font-medium uppercase tracking-widest text-[10px] hover:bg-[#ededed] hover:text-[#050505] hover:-translate-y-2 transition-all duration-300" data-cursor="link">
      <span className="transition-transform duration-300 group-hover:translate-x-16">Contact</span>
      <span className="absolute left-6 opacity-0 -translate-x-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 font-bold uppercase tracking-widest text-[8px] whitespace-nowrap">Expecting good things :)</span>
    </a>
  </div>
</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
