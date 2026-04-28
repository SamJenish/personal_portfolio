import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section className="w-full px-4 md:px-12 py-32 bg-[#050505]" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col mb-24">
         <h2 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-6">Projects Done</h2>
         <h3 className="text-5xl md:text-7xl font-bold text-[#ededed] tracking-tighter leading-[0.9]">
            Selected Works.
         </h3>
      </div>

      <div className="max-w-7xl mx-auto">
        <ProjectList />
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 flex justify-center">
         <a href="https://github.com/SamJenish" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-neutral-500 hover:text-[#ededed] transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-[#ededed] pb-1" data-cursor="link">
            Explore Full Archive
         </a>
      </div>
    </section>
  );
}
