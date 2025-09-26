import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SteamPuff({ onComplete }) {
  const points = useRef();

  const particles = useMemo(() => {
    const particleCount = 100;
    const p = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      p[i3] = (Math.random() - 0.5) * 0.2;
      p[i3 + 1] = (Math.random() - 0.5) * 0.2;
      p[i3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.material.opacity -= delta;
      points.current.scale.x += delta * 2;
      points.current.scale.y += delta * 2;
      points.current.scale.z += delta * 2;

      if (points.current.material.opacity <= 0) {
        if (onComplete) onComplete();
      }
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="white"
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default SteamPuff;