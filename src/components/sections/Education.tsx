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
      <div className="container mx-auto px-4 max-w-6xl">
        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <FaGraduationCap className="text-5xl text-blue" />
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              EDUCATION
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue via-pink to-transparent rounded-full shadow-sm"></div>

            {/* Degree */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col md:flex-row gap-8 mb-12"
            >
              <div className="absolute left-[20px] md:left-1/2 -translate-x-[7px] w-5 h-5 bg-blue rounded-full ring-4 ring-white shadow-md z-10 mt-6 md:translate-x-[-10px]"></div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-14 md:text-right">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue/50 transition-all duration-300 group">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue transition-colors">
                    {educationData.degree}
                  </h3>
                  <p className="text-slate-600 font-medium mb-4">
                    {educationData.college}
                  </p>
                  <div className="inline-flex items-center gap-4 text-xs font-bold text-blue bg-blue/10 px-4 py-2 rounded-full border border-blue/20">
                    <span>GPA: {educationData.gpa}</span>
                    <span className="opacity-50">•</span>
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
              <div className="absolute left-[20px] md:left-1/2 -translate-x-[7px] w-5 h-5 bg-pink rounded-full ring-4 ring-white shadow-md z-10 mt-6 md:translate-x-[-10px]"></div>

              <div className="hidden md:block md:w-1/2"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-14">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-pink/50 transition-all duration-300 group">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-pink transition-colors">
                    Higher Secondary (12th)
                  </h3>
                  <p className="text-slate-600 font-medium mb-4">
                    JSR Higher Secondary School, Madathukulam, Tiruppur,
                    TamilNadu
                  </p>
                  <div className="inline-flex items-center gap-4 text-xs font-bold text-pink bg-pink/10 px-4 py-2 rounded-full border border-pink/20">
                    <span>79.9%</span>
                    <span className="opacity-50">•</span>
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
              <div className="absolute left-[20px] md:left-1/2 -translate-x-[7px] w-5 h-5 bg-maroon rounded-full ring-4 ring-white shadow-md z-10 mt-6 md:translate-x-[-10px]"></div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-14 md:text-right">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-maroon/50 transition-all duration-300 group">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-maroon transition-colors">
                    Secondary (10th)
                  </h3>
                  <p className="text-slate-600 font-medium mb-4">
                    JSR Higher Secondary School, Madathukulam, Tiruppur,
                    TamilNadu
                  </p>
                  <div className="inline-flex items-center gap-4 text-xs font-bold text-maroon bg-maroon/10 px-4 py-2 rounded-full border border-maroon/20">
                    <span>73%</span>
                    <span className="opacity-50">•</span>
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
          className="mt-32"
        >
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-end">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              CERTIFICATIONS
            </h2>
            <FaCertificate className="text-5xl text-blue" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const colors = [
                "border-pink hover:bg-pink",
                "border-blue hover:bg-blue",
                "border-maroon hover:bg-maroon",
              ];
              const textColor = [
                "text-pink group-hover:text-white",
                "text-blue group-hover:text-white",
                "text-maroon group-hover:text-white",
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                  }}
                  className={`bg-white p-8 rounded-2xl text-center cursor-pointer border-2 border-slate-100 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-xl group ${colors[index % 3].split(" ")[1]}`}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p
                    className={`font-semibold mb-6 transition-colors ${textColor[index % 3]}`}
                  >
                    {cert.issuer}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-lg group-hover:bg-white group-hover:text-slate-900 transition-colors"
                  >
                    View Certificate
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
