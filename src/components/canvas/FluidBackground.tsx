import { motion } from "framer-motion";

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-white">
      <div className="absolute inset-0 bg-white" />

      {/* Pink blob */}
      <motion.div
        animate={{
          x: ["0%", "20%", "-20%", "0%"],
          y: ["0%", "-30%", "20%", "0%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[20%] w-[30vh] h-[30vh] rounded-full bg-pink/30 blur-[100px] mix-blend-multiply"
      />

      {/* Blue blob */}
      <motion.div
        animate={{
          x: ["0%", "-30%", "10%", "0%"],
          y: ["0%", "20%", "-20%", "0%"],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] right-[10%] w-[40vh] h-[40vh] rounded-full bg-blue/30 blur-[120px] mix-blend-multiply"
      />

      {/* Maroon blob */}
      <motion.div
        animate={{
          x: ["0%", "30%", "-10%", "0%"],
          y: ["0%", "10%", "30%", "0%"],
          scale: [1, 1.3, 1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] right-[30%] w-[35vh] h-[35vh] rounded-full bg-maroon/20 blur-[100px] mix-blend-multiply"
      />

      {/* Red blob */}
      <motion.div
        animate={{
          x: ["0%", "-20%", "20%", "0%"],
          y: ["0%", "-10%", "-30%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] left-[30%] w-[25vh] h-[25vh] rounded-full bg-red/20 blur-[90px] mix-blend-multiply"
      />

      {/* Noise overlay to give it some texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default FluidBackground;
