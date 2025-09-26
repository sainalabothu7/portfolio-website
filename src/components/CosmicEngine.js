import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Cylinder } from '@react-three/drei';

function CosmicEngine(props) {
  const group = useRef();
  const orbitingSphere1 = useRef();
  const orbitingSphere2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;

    // Animate the core and orbiting spheres
    group.current.rotation.y += 0.005;
    if (orbitingSphere1.current) {
      orbitingSphere1.current.position.x = Math.sin(t * 0.5) * 1.5;
      orbitingSphere1.current.position.z = Math.cos(t * 0.5) * 1.5;
    }
    if (orbitingSphere2.current) {
      orbitingSphere2.current.position.x = Math.cos(t * 0.3) * 2;
      orbitingSphere2.current.position.y = Math.sin(t * 0.3) * 2;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Central glowing core */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="purple" emissive="magenta" emissiveIntensity={1} />
      </Sphere>

      {/* Surrounding rings */}
      <Torus args={[1.5, 0.1, 16, 100]} rotation-x={Math.PI / 2}>
        <meshStandardMaterial color="silver" metalness={1} roughness={0.1} />
      </Torus>
      <Torus args={[2, 0.05, 16, 100]} rotation-x={Math.PI / 2} rotation-y={Math.PI / 4}>
        <meshStandardMaterial color="gold" metalness={1} roughness={0.2} />
      </Torus>

      {/* Orbiting spheres */}
      <Sphere ref={orbitingSphere1} args={[0.2, 16, 16]}>
        <meshStandardMaterial color="cyan" emissive="blue" />
      </Sphere>
      <Sphere ref={orbitingSphere2} args={[0.3, 16, 16]}>
        <meshStandardMaterial color="orange" emissive="red" />
      </Sphere>
    </group>
  );
}

export default CosmicEngine;