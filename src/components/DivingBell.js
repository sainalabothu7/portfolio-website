import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere, Torus } from '@react-three/drei';

function DivingBell(props) {
  const group = useRef();

  // Simple bobbing animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  // Create a rivet component to reuse
  const Rivet = ({ position, rotation = [0, 0, 0] }) => (
    <Sphere args={[0.05, 8, 8]} position={position} rotation={rotation}>
      <meshStandardMaterial color="#a07a5a" metalness={0.9} roughness={0.4} />
    </Sphere>
  );

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main body of the bell */}
      <Cylinder args={[1, 1.5, 3, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.3} emissive="#1a1000" />
      </Cylinder>

      {/* Porthole with more detail */}
      <Torus args={[0.4, 0.1, 16, 32]} position={[0, 0, 1.2]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.3, 16, 16]} position={[0, 0, 1.2]}>
        <meshStandardMaterial color="lightblue" transparent opacity={0.3} roughness={0.1} />
      </Sphere>

      {/* Adding a pattern of rivets */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 1.4;
        const z = Math.sin(angle) * 1.4;
        return <Rivet key={i} position={[x, -1, z]} />;
      })}

      {/* Top structure */}
      <Cylinder args={[0.2, 0.2, 0.5, 16]} position={[0, 1.75, 0]}>
        <meshStandardMaterial color="#555" metalness={0.9} roughness={0.2} />
      </Cylinder>
    </group>
  );
}

export default DivingBell;