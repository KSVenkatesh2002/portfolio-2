import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/ui/LoadingScreen";
import FluidBackground from "./components/canvas/FluidBackground";
import CustomCursor from "./components/ui/CustomCursor";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import CodingProfiles from "./components/sections/CodingProfiles";
import Contact from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <FluidBackground />

      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -500,
              transition: { duration: 2.8, ease: [0.76, 0, 0.9, 1] },
            }} // Curtain up effect
            className="fixed inset-0 z-[9999] bg-white"
          >
            <LoadingScreen onComplete={() => setIsLoaded(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`app-container ${isLoaded ? "visible" : ""}`}>
        <nav className="navbar glass-panel">
          <div className="logo font-black text-2xl tracking-tighter mix-blend-difference text-white">
            V K S
          </div>
          <div className="nav-links bg-white/50 px-6 py-2 rounded-full backdrop-blur-md border border-black/5 shadow-sm">
            <a href="#about" className="hover:text-pink transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-blue transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-red transition-colors">
              Contact
            </a>
          </div>
        </nav>

        <main className="relative z-10 flex flex-col gap-24 md:gap-32 pb-32">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          {/* <FeaturedArticles /> */}
          <CodingProfiles />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
