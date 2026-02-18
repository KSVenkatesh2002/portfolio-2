import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const fullText = "INITIALIZING SYSTEM...";

  useEffect(() => {
    // Typewriter effect
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
             onComplete();
        }, 800); 
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Background Grid Mesh */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
             }}
        />

        <div className="relative z-10 flex flex-col items-center">
            {/* Main Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8 font-mono text-2xl md:text-6xl font-bold tracking-tighter" // Reduced mobile font size
                style={{ color: 'var(--primary-color)', textShadow: '0 0 20px rgba(0, 243, 255, 0.5)' }}
            >
                {text}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                >_</motion.span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-48 md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative"> {/* Responsive width */}
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
            </div>
            
            {/* Subtext */}
            <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-4 text-[10px] md:text-xs font-mono text-gray-500 text-center"> {/* Stack on mobile */}
                <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.5 }}
                >
                    ASSETS_LOADED: <span className="text-green-500">TRUE</span>
                </motion.span>
                <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 1.0 }}
                >
                    DATA_STREAM: <span className="text-green-500">ACTIVE</span>
                </motion.span>
            </div>
        </div>
    </div>
  );
};

export default LoadingScreen;
