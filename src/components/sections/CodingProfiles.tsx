import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/KSVenkatesh2002",
    color: "#ffffff",
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
  //   {
  //     name: "HackerRank",
  //     icon: <FaHackerrank />,
  //     link: "https://www.hackerrank.com/profile/kotavenkatesh201",
  //     color: "#2EC866",
  //   },
  // {
  //     name: "CodePen",
  //     icon: <SiCodepen />,
  //     link: "#",
  //     color: "#ffffff"
  // },
  // {
  //     name: "StackOverflow",
  //     icon: <FaStackOverflow />,
  //     link: "#",
  //     color: "#f48024"
  // }
];

const CodingProfiles = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          CODING PROFILES
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                scale: 1.1,
                rotateY: 10,
                boxShadow: `0 0 20px ${profile.color}40`,
              }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 border border-white/5 hover:border-white/20"
            >
              <div className="text-4xl" style={{ color: profile.color }}>
                {profile.icon}
              </div>
              <span className="font-bold text-sm text-gray-300">
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
