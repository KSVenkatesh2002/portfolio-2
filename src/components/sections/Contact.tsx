import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/venkatesh-k-s",
    color: "#0077b5",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/KSVenkatesh2002",
    color: "#0f172a",
    label: "GitHub",
  },
  { icon: <FaFacebook />, url: "#", color: "#1877f2", label: "Facebook" },
  { icon: <FaInstagram />, url: "#", color: "#e4405f", label: "Instagram" },
  { icon: <FaTwitter />, url: "#", color: "#1da1f2", label: "Twitter" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden min-h-[50vh] flex flex-col justify-center items-center"
    >
      {/* Background Gradient/Parallax Effect Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8"
        >
          LET'S <span className="text-pink">CONNECT</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 font-medium mb-12 max-w-xl mx-auto text-lg"
        >
          Open for opportunities as a MERN Stack Developer. Let's build
          something amazing together.
        </motion.p>

        <div className="flex justify-center gap-8 flex-wrap mb-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{
                y: -10,
                scale: 1.2,
                color: social.color,
                filter: `drop-shadow(0 10px 10px ${social.color}40)`,
              }}
              className="text-4xl text-slate-400 transition-all duration-300 relative group"
            >
              {social.icon}

              {/* Tooltip */}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-800 px-3 py-1.5 rounded-lg shadow-xl">
                {social.label}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block"
        >
          <a
            href="mailto:kotavenkatesh2002@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-pink text-slate-600 hover:text-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <FaEnvelope className="text-xl group-hover:text-pink transition-colors" />
            <span className="font-bold tracking-wide">
              kotavenkatesh2002@gmail.com
            </span>
          </a>
        </motion.div>
      </div>

      <footer className="absolute bottom-0 w-full p-6 text-center text-slate-500 font-medium text-sm border-t border-slate-200 bg-white/50 backdrop-blur-md">
        <p>
          &copy; {new Date().getFullYear()} Venkatesh K S. All rights reserved.
        </p>
        <p className="mt-2 flex items-center justify-center gap-2">
          Built with <span className="text-blue font-bold">React</span> &{" "}
          <span className="text-pink font-bold">Three.js</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
