import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import PageTransition from "../components/motion/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="w-full py-8 text-center border-t border-neutral-900">
           <p className="text-sm font-medium text-gray-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Sam Jenish C.
           </p>
        </footer>
      </main>
    </PageTransition>
  );
}
