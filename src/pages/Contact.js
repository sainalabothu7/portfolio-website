import React, { useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import Telegraph from '../components/Telegraph';
import SteamPuff from '../components/SteamPuff';

function Contact() {
  const telegraphRef = useRef();
  const [showSteam, setShowSteam] = useState(false);

  const handleInputChange = (e) => {
    // Animate the telegraph key on every input change
    if (telegraphRef.current) {
      telegraphRef.current.animateKey();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Transmitting message...');
    setShowSteam(true);
    // Here you would typically handle the form submission, e.g., via an API call.
    // We'll just show an alert after the animation.
  };

  const handleSteamComplete = () => {
    setShowSteam(false);
    alert('Message Transmitted!');
  };

  return (
    <group>
      <Telegraph ref={telegraphRef} onTransmit={handleSubmit} />
      {showSteam && <SteamPuff onComplete={handleSteamComplete} position={[-0.8, 0.3, 0]} />}
      <Html
        position={[-0.4, 0.8, 0]}
        transform
        occlude
        style={{
          width: '300px',
          height: '200px',
        }}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <textarea
            placeholder="Type your dispatch..."
            onChange={handleInputChange}
            required
          />
        </form>
      </Html>
      <style>{`
        .contact-form {
          width: 100%;
          height: 100%;
        }
        .contact-form textarea {
          width: 100%;
          height: 150px;
          background-color: rgba(20, 30, 40, 0.9);
          border: 1px solid #FFD700;
          color: white;
          padding: 10px;
          font-family: 'Courier New', monospace;
          resize: none;
        }
      `}</style>
    </group>
  );
}

export default Contact;