import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

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
                    color="#4d4dff" 
                    wireframe 
                    transparent 
                    opacity={0.3}
                    emissive="#4d4dff"
                    emissiveIntensity={0.5}
                />
            </mesh>
            <mesh scale={1.2}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial 
                    color="#bc13fe" 
                    roughness={0.1}
                    metalness={0.9}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
};

const About3D = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />
      
      <AbstractShape />
    </Canvas>
  );
};

export default About3D;
