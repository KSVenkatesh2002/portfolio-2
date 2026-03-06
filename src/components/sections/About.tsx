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
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center max-w-6xl">
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
            className="text-5xl font-black mb-8 text-slate-900 tracking-tight"
          >
            ABOUT <span className="text-pink">ME</span>
          </motion.h2>

          <motion.div
            variants={textVariants as any}
            className="glass-panel p-8 mb-10 border-l-4 border-l-blue"
          >
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              MERN Stack Developer with hands-on experience building full-stack
              web applications using React, Next.js, Node.js, Express, and
              MongoDB. Skilled in designing REST APIs, authentication systems,
              state management, and scalable dashboards. Passionate about clean
              architecture and solving real-world problems through technology.
            </p>
          </motion.div>

          <motion.div variants={textVariants as any} className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Experience
            </h3>

            {/* Current Role */}
            <div className="border-l-4 border-pink pl-6 relative">
              <div className="absolute w-3 h-3 bg-pink rounded-full -left-[8px] top-1"></div>
              <h4 className="text-xl font-bold text-slate-900">
                Engineer – Web Apps
              </h4>
              <p className="text-pink font-semibold mt-1">
                FUEiNT Technologies, Coimbatore
              </p>
              <p className="text-sm text-slate-500 mb-2 font-medium">
                Mar 2026 – Present
              </p>
              <p className="text-slate-600">
                Full Stack Developer role focused on building scalable web
                applications.
              </p>
            </div>

            {/* Previous Roles */}
            <div className="border-l-4 border-blue pl-6 relative">
              <div className="absolute w-3 h-3 bg-blue rounded-full -left-[8px] top-1"></div>
              <h4 className="text-xl font-bold text-slate-900">
                Frontend Developer
              </h4>
              <p className="text-blue font-semibold mt-1">CTSV Solution</p>
              <p className="text-sm text-slate-500 mb-2 font-medium">
                Feb 2026 – Mar 2026 (1 Month)
              </p>
              <p className="text-slate-600">
                Worked on frontend optimizations and feature integration.
              </p>
            </div>

            <div className="border-l-4 border-maroon pl-6 relative">
              <div className="absolute w-3 h-3 bg-maroon rounded-full -left-[8px] top-1"></div>
              <h4 className="text-xl font-bold text-slate-900">
                Next.js Frontend Intern
              </h4>
              <p className="text-maroon font-semibold mt-1">CTSV Solution</p>
              <p className="text-sm text-slate-500 mb-2 font-medium">
                Nov 2025 – Feb 2026 (3 Months)
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Developed components using Next.js and React</li>
                <li>Integrated REST APIs & Auth</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Content */}
        <div className="h-[500px] w-full relative z-0">
          <About3D />
        </div>
      </div>
    </section>
  );
};

export default About;
