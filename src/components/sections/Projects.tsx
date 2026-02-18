import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

const projectsData = [
  {
    title: "Train Ticket Booking System",
    description:
      "A comprehensive railway booking simulation featuring seat reservation algorithms, PNR generation, real-time availability checking, and a secure payment workflow using Stripe/Razorpay integration.",
    tags: ["React", "Node.js", "Redux", "MongoDB"],
    links: {
      live: "https://trainticketbooking-q9j3.onrender.com",
      github: "https://github.com/KSVenkatesh2002/trainticketbooking",
    },
    preview: true,
  },
  {
    title: "Dyer Task Management",
    description:
      "A specialized ERP solution for handloom artisans to track tasks, manage yarn inventory, and calculate wages based on role-specific rates. Includes admin dashboards and automated payment tracking.",
    tags: ["Next.js", "Tailwind", "MongoDB", "Clerk"],
    links: {
      live: "https://dyer-handloom.vercel.app",
      github: "https://github.com/KSVenkatesh2002/dyer",
    },
    preview: false, // Disabled due to Clerk auth redirect loop in iframe
  },
  {
    title: "Realtime Chat Application",
    description:
      "A high-performance chat platform supporting private & group messaging, live typing indicators, user online status, and instant media sharing, built with WebSocket technology for low-latency communication.",
    tags: ["React", "Socket.IO", "Zustand", "Vite"],
    links: {
      live: "https://venkatesh-realtime-chat-app.onrender.com",
      github: "https://github.com/KSVenkatesh2002/chat-app-socket.io",
    },
    preview: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical journey, featuring full-stack
            applications and real-time systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
