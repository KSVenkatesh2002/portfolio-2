import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye, FaTimes } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
  index: number;
  preview?: boolean;
}

const ProjectCard = ({
  title,
  description,
  tags,
  links,
  index,
  preview = true,
}: ProjectProps) => {
  // --- Smooth Tilt Logic ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for buttery smooth return
  const rotateX = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 20 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (showIframe) return; // Disable tilt when interacting with iframe

    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const cX = clientX - left; // Cursor X relative to card
    const cY = clientY - top; // Cursor Y relative to card

    // Calculate rotation range: -15deg to +15deg
    const xPct = cX / width - 0.5;
    const yPct = cY / height - 0.5;

    x.set(xPct * 10); // Subtle rotation for light theme
    y.set(yPct * -10);

    // Spotlight update
    mouseX.set(cX);
    mouseY.set(cY);
  }

  function onMouseLeave() {
    // Smooth spring reset
    x.set(0);
    y.set(0);
  }

  // --- Iframe Preview Logic ---
  const [showIframe, setShowIframe] = useState(false);
  useEffect(() => {
    setShowIframe(true);
    const timer = setTimeout(() => setShowIframe(false), 300);
    return () => clearTimeout(timer);
  }, []);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(350px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000 w-full h-[400px]" // Fixed height for consistency
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full bg-white/70 border border-slate-200 shadow-xl rounded-2xl backdrop-blur-md transition-all duration-300 group hover:shadow-2xl hover:border-pink/30"
      >
        {/* Colorful Border Glow (Spotlight) */}
        <motion.div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={style}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink/40 via-maroon/20 to-blue/40 rounded-2xl" />
        </motion.div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col p-6 z-20 transform-style-3d">
          {/* Header: Title & Tech */}
          <div className="flex justify-between items-start mb-4 transform-style-3d">
            <div style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue transition-colors">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag, i) => {
                  const colors = [
                    "bg-pink/10 text-pink border-pink/20",
                    "bg-blue/10 text-blue border-blue/20",
                    "bg-maroon/10 text-maroon border-maroon/20",
                  ];
                  const colorClass = colors[i % colors.length];
                  return (
                    <span
                      key={tag}
                      className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full border ${colorClass}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Live Preview Toggle - Only show if supported */}
            {preview && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIframe(!showIframe);
                }}
                className="p-3 rounded-full bg-slate-100 border border-slate-200 hover:bg-pink hover:text-white hover:border-pink text-slate-600 transition-all transform hover:scale-110 shadow-sm"
                style={{ transform: "translateZ(40px)" }}
                title={showIframe ? "Close Preview" : "Live Preview"}
              >
                {showIframe ? <FaTimes /> : <FaEye />}
              </button>
            )}
          </div>

          {/* Description or Iframe Area */}
          <div
            className="flex-grow relative rounded-xl overflow-hidden bg-slate-50 border border-slate-200 transition-all duration-500 shadow-inner"
            style={{ transform: "translateZ(20px)" }}
          >
            {showIframe ? (
              <div className="w-full h-full relative group/iframe">
                <iframe
                  src={links.live}
                  className="w-full h-full relative z-10 bg-white"
                  title={`${title} Preview`}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
                {/* Fallback/Error Tip */}
                <div className="absolute top-2 right-2 z-20 pointer-events-none opacity-0 group-hover/iframe:opacity-100 transition-opacity">
                  <span className="text-[10px] bg-slate-800 text-white font-medium px-2 py-1 rounded shadow-md border border-slate-700">
                    Interaction Enabled
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-5 h-full flex flex-col justify-between bg-white text-slate-600">
                <p className="text-sm font-medium leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex gap-4 justify-end">
                  <a
                    href={links.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200"
                  >
                    <FaGithub /> Source
                  </a>
                  <a
                    href={links.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold text-white transition-colors bg-blue px-3 py-1.5 rounded-lg hover:bg-blue-600 shadow-sm"
                  >
                    <FaExternalLinkAlt /> Visit Site
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
