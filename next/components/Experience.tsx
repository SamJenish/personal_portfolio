"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { journeyData } from "../lib/data/journey";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full px-4 md:px-12 py-32 bg-[#050505] overflow-hidden" id="experience">
      {/* Background SVG Wave */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
        <svg
          className="absolute top-0 left-0 w-full h-[150%] md:h-[120%]"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M -100,200 C 200,0 400,400 600,200 C 800,0 900,300 1100,200 C 1300,100 1200,500 900,600 C 500,700 800,900 -100,800"
            stroke="#ef4444" /* subtle red/pink thread */
            strokeWidth="2"
            style={{ pathLength }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-4">
              • Experiences
            </h4>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#ededed] whitespace-nowrap">
              My Journey<br />So Far
            </h2>
          </div>
          <div className="md:col-span-8 flex items-end">
            {/* Can add additional intro text here if needed, but keeping it minimalist */}
          </div>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col border-t border-neutral-800"
        >
          {journeyData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-neutral-800 transition-colors duration-500 hover:border-neutral-500 hover:bg-neutral-900/10"
            >
              {/* Left Column: Title & Company */}
              <div className="md:col-span-4 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-[#ededed] mb-1 group-hover:text-white transition-colors duration-300">
                  {item.company}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base font-medium mb-2">
                  {item.title}
                </p>
                <p className="text-neutral-500 text-xs md:text-sm tracking-wider uppercase">
                  • {item.date}
                </p>
              </div>

              {/* Middle Column: Description */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Tags */}
              <div className="md:col-span-3 flex flex-wrap gap-3 items-center justify-start md:justify-end">
                {item.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full text-[10px] uppercase font-bold tracking-widest cursor-default transition-colors group-hover:border-neutral-600"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 pt-16 border-t border-neutral-800"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#ededed] mb-12">
            Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 relative">
            {/* Horizontal timeline line for desktop */}
            <div className="hidden md:block absolute top-1 left-0 w-full h-[1px] bg-neutral-800"></div>

            <div className="flex flex-col border-l md:border-l-0 md:border-t border-neutral-800 pl-6 md:pl-0 md:pt-8 relative group">
              <span className="absolute -left-[5px] md:left-0 md:-top-[5px] w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#ededed] transition-colors duration-300"></span>
              <h3 className="text-xl md:text-2xl font-bold text-[#ededed] mb-2 group-hover:text-white transition-colors duration-300">
                Karunya Institute of Technology and Science
              </h3>
              <p className="text-neutral-400 text-sm md:text-base font-medium mb-3">
                B.Tech Computer Science and Engineering
              </p>
              <div className="flex flex-col gap-1 text-neutral-500 text-xs md:text-sm tracking-wider uppercase">
                <p>• 08/2023 – Present</p>
                <p>• Coimbatore, India</p>
              </div>
            </div>

            <div className="flex flex-col border-l md:border-l-0 md:border-t border-neutral-800 pl-6 md:pl-0 md:pt-8 relative group">
              <span className="absolute -left-[5px] md:left-0 md:-top-[5px] w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#ededed] transition-colors duration-300"></span>
              <h3 className="text-xl md:text-2xl font-bold text-[#ededed] mb-2 group-hover:text-white transition-colors duration-300">
                SAV Balakrishna CBSE School
              </h3>
              <p className="text-neutral-400 text-sm md:text-base font-medium mb-3">
                High School Study on Computer Science
              </p>
              <div className="flex flex-col gap-1 text-neutral-500 text-xs md:text-sm tracking-wider uppercase">
                <p>• 06/2021 – 04/2023</p>
                <p>• Tirunelveli, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
