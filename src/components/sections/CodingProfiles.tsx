import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/KSVenkatesh2002",
    color: "#0f172a", // Darker instead of white for the light background
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/venkatesh-k-s",
    color: "#0077b5",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/venkatesh_k_s",
    color: "#FFA116",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks />,
    link: "https://www.geeksforgeeks.org/user/venkatesh2002/",
    color: "#2F8D46",
  },
];

const CodingProfiles = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-0" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black text-center text-slate-900 tracking-tighter mb-16"
        >
          CODING <span className="text-maroon">PROFILES</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 20px 40px ${profile.color}20`,
              }}
              className="bg-white p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 border border-slate-200 hover:border-transparent shadow-sm perspective-1000"
            >
              <div
                className="text-5xl transition-transform duration-300"
                style={{ color: profile.color }}
              >
                {profile.icon}
              </div>
              <span className="font-bold text-slate-600 transition-colors">
                {profile.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
