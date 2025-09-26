import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere, Torus, Box } from '@react-three/drei';

function Airship(props) {
  const group = useRef();

  // Gentle floating animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y += Math.sin(t * 0.3) * 0.01;
      group.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0.5}>
      {/* Main gas bag */}
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial color="ivory" roughness={0.8} />
      </Sphere>

      {/* Gondola */}
      <Box args={[1, 0.5, 2.5]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#8B4513" metalness={0.2} roughness={0.5} />
      </Box>

      {/* Propellers */}
      <group position={[0, -2, -1.5]}>
        <Cylinder args={[0.05, 0.05, 0.5, 8]} rotation-x={Math.PI / 2} />
        <Box args={[0.05, 0.8, 0.1]} />
        <Box args={[0.05, 0.8, 0.1]} rotation-z={Math.PI / 2} />
        <meshStandardMaterial color="#555" metalness={1} />
      </group>

      {/* Rudder */}
      <Box args={[0.1, 1, 1]} position={[0, 0, -2.5]}>
        <meshStandardMaterial color="#a07a5a" />
      </Box>
    </group>
  );
}

export default Airship;