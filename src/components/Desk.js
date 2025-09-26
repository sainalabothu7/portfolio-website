import React from 'react';
import { useGLTF, Box, Cylinder } from '@react-three/drei';

/*
Desk model attribution:
Author: FordVFX (https://sketchfab.com/FordVFX)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/victorian-style-tabledesk-c364d9c007c44ad6ada3f90706bcdc77
*/

// A small decorative gauge for the desk
const DeskGauge = ({ position }) => (
  <group position={position}>
    <Cylinder args={[0.1, 0.1, 0.05, 16]} rotation-x={Math.PI / 2}>
      <meshStandardMaterial color="#333" />
    </Cylinder>
    <Cylinder args={[0.08, 0.08, 0.06, 16]} rotation-x={Math.PI / 2}>
      <meshStandardMaterial color="ivory" />
    </Cylinder>
  </group>
);

export function Desk(props) {
  const { nodes, materials } = useGLTF('/models/desk/scene.gltf');

  return (
    <group {...props} dispose={null} scale={2} position={[0, -2, 0]}>
      {/* Original Desk Model */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Material}
        />
      </group>

      {/* Steampunk additions */}
      <DeskGauge position={[-0.5, 0.1, 0.5]} />
      <DeskGauge position={[-0.8, 0.1, 0.5]} />
      <Box args={[0.1, 0.1, 1]} position={[0.7, 0.1, 0.3]}>
        <meshStandardMaterial color="#542" />
      </Box>
    </group>
  );
}

useGLTF.preload('/models/desk/scene.gltf');

export default Desk;