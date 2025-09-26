import React from 'react';
import { OrthographicCamera } from '@react-three/drei';
import useStore from '../store';
import Gauge from './Gauge';
import { scenes } from '../App'; // Import scene config to know the sections

function Hud() {
  const { scrollProgress, setTargetSection } = useStore((state) => ({
    scrollProgress: state.scrollProgress,
    setTargetSection: state.setTargetSection,
  }));

  // Determine the current active section based on scroll progress
  const activeIndex = Math.round(scrollProgress * (scenes.length - 1));

  // We want to display gauges for the sections that are in the nav
  const navScenes = scenes.filter(scene => scene.id !== 'home');

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={60} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 10]} />

      <group position={[-4.5, 3.5, 0]}>
        {navScenes.map((scene, index) => {
          // Adjust index to match overall scene array for accurate active state
          const overallIndex = scenes.findIndex(s => s.id === scene.id);
          return (
            <group key={scene.id} position={[index * 3, 0, 0]}>
              <Gauge
                label={scene.id.toUpperCase()}
                active={activeIndex === overallIndex}
                onClick={() => setTargetSection(scene.id)}
              />
            </group>
          );
        })}
      </group>
    </>
  );
}

export default Hud;