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
        <h2 className="text-5xl md:text-7xl font-black mb-1 text-slate-900 tracking-tighter">
          TECHNICAL <span className="text-pink">SKILLS</span>
        </h2>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto px-4 mt-2">
          Interactive 3D Visualization & Comprehensive Expertise
        </p>
      </motion.div>

      {/* 3D Canvas Area */}
      <div className="w-full h-[500px] md:h-[600px] relative z-0 mb-12">
        <Skills3D />
        <div className="absolute bottom-4 left-0 right-0 text-center text-slate-400 font-medium text-sm pointer-events-none">
          <p>Drag to rotate • Hover to explore</p>
        </div>
      </div>

      {/* Detailed Category View */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colors = [
              "from-pink to-maroon",
              "from-blue to-purple-500",
              "from-maroon to-red-500",
              "from-blue-400 to-pink",
            ];
            const borderColorClass = [
              "group-hover:border-pink/50",
              "group-hover:border-blue/50",
              "group-hover:border-maroon/50",
              "group-hover:border-purple-400/50",
            ];
            return (
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
                <div
                  className={`relative h-96 bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 overflow-hidden shadow-lg transform-style-3d transition-all duration-500 hover:shadow-2xl ${borderColorClass[index % 4]}`}
                >
                  {/* Floating Glow Orbs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-pink/20 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2 group-hover:bg-blue/20 transition-colors duration-500"></div>

                  {/* Header */}
                  <div className="relative z-10 mb-8 transform-style-3d group-hover:translate-z-10 transition-transform duration-500">
                    <h3 className="text-2xl font-black text-slate-900 mb-2">
                      {category.title}
                    </h3>
                    <div
                      className={`h-1 w-12 bg-gradient-to-r ${colors[index % 4]} rounded-full group-hover:w-full transition-all duration-500`}
                    ></div>
                  </div>

                  {/* Skills Container */}
                  <div className="relative z-10 flex flex-col gap-3 transform-style-3d">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-all group/item transform-style-3d hover:translate-x-2 duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/item:bg-blue transition-all"></div>
                        <span className="text-slate-600 font-semibold group-hover/item:text-slate-900 tracking-wide text-sm">
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
                        className="absolute text-[10px] text-slate-800 font-mono whitespace-nowrap animate-marquee"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: 0,
                          animationDuration: `${10 + i * 2}s`,
                          opacity: 0.2,
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
