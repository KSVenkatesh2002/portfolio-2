import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/ui/LoadingScreen";
import ParticleBackground from "./components/canvas/ParticleBackground";
import CustomCursor from "./components/ui/CustomCursor";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import FeaturedArticles from "./components/sections/FeaturedArticles";
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
      <ParticleBackground />

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
            className="fixed inset-0 z-[9999]"
          >
            <LoadingScreen onComplete={() => setIsLoaded(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`app-container ${isLoaded ? "visible" : ""}`}>
        <nav className="navbar glass-panel">
          <div className="logo glow-text">V K S</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <main>
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
