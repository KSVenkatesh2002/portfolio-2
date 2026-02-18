import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero3DScene from "../canvas/Hero3D";
import { FaReact, FaNodeJs, FaGithub, FaCode } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import resume from "../../assets/resume.pdf";

const Typewriter = ({
  texts,
  speed = 150,
  pause = 1500,
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
    <span className="font-mono text-primary">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* 3D Scene Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Hero3DScene />
      </div>

      {/* Code Background Elements - subtle touches */}
      <div className="absolute top-20 right-10 opacity-10 font-mono text-xs md:text-sm text-cyan-500 hidden md:block select-none pointer-events-none">
        <pre>{`const developer = {
  name: "Venkatesh",
  skills: ["React", "Node", "Three.js"],
  status: "Building Future"
};`}</pre>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto pointer-events-none">
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Terminal-style Badge */}
          <motion.div
            variants={textVariants as any}
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 px-4 py-1 rounded-full text-cyan-400 font-mono text-sm mb-2 flex items-center gap-2"
          >
            <FaCode />
            <span>Fullstack.tsx</span>
          </motion.div>

          <motion.h1
            variants={textVariants as any}
            className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 glow-text"
            style={{
              background:
                "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(0, 243, 255, 0.2)",
            }}
          >
            VENKATESH K S
          </motion.h1>

          {/* Dynamic Typewriter Title */}
          <motion.h2
            variants={textVariants as any}
            className="text-xl md:text-3xl font-bold tracking-wide h-[40px] md:h-[50px] flex items-center justify-center" // Fixed height to prevent layout shift
            style={{ color: "var(--text-color)" }}
          >
            <span className="mr-3 text-cyan-500">{`>`}</span>
            <Typewriter
              texts={[
                "Fullstack Developer",
                "React Expert",
                "Mern Stack Developer",
                "Next.js Enthusiast",
              ]}
              speed={100}
            />
          </motion.h2>

          <motion.p
            variants={textVariants as any}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mt-4"
          >
            Building scalable applications with clean architecture and immersive
            user experiences.
          </motion.p>

          {/* Tech Stack Mini-Badges */}
          <motion.div
            variants={textVariants as any}
            className="flex gap-4 mt-4 text-2xl text-gray-500 justify-center items-center py-4"
          >
            <FaReact
              className="hover:text-[#61DAFB] transition-colors duration-300 cursor-pointer"
              title="React"
            />
            <SiTypescript
              className="hover:text-[#3178C6] transition-colors duration-300 cursor-pointer"
              title="TypeScript"
            />
            <FaNodeJs
              className="hover:text-[#339933] transition-colors duration-300 cursor-pointer"
              title="Node.js"
            />
            <SiMongodb
              className="hover:text-[#47A248] transition-colors duration-300 cursor-pointer"
              title="MongoDB"
            />
            <FaGithub
              className="hover:text-white transition-colors duration-300 cursor-pointer"
              title="GitHub"
            />
          </motion.div>

          <motion.div
            variants={textVariants as any}
            className="flex flex-wrap justify-center gap-4 mt-8 pointer-events-auto"
          >
            <a
              href={resume}
              download="Venkatesh_Resume.pdf"
              className="px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
              style={{
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)",
              }}
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-purple-500/10 border border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.3)] hover:shadow-[0_0_30px_rgba(188,19,254,0.6)]"
              style={{
                borderColor: "var(--secondary-color)",
                color: "var(--secondary-color)",
              }}
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
