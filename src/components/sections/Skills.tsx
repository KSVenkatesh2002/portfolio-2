import { motion } from "framer-motion";
import Skills3D from "../canvas/Skills3D";

const Skills = () => {
  // Static list for fallback/detailed view
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Java", "REST APIs", "GraphQL"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "VS Code", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative overflow-hidden flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 z-10"
      >
        <h2
          className="text-4xl md:text-5xl font-bold glow-text mb-1"
          style={{ color: "var(--primary-color)" }}
        >
          TECHNICAL SKILLS
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Interactive 3D Visualization & Comprehensive Expertise
        </p>
      </motion.div>

      {/* 3D Canvas Area */}
      <div className="w-full h-[500px] md:h-[600px] relative z-0 mb-12">
        <Skills3D />
        <div className="absolute bottom-4 left-0 right-0 text-center text-gray-500 text-sm pointer-events-none">
          <p>Drag to rotate • Hover to explore</p>
        </div>
      </div>

      {/* Detailed Category View */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
              className="group perspective-1000"
            >
              <div className="relative h-96 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-6 rounded-2xl border border-white/10 overflow-hidden transform-style-3d transition-all duration-500 hover:shadow-[0_0_50px_rgba(8,145,178,0.3)] group-hover:border-cyan-500/50">
                {/* Floating Glow Orbs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-400/30 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-400/30 transition-colors duration-500"></div>

                {/* Header */}
                <div className="relative z-10 mb-8 transform-style-3d group-hover:translate-z-10 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {category.title}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Skills Container */}
                <div className="relative z-10 flex flex-col gap-3 transform-style-3d">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group/item transform-style-3d hover:translate-x-2 duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_8px_#22d3ee] transition-all"></div>
                      <span className="text-gray-400 group-hover/item:text-white font-medium tracking-wide text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Code Background Effect */}
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-[10px] text-cyan-500 font-mono whitespace-nowrap animate-marquee"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: 0,
                        animationDuration: `${10 + i * 2}s`,
                        opacity: 0.5,
                      }}
                    >
                      {Array(10)
                        .fill(
                          `import { ${category.skills[i % category.skills.length]} } from 'tech'; `,
                        )
                        .join("")}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
