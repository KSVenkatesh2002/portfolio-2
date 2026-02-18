import { motion, type Variants } from "framer-motion";
import About3D from "../canvas/About3D";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-20 flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          className="z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={textVariants as any}
            className="text-4xl font-bold mb-6 glow-text text-primary"
            style={{ color: "var(--primary-color)" }}
          >
            ABOUT ME
          </motion.h2>

          <motion.div
            variants={textVariants as any}
            className="glass-panel p-6 mb-6"
          >
            <p className="text-lg leading-relaxed mb-4 text-gray-300">
              MERN Stack Developer with hands-on experience building full-stack
              web applications using React, Next.js, Node.js, Express, and
              MongoDB. Skilled in designing REST APIs, authentication systems,
              state management, and scalable dashboards. Passionate about clean
              architecture and solving real-world problems through technology.
            </p>
          </motion.div>

          <motion.div variants={textVariants as any} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>

            {/* Current Role */}
            <div className="border-l-4 border-cyan-400 pl-4">
              <h4 className="text-xl font-bold text-white">
                Engineer – Web Apps
              </h4>
              <p className="text-cyan-400 font-semibold">
                FUEiNT Technologies, #12, Sri Vigneshwara Nagar, Amman Kovil,
                Saravanampatti, Coimbatore – 641035, Tamil Nadu.
              </p>
              <p className="text-sm text-gray-400 mb-2">Mar 2026 – Present</p>
              <p className="text-gray-300 text-sm">
                Full Stack Developer role focused on building scalable web
                applications.
              </p>
            </div>

            {/* Previous Roles */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-lg font-bold text-white">
                Frontend Developer
              </h4>
              <p className="text-purple-400 font-semibold">CTSV Solution</p>
              <p className="text-sm text-gray-400 mb-2">
                Feb 2026 – Mar 2026 (1 Month)
              </p>
              <p className="text-gray-300 text-sm">
                Worked on frontend optimizations and feature integration.
              </p>
            </div>

            <div className="border-l-4 border-purple-500/50 pl-4">
              <h4 className="text-lg font-bold text-gray-200">
                Next.js Frontend Intern
              </h4>
              <p className="text-purple-400/80 font-semibold">CTSV Solution</p>
              <p className="text-sm text-gray-500 mb-2">
                Nov 2025 – Feb 2026 (3 Month)
              </p>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Developed components using Next.js and React</li>
                <li>Integrated REST APIs & Auth</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Content */}
        <div className="h-[400px] w-full relative z-0">
          <About3D />
        </div>
      </div>
    </section>
  );
};

export default About;
