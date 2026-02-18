import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiThreedotjs,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { useThree } from "@react-three/fiber";

// Define the skill type
type Skill = {
  name: string;
  icon: any;
  color: string;
};

// Skill Card Component
const SkillCard = ({
  position,
  skill,
}: {
  position: [number, number, number];
  skill: Skill;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <Html
        position={position}
        transform
        distanceFactor={6}
        className="pointer-events-none"
      >
        <div
          className={`
            relative flex flex-col items-center justify-center p-4 rounded-xl
            backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ease-out
            cursor-pointer pointer-events-auto
            ${hovered ? "scale-110 bg-white/20 border-white/30 z-50" : "bg-white/5 grayscale-[0.2] hover:grayscale-0"}
          `}
          style={{
            width: "140px",
            height: "160px",
            transformStyle: "preserve-3d",
            boxShadow: hovered
              ? `0 0 30px ${skill.color}60, 0 0 10px ${skill.color}40`
              : "0 4px 6px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Icon */}
          <div
            className="text-6xl mb-4 transition-colors duration-300"
            style={{ color: hovered ? skill.color : "#ffffff" }}
          >
            <skill.icon />
          </div>

          {/* Text */}
          <h3 className="text-white font-bold text-base tracking-wide text-center">
            {skill.name}
          </h3>

          {/* Subtle glow effect on hover */}
          {hovered && (
            <div
              className="absolute inset-0 rounded-xl -z-10 opacity-50 blur-xl"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
              }}
            />
          )}
        </div>
      </Html>
    </Float>
  );
};

const SkillsGalaxy = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 10; // Approx threshold in Three.js units

  const skills: Skill[] = useMemo(
    () => [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ],
    [],
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Continuous slow rotation
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        // Cylinder Distribution
        const count = skills.length;
        // Adjust radius based on screen size: smaller radius for mobile
        const radius = isMobile ? 3 : 6;

        // Calculate angle for even distribution around the cylinder
        const angle = (i / count) * Math.PI * 2;

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        // Zig-zag vertical positioning for better density
        const y = Math.sin(angle * 2) * (isMobile ? 3 : 2); // More vertical spread on mobile

        return <SkillCard key={i} position={[x, y, z]} skill={skill} />;
      })}
    </group>
  );
};

const Skills3D = () => {
  return (
    <div className="w-full h-full cursor-move">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={50} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#4c1d95" />

        <SkillsGalaxy />

        {/* OrbitControls to let user spin the cylinder */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.2} // Restrict vertical looking
          maxPolarAngle={Math.PI / 2 + 0.2} // Restrict vertical looking
          autoRotate={false} // We rotate the group manually
        />
      </Canvas>
    </div>
  );
};

export default Skills3D;
