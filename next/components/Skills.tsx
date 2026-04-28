"use client";

import { skillCategories } from "../lib/data/skills";
import { useState } from "react";

export default function Skills() {
  const [active, setActive] = useState<string>(skillCategories[0].id);

  const activeCategory =
    skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <section className="w-full px-4 md:px-12 py-32 bg-[#050505]" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-24">
          <h2 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-6">Programming Languages</h2>
          <h3 className="text-6xl md:text-8xl font-bold text-[#ededed] tracking-tighter leading-[0.9]">Technical<br/>Arsenal.</h3>
        </div>

        <nav className="flex flex-wrap gap-2 mb-20 border-b border-neutral-800 pb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-3 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase transition-all duration-500 ${
                cat.id === active
                  ? "bg-[#ededed] text-[#050505]"
                  : "bg-transparent text-neutral-500 hover:text-[#ededed]"
              }`}
              data-cursor="link"
            >
              {cat.name}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {activeCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col pt-6 border-t border-neutral-800"
            >
              <div className="flex justify-between items-end mb-2">
                 <span className="text-3xl font-bold tracking-tighter text-[#ededed]">{skill.name}</span>
                 <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-[0.2em]">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
