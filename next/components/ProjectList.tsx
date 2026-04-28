"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, Project } from "../lib/data/projects";

export default function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <div className="relative w-full border-t border-neutral-800" onMouseLeave={() => setHoveredProject(null)}>
        {/* The List */}
        <div className="flex flex-col">
          {projects.map((proj, idx) => {
            const isFaded = hoveredProject !== null && hoveredProject !== idx;

            return (
              <div
                key={proj.id}
                onMouseEnter={() => setHoveredProject(idx)}
                onClick={() => setSelectedProject(proj)}
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 border-b border-neutral-800 cursor-pointer transition-all duration-500 hover:bg-neutral-900/40"
                data-cursor="view"
              >
                <div className="flex flex-col md:w-1/2">
                  <h3 
                    className={`text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-500 ${
                      isFaded ? "text-neutral-700" : "text-[#ededed] group-hover:text-white"
                    }`}
                  >
                    {proj.title}
                  </h3>
                </div>
                
                <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end md:w-1/2 gap-2">
                  <p 
                    className={`text-lg font-light transition-all duration-500 max-w-sm md:text-right ${
                      isFaded ? "text-neutral-700" : "text-gray-400 group-hover:text-gray-300"
                    }`}
                  >
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:justify-end mt-2">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all duration-500 ${
                          isFaded ? "text-neutral-700" : "text-gray-500 group-hover:text-gray-400"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-neutral-800 text-[#ededed] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 sm:p-10">
                <div className="flex items-center gap-3 mb-6 pr-10">
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter">{selectedProject.title}</h2>
                  {selectedProject.tag && (
                    <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 text-[#ededed] text-xs font-bold uppercase tracking-wider rounded-full">
                      {selectedProject.tag}
                    </span>
                  )}
                </div>

                {selectedProject.image && (
                  <div className="w-full h-64 sm:h-80 md:h-[400px] relative rounded-xl overflow-hidden mb-10 shadow-md border border-neutral-800">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {selectedProject.details ? (
                  <div className="space-y-10">
                    <section>
                      <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-4">Project Overview</h4>
                      <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">{selectedProject.details.overview}</p>
                    </section>

                    <section>
                      <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-4">Key Features</h4>
                      <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg font-light">
                        {selectedProject.details.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </section>

                    {selectedProject.details.challenges && selectedProject.details.challenges.length > 0 && (
                      <section>
                        <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-4">Challenges Addressed</h4>
                        <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg font-light">
                          {selectedProject.details.challenges.map((challenge, i) => (
                            <li key={i}>{challenge}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {selectedProject.details.outcomes && selectedProject.details.outcomes.length > 0 && (
                      <section>
                        <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-4">Outcomes & Results</h4>
                        <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg font-light">
                          {selectedProject.details.outcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>
                ) : (
                  <section className="space-y-6">
                    <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-4">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">{selectedProject.description}</p>
                  </section>
                )}

                <section className="mt-12 pt-10 border-t border-neutral-800">
                  <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-6">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="px-5 py-2 bg-neutral-900 border border-neutral-800 text-[#ededed] rounded-full text-xs font-semibold tracking-widest uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="flex flex-wrap gap-6 mt-12">
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#ededed] text-[#050505] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.live && selectedProject.live !== "#" && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-neutral-700 text-[#ededed] rounded-full font-bold uppercase tracking-widest text-xs hover:border-[#ededed] transition-colors">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
