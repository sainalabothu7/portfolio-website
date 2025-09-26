import React, { useState } from 'react';
import { Box, Plane, Text } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

const SkillItem = ({ position, label }) => {
  const [hovered, setHovered] = useState(false);
  const { scale } = useSpring({ scale: hovered ? 1.2 : 1 });

  return (
    <group position={position}>
      <Text
        color={hovered ? 'cyan' : 'white'}
        fontSize={0.4}
        anchorX="left"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {label}
      </Text>
      <a.group scale={scale}>
        <Box position={[4, 0, 0]} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial color="orange" wireframe={!hovered} />
        </Box>
      </a.group>
    </group>
  );
};

function Skills() {
  const skills = [
    { id: 'react', label: 'React', position: [-2, 2, 0] },
    { id: 'threejs', label: 'Three.js / R3F', position: [-2, 1, 0] },
    { id: 'gsap', label: 'GSAP', position: [-2, 0, 0] },
    { id: 'blender', label: 'Blender', position: [-2, -1, 0] },
  ];

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 5]} intensity={1} />

      {/* The drafting table */}
      <Plane args={[10, 10]} rotation-x={-Math.PI / 2} position={[0, -3, 0]}>
        <meshStandardMaterial color="#393939" emissive="#111" />
      </Plane>

      <Text
        position={[0, 3.5, 0]}
        fontSize={0.8}
        color="white"
        anchorX="center"
      >
        Skills Blueprint
      </Text>

      {skills.map(skill => (
        <SkillItem key={skill.id} {...skill} />
      ))}
    </group>
  );
}

export default Skills;