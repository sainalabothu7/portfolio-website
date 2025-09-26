import React, { useRef, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { View, ScrollControls, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';
import useStore from './store';
import Hud from './components/Hud';
import Footer from './components/Footer';
import Settings from './components/Settings';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import HtmlContent from './components/HtmlContent';
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion';
import './App.css';

// Scene configuration
export const scenes = [
  { id: 'home', component: <Home />, position: [0, 0, 0] },
  { id: 'about', component: <HtmlContent><About /></HtmlContent>, position: [0, -15, 0] },
  { id: 'projects', component: <Projects />, position: [0, -30, 0] },
  { id: 'skills', component: <Skills />, position: [0, -55, 0] },
  { id: 'education', component: <HtmlContent><Education /></HtmlContent>, position: [0, -65, 0] },
  { id: 'contact', component: <Contact />, position: [0, -75, 0] },
];

const cameraPath = new THREE.CatmullRomCurve3(
  scenes.map(s => new THREE.Vector3(s.position[0] + (s.id === 'projects' ? -5 : (s.id === 'skills' ? 5 : 0)), s.position[1], s.position[2] + 7))
);
const lookAtPath = new THREE.CatmullRomCurve3(
  scenes.map(s => new THREE.Vector3(...s.position))
);

function Scene() {
  const scroll = useScroll();
  const { camera } = useThree();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { targetSection, clearTargetSection, setScrollProgress, lowFidelity } = useStore((state) => ({
    targetSection: state.targetSection,
    clearTargetSection: state.clearTargetSection,
    setScrollProgress: state.setScrollProgress,
    lowFidelity: state.lowFidelity,
  }));
  const dof = useRef();

  useFrame((state, delta) => {
    const scrollOffset = scroll.offset;
    setScrollProgress(scrollOffset);

    const cameraPoint = cameraPath.getPoint(scrollOffset);
    const lookAtPoint = lookAtPath.getPoint(scrollOffset);

    // Use instant transition for reduced motion
    if (prefersReducedMotion) {
      camera.position.copy(cameraPoint);
      camera.lookAt(lookAtPoint);
    } else {
      // Smoothly interpolate for full motion
      camera.position.lerp(cameraPoint, 0.1);
      const currentLookAt = new THREE.Vector3().copy(camera.position).add(camera.getWorldDirection(new THREE.Vector3()));
      currentLookAt.lerp(lookAtPoint, 0.1);
      camera.lookAt(currentLookAt);
    }

    // Dynamically adjust depth of field focus distance
    if (dof.current && dof.current.target) {
        dof.current.target.copy(lookAtPoint);
    }
  });

  useEffect(() => {
    if (!targetSection) return;
    const targetIndex = scenes.findIndex(scene => scene.id === targetSection);
    if (targetIndex !== -1) {
      const offset = targetIndex / (scenes.length - 1);
      scroll.el.scrollTo({
        top: offset * (scroll.el.scrollHeight - scroll.el.clientHeight),
        behavior: prefersReducedMotion ? 'instant' : 'smooth',
      });
    }
    clearTargetSection();
  }, [targetSection, scroll, clearTargetSection, prefersReducedMotion]);

  return (
    <>
      {scenes.map(scene => (
        <group key={scene.id} position={scene.position}>
          {scene.component}
        </group>
      ))}
      {!lowFidelity && (
        <EffectComposer>
          <Bloom intensity={0.6} luminanceThreshold={0.7} luminanceSmoothing={0.8} height={400} />
          <DepthOfField ref={dof} focalLength={0.025} bokehScale={5} />
        </EffectComposer>
      )}
    </>
  );
}

function App() {
  const mainRef = useRef();

  return (
    <HelmetProvider>
      <Settings />
      <main ref={mainRef} style={{ width: '100vw', height: '100vh', position: 'relative', cursor: 'none' }}>
        <Canvas eventSource={mainRef} style={{ position: 'absolute', top: 0, left: 0 }}>
          <fog attach="fog" args={['#0a0a1a', 10, 40]} />
          <View index={1} track={mainRef}>
            <ScrollControls pages={scenes.length} damping={0.15}>
              <Scene />
            </ScrollControls>
          </View>
          <View index={2} track={mainRef}>
            <Hud />
          </View>
          {/* A separate view for the cursor so it's always on top */}
          <View index={3} track={mainRef}>
             <CustomCursor />
          </View>
        </Canvas>
        <Footer />
      </main>
    </HelmetProvider>
  );
}

export default App;