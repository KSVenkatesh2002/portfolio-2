import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero3DScene from "../canvas/Hero3D";
import { FaReact, FaNodeJs, FaGithub, FaCode } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import resume from "../../assets/resume.pdf";

const Typewriter = ({
  texts,
  speed = 100,
  pause = 2000,
}: {
  texts: string[];
  speed?: number;
  pause?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const fullText = texts[currentTextIndex];

      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1),
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, pause]);

  return (
    <span className="font-mono text-pink relative inline-block">
      {displayedText}
      <span className="animate-pulse absolute -right-3">|</span>
    </span>
  );
};

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-20"
    >
      {/* 3D Scene Foreground Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60">
        <Hero3DScene />
      </div>

      {/* Code Background Elements */}
      <div className="absolute top-32 right-12 font-mono text-xs md:text-sm text-slate-300 hidden md:block select-none pointer-events-none">
        <pre>{`const developer = {
  name: "Venkatesh",
  passions: ["UI", "UX", "Web3D"],
  status: "Creating Magic"
};`}</pre>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pointer-events-none flex flex-col md:flex-row items-center justify-between">
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 text-left w-full md:w-2/3"
        >
          {/* Badge */}
          <motion.div
            variants={textVariants as any}
            className="bg-white/80 backdrop-blur-md border border-pink/20 px-4 py-2 rounded-full text-pink font-semibold text-sm mb-2 flex items-center gap-2 shadow-sm"
          >
            <FaCode size={16} />
            <span>Developer Portfolio</span>
          </motion.div>

          <motion.h1
            variants={textVariants as any}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9]"
          >
            VENKATESH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink via-maroon to-blue">
              K S.
            </span>
          </motion.h1>

          {/* Dynamic Typewriter Title */}
          <motion.h2
            variants={textVariants as any}
            className="text-2xl md:text-4xl font-bold tracking-tight text-slate-700 h-[40px] md:h-[50px] flex items-center mt-2"
          >
            I build <span className="ml-3 mr-1"> </span>
            <Typewriter
              texts={[
                "Engaging UIs",
                "Scalable Backends",
                "3D Experiences",
                "Modern Web Apps",
              ]}
              speed={80}
            />
          </motion.h2>

          <motion.p
            variants={textVariants as any}
            className="text-lg md:text-xl text-slate-500 max-w-xl mt-4 font-medium leading-relaxed"
          >
            Specializing in crafting premium, high-performance web applications
            with striking aesthetics and robust architecture.
          </motion.p>

          {/* Tech Stack Mini-Badges */}
          <motion.div
            variants={textVariants as any}
            className="flex gap-6 mt-6 text-3xl text-slate-400 items-center pointer-events-auto"
          >
            <FaReact
              className="hover:text-blue transition-colors duration-300"
              title="React"
            />
            <SiTypescript
              className="hover:text-blue-600 transition-colors duration-300"
              title="TypeScript"
            />
            <FaNodeJs
              className="hover:text-green-500 transition-colors duration-300"
              title="Node.js"
            />
            <SiMongodb
              className="hover:text-green-600 transition-colors duration-300"
              title="MongoDB"
            />
            <FaGithub
              className="hover:text-slate-900 transition-colors duration-300"
              title="GitHub"
            />
          </motion.div>

          <motion.div
            variants={textVariants as any}
            className="flex flex-wrap gap-4 mt-8 pointer-events-auto"
          >
            <a
              href={resume}
              download="Venkatesh_Resume.pdf"
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-pink hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-900 font-bold hover:border-blue hover:text-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
