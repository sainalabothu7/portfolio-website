import React, { Suspense, useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { gsap } from 'gsap';
import useStore from '../store'; // Import our new zustand store
import Desk from '../components/Desk';
import Lever from '../components/Lever';

function Home() {
  const { camera } = useThree();
  const sceneRef = useRef();
  const setTargetSection = useStore((state) => state.setTargetSection);

  useEffect(() => {
    // Initial camera animation (zoom-in effect)
    gsap.from(camera.position, {
      duration: 2.5,
      z: 20, // Start from further away
      ease: 'power3.inOut',
    });
  }, [camera]);

  const handleLeverActivate = () => {
    // Set the target section in our zustand store
    setTargetSection('about');
  };

  return (
    <Suspense fallback={null}>
      <group ref={sceneRef}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 15, 5]}
          intensity={1.0}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        {/* Add a warm point light to simulate a lamp on the desk */}
        <pointLight position={[-1, 0.5, 1]} intensity={1.5} color="#ffaa33" distance={5} />

        <Desk />

        {/* 3D Text for name and title */}
        <Text
          position={[0, 1, 0]}
          color="#FFD700" // Gold
          fontSize={0.6}
          anchorX="center"
          anchorY="middle"
          castShadow
        >
          Jules Verne
        </Text>
        <Text
          position={[0, 0.5, 0]}
          color="#ADD8E6" // Light Blue
          fontSize={0.3}
          anchorX="center"
          anchorY="middle"
          castShadow
        >
          Narrative Engineer
        </Text>

        {/* The interactive lever */}
        <Lever onActivate={handleLeverActivate} />
      </group>
    </Suspense>
  );
}

export default Home;