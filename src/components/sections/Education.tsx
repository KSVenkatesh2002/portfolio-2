import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  const educationData = {
    degree: "B.E. Computer Science and Engineering",
    college: "EASA College of Engineering and Technology",
    gpa: "8.12",
    year: "Graduated: May 2025",
  };

  const certifications = [
    {
      title: "React",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-22db97f4-90e3-4b9e-b214-ef50bacd239d/",
    },
    {
      title: "Java Programming",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-7e836fdd-7064-431d-99ea-81a5fb9fd9ae/",
    },
    {
      title: "Web Development",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-f0b9c683-6757-4a8f-9ff6-42cc90ea5751/",
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            <FaGraduationCap className="text-4xl text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              EDUCATION
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent"></div>

            {/* Degree */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col md:flex-row gap-8 mb-12"
            >
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4] z-10 mt-6"></div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <div className="glass-panel p-6 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-cyan-300 mb-1 group-hover:text-cyan-200 transition-colors">
                    {educationData.degree}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {educationData.college}
                  </p>
                  <div className="inline-flex items-center gap-4 text-xs font-mono text-cyan-400/80 bg-cyan-900/20 px-3 py-1 rounded-full">
                    <span>GPA: {educationData.gpa}</span>
                    <span>•</span>
                    <span>2021 - 2025</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>

            {/* 12th Grade */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex flex-col md:flex-row gap-8 mb-12"
            >
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7] z-10 mt-6"></div>

              <div className="hidden md:block md:w-1/2"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                <div className="glass-panel p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-purple-300 mb-1 group-hover:text-purple-200 transition-colors">
                    Higher Secondary (12th)
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    JSR Higher Secondary School, Madathukulam, Tiruppur,
                    TamilNadu
                  </p>
                  <div className="inline-flex items-center gap-4 text-xs font-mono text-purple-400/80 bg-purple-900/20 px-3 py-1 rounded-full">
                    <span>79.9%</span>
                    <span>•</span>
                    <span>2021</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 10th Grade */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative flex flex-col md:flex-row gap-8"
            >
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899] z-10 mt-6"></div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <div className="glass-panel p-6 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-pink-300 mb-1 group-hover:text-pink-200 transition-colors">
                    Secondary (10th)
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    JSR Higher Secondary School, Madathukulam, Tiruppur,
                    TamilNadu
                  </p>
                  <div className="inline-flex items-center gap-4 text-xs font-mono text-pink-400/80 bg-pink-900/20 px-3 py-1 rounded-full">
                    <span>73%</span>
                    <span>•</span>
                    <span>2019</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8 justify-center md:justify-end">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              CERTIFICATIONS
            </h2>
            <FaCertificate className="text-4xl text-purple-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  boxShadow: "0 10px 30px -10px rgba(188, 19, 254, 0.5)",
                }}
                className="glass-panel p-6 text-center cursor-pointer border border-white/5 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-purple-400 mb-4">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors underline"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
