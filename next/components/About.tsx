import { about } from "../lib/data/about";

export default function About() {
  return (
    <section className="w-full px-4 md:px-12 py-32 bg-[#050505]" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3">
          <h2 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-6">About</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#ededed] leading-tight">
            The<br/>mindset.
          </h3>
        </div>
        
        <div className="md:w-2/3 border-t border-neutral-800 pt-8 md:border-none md:pt-0">
          <p className="text-2xl md:text-4xl text-gray-400 leading-[1.3] tracking-tight mb-20 font-light">
            Engineering, to me, is building <span className="text-[#ededed] font-medium">systems that scale</span> and <span className="text-[#ededed] font-medium">experiences that feel effortless</span>—code is simply how it’s expressed.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-12">
             <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">Focus</p>
                <p className="text-[#ededed] font-medium text-sm">Full-Stack</p>
             </div>
             <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">Location</p>
                <p className="text-[#ededed] font-medium text-sm">{about.location}</p>
             </div>
             <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">Status</p>
                <p className="text-[#ededed] font-medium text-sm">{about.availability}</p>
             </div>
             <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">Education</p>
                <p className="text-[#ededed] font-medium text-sm">B.Tech CS</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
