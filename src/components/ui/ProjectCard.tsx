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
    // X position affects Y rotation (left/right)
    // Y position affects X rotation (up/down) - inverted
    const xPct = cX / width - 0.5;
    const yPct = cY / height - 0.5;

    x.set(xPct * 20); // RotateY
    y.set(yPct * -20); // RotateX

    // Spotlight update
    mouseX.set(cX);
    mouseY.set(cY);
  }

  function onMouseLeave() {
    // Smooth spring reset
    x.set(0);
    y.set(0);
    // Removed auto-close: setShowIframe(false);
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
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
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
        className="relative w-full h-full bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 group"
      >
        {/* Neon Border Glow (Spotlight) */}
        <motion.div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={style}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl" />
        </motion.div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col p-6 z-20 transform-style-3d">
          {/* Header: Title & Tech */}
          <div className="flex justify-between items-start mb-4 transform-style-3d">
            <div style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Preview Toggle - Only show if supported */}
            {preview && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIframe(!showIframe);
                }}
                className="p-2 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-black text-white transition-all transform hover:scale-110"
                style={{ transform: "translateZ(40px)" }}
                title={showIframe ? "Close Preview" : "Live Preview"}
              >
                {showIframe ? <FaTimes /> : <FaEye />}
              </button>
            )}
          </div>

          {/* Description or Iframe Area */}
          <div
            className="flex-grow relative rounded-xl overflow-hidden bg-white border border-white/5 transition-all duration-500"
            style={{ transform: "translateZ(20px)" }}
          >
            {showIframe ? (
              <div className="w-full h-full relative group/iframe">
                <iframe
                  src={links.live}
                  className="w-full h-full relative z-10"
                  title={`${title} Preview`}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
                {/* Fallback/Error Tip - Visible if iframe fails or is blocked (hard to detect cross-origin, but provides UI hint) */}
                <div className="absolute top-2 right-2 z-20 pointer-events-none opacity-0 group-hover/iframe:opacity-100 transition-opacity">
                  <span className="text-[10px] bg-black/80 text-white px-2 py-1 rounded">
                    Interaction Enabled
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 h-full flex flex-col justify-between bg-black/90 backdrop-blur-md">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 justify-end">
                  <a
                    href={links.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub /> Source
                  </a>
                  <a
                    href={links.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Visit Site
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ambient Glow behind card */}
        <div className="absolute inset-0 bg-cyan-500/5 blur-3xl -z-10 rounded-2xl group-hover:bg-cyan-500/10 transition-colors duration-500" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
