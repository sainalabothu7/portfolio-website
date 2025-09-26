import React, { useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/three';
import { Box, Cylinder, Text } from '@react-three/drei';

function Telegraph({ onTransmit, ...props }) {
  const keyRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation for the telegraph key press
  const { position } = useSpring({
    to: { position: isAnimating ? [0, -0.05, 0] : [0, 0, 0] },
    config: { duration: 50 },
    onRest: () => setIsAnimating(false),
  });

  const handleKeyPress = () => {
    setIsAnimating(true);
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  // Expose the key press handler to the parent component
  React.useImperativeHandle(props.fwdRef, () => ({
    animateKey: handleKeyPress,
  }));

  return (
    <group {...props}>
      {/* Base */}
      <Box args={[1.5, 0.2, 1]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#654321" />
      </Box>

      {/* Telegraph Key */}
      <a.group ref={keyRef} position={position}>
        <Cylinder args={[0.1, 0.1, 0.2, 16]} position={[0.5, 0.1, 0]}>
          <meshStandardMaterial color="#333" />
        </Cylinder>
        <Box args={[0.5, 0.1, 0.1]} position={[0.2, 0.1, 0]}>
          <meshStandardMaterial color="#B8860B" />
        </Box>
      </a.group>

      {/* "Transmit" Button */}
      <Box
        args={[0.8, 0.3, 0.1]}
        position={[-0.8, 0.1, 0]}
        onClick={onTransmit}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'auto')}
      >
        <meshStandardMaterial color="#B8860B" />
        <Text color="black" fontSize={0.1} position={[0, 0, 0.06]}>
          TRANSMIT
        </Text>
      </Box>
    </group>
  );
}

export default React.forwardRef((props, ref) => <Telegraph {...props} fwdRef={ref} />);