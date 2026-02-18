import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/venkatesh-k-s", color: "#0077b5", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/KSVenkatesh2002", color: "#ffffff", label: "GitHub" },
    { icon: <FaFacebook />, url: "#", color: "#1877f2", label: "Facebook" },
    { icon: <FaInstagram />, url: "#", color: "#e4405f", label: "Instagram" },
    { icon: <FaTwitter />, url: "#", color: "#1da1f2", label: "Twitter" },
];

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden min-h-[50vh] flex flex-col justify-center items-center">
            
            {/* Background Gradient/Parallax Effect Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-8"
                >
                    LET'S CONNECT
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 mb-12 max-w-xl mx-auto text-lg"
                >
                    Open for opportunities as a MERN Stack Developer. Let's build something amazing together.
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
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                            whileHover={{ 
                                y: -10, 
                                scale: 1.2,
                                color: social.color,
                                filter: `drop-shadow(0 0 10px ${social.color})` 
                            }}
                            className="text-3xl text-gray-400 transition-all duration-300 relative group"
                        >
                            {social.icon}
                            
                            {/* Tooltip */}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                                {social.label}
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
                        className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 transition-all group"
                    >
                        <FaEnvelope className="text-xl group-hover:text-cyan-400" />
                        <span className="text-white font-bold tracking-wide">kotavenkatesh2002@gmail.com</span>
                    </a>
                </motion.div>
            </div>

            <footer className="absolute bottom-0 w-full p-6 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm">
                <p>&copy; {new Date().getFullYear()} Venkatesh K S. All rights reserved.</p>
                <p className="mt-1 flex items-center justify-center gap-2">
                    Built with <span className="text-cyan-400">React</span> & <span className="text-purple-400">Three.js</span>
                </p>
            </footer>
        </section>
    );
};

export default Contact;
