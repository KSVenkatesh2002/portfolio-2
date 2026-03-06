import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

const FloatingIcon = ({
  position,
  color,
  geometryType,
}: {
  position: [number, number, number];
  color: string;
  geometryType: "box" | "torus" | "dodecahedron" | "capsule";
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Randomize rotation speed slightly
  const rotSpeed = useRef(Math.random() * 0.5 + 0.2);

  useFrame((_: any, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotSpeed.current;
      meshRef.current.rotation.y += delta * rotSpeed.current;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {/* Box: Represents Building Blocks / Modules */}
        {geometryType === "box" && <boxGeometry args={[1, 1, 1]} />}

        {/* Torus: Represents Cycles / Loops / DevOps */}
        {geometryType === "torus" && (
          <torusGeometry args={[0.6, 0.2, 16, 100]} />
        )}

        {/* Dodecahedron: Represents Web / Global / Complexity */}
        {geometryType === "dodecahedron" && (
          <dodecahedronGeometry args={[0.8, 0]} />
        )}

        {/* Capsule: Represents Database / Containers */}
        {geometryType === "capsule" && (
          <capsuleGeometry args={[0.4, 1, 4, 8]} />
        )}

        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.2}
          wireframe={true} // WIREFRAME creates a very "dev/blueprint" look
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

const Hero3DScene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ec4899" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#3b82f6" />

      {/* Building Blocks (Box) - Blue */}
      <FloatingIcon position={[-4, 2, 0]} color="#3b82f6" geometryType="box" />

      {/* Database/Container (Capsule) - Pink */}
      <FloatingIcon
        position={[4, -2, 0]}
        color="#ec4899"
        geometryType="capsule"
      />

      {/* DevOps/Cycles (Torus) - Red */}
      <FloatingIcon
        position={[-3, -3, 2]}
        color="#ef4444"
        geometryType="torus"
      />

      {/* Web/Sphere (Dodecahedron) - Maroon */}
      <FloatingIcon
        position={[3, 3, -2]}
        color="#800000"
        geometryType="dodecahedron"
      />

      {/* Environment preset for nice reflections */}
      <Environment preset="city" />
    </Canvas>
  );
};

export default Hero3DScene;
