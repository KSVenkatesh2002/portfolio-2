import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const AbstractShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_: any, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.4}
          emissive="#ec4899"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh scale={1.2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#800000"
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const About3D = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ec4899" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#3b82f6" />

      <AbstractShape />
    </Canvas>
  );
};

export default About3D;
