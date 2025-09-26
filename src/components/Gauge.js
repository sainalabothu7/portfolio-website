import React, { useRef } from 'react';
import { useSpring, a } from '@react-spring/three';
import { Text, Cylinder, Box } from '@react-three/drei';

function Gauge({ label, active = false, onClick }) {
  const needleRef = useRef();

  // Animate the needle rotation based on the 'active' prop
  const { rotation } = useSpring({
    rotation: active ? -Math.PI / 2.5 : Math.PI / 2.5,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const handleClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
    onClick();
  };

  return (
    <group
      onClick={handleClick}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      {/* Gauge Base */}
      <Cylinder args={[0.7, 0.7, 0.2, 32]} rotation-x={Math.PI / 2}>
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.6, 0.6, 0.22, 32]} rotation-x={Math.PI / 2}>
        <meshStandardMaterial color={active ? '#FFD700' : '#555'} emissive={active ? '#FFD700' : '#000'} emissiveIntensity={active ? 0.5 : 0} />
      </Cylinder>

      {/* Needle */}
      <a.group ref={needleRef} rotation-z={rotation}>
        <Box args={[0.05, 0.5, 0.05]} position={[0, 0.25, 0.15]}>
          <meshStandardMaterial color="red" />
        </Box>
      </a.group>

      {/* Label */}
      <Text
        position={[0, -0.9, 0.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
      >
        {label}
      </Text>
    </group>
  );
}

export default Gauge;