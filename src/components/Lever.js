import React, { useState, useRef } from 'react';
import { useSpring, a } from '@react-spring/three';
import { Box, Cylinder, Text } from '@react-three/drei';

function Lever({ onActivate }) {
  const [active, setActive] = useState(false);
  const leverRef = useRef();

  const { rotation } = useSpring({
    rotation: active ? [Math.PI / 4, 0, 0] : [0, 0, 0],
    config: { mass: 1, tension: 180, friction: 12 },
    onRest: () => {
      if (active) {
        onActivate();
      }
    },
  });

  const handleClick = () => {
    if (!active) {
      setActive(true);
      // Provide haptic feedback on activation
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }
  };

  return (
    <group
      position={[2.5, -0.8, 0.5]}
      onClick={handleClick}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      {/* Base of the lever */}
      <Box args={[0.4, 0.2, 0.4]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
      </Box>

      {/* The lever arm */}
      <a.group ref={leverRef} rotation={rotation}>
        <Cylinder args={[0.05, 0.05, 1]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#B8860B" metalness={0.6} roughness={0.3} />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 0.1]} position={[0, 1, 0]}>
          <meshStandardMaterial color="red" />
        </Cylinder>
      </a.group>

      {/* Label */}
      <Text position={[0, -0.5, 0]} fontSize={0.15} color="white">
        START VOYAGE
      </Text>
    </group>
  );
}

export default Lever;