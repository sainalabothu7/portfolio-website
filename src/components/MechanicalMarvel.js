import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { Cylinder, Torus } from '@react-three/drei';

function MechanicalMarvel(props) {
  const group = useRef();
  const scroll = useScroll();

  // Refs for the different parts of the machine
  const coreRef = useRef();
  const gear1Ref = useRef();
  const gear2Ref = useRef();
  const pipe1Ref = useRef();
  const pipe2Ref = useRef();

  useFrame(() => {
    if (!group.current) return;

    // Animate based on scroll position
    const offset = scroll.offset;
    const progress = Math.max(0, Math.min(1, (offset - 0.3) * 5));

    // Exploded view animation
    if (gear1Ref.current) gear1Ref.current.position.x = -1.5 * progress;
    if (gear2Ref.current) gear2Ref.current.position.x = 1.5 * progress;
    if (pipe1Ref.current) pipe1Ref.current.position.y = 1.2 * progress;
    if (pipe2Ref.current) pipe2Ref.current.position.y = -1.2 * progress;

    // Add some rotation for visual interest
    if (coreRef.current) coreRef.current.rotation.y += 0.01;
    if (gear1Ref.current) gear1Ref.current.rotation.z += 0.02;
    if (gear2Ref.current) gear2Ref.current.rotation.z -= 0.02;
  });

  return (
    <group ref={group} {...props}>
      {/* Central rotating core */}
      <Cylinder ref={coreRef} args={[0.5, 0.5, 1.5, 32]}>
        <meshStandardMaterial color="gold" emissive="#cc8400" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Gears that move outwards */}
      <Torus ref={gear1Ref} args={[0.8, 0.1, 8, 32]} rotation-y={Math.PI / 2}>
        <meshStandardMaterial color="silver" metalness={0.9} roughness={0.3} />
      </Torus>
      <Torus ref={gear2Ref} args={[0.8, 0.1, 8, 32]} rotation-y={-Math.PI / 2}>
        <meshStandardMaterial color="silver" metalness={0.9} roughness={0.3} />
      </Torus>

      {/* Pipes that move vertically */}
      <Cylinder ref={pipe1Ref} args={[0.1, 0.1, 1, 16]} position={[0, 0, 0.8]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Cylinder ref={pipe2Ref} args={[0.1, 0.1, 1, 16]} position={[0, 0, -0.8]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
    </group>
  );
}

export default MechanicalMarvel;