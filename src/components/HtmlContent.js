import React from 'react';
import { Html } from '@react-three/drei';

function HtmlContent({ children, position }) {
  return (
    <group position={position}>
      <Html
        transform
        occlude
        style={{
          width: '500px',
          height: '400px',
          overflowY: 'auto',
          backgroundColor: 'rgba(10, 20, 30, 0.85)',
          color: '#e0e0e0',
          borderRadius: '10px',
          padding: '20px',
          border: '1px solid #444',
        }}
      >
        {children}
      </Html>
    </group>
  );
}

export default HtmlContent;