import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';

function CustomCursor() {
  const cursorRef = useRef();

  useFrame(({ mouse }) => {
    if (cursorRef.current) {
      // The mouse coordinates are in NDC space (-1 to 1), so we can use them directly
      // for an orthographic camera setup.
      cursorRef.current.position.x = mouse.x;
      cursorRef.current.position.y = mouse.y;
    }
  });

  return (
    <group ref={cursorRef}>
      <Torus args={[0.08, 0.005, 16, 32]}>
        <meshBasicMaterial color="#FFD700" />
      </Torus>
    </group>
  );
}

export default CustomCursor;