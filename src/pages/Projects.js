import React from 'react';
import { Text } from '@react-three/drei';
import Airship from '../components/Airship';
import MechanicalMarvel from '../components/MechanicalMarvel';
import CosmicEngine from '../components/CosmicEngine'; // Import our new custom model

// This component is a wrapper for a project, including its title.
const ProjectWrapper = ({ position, title, children }) => (
  <group position={position}>
    {children}
    <Text
      position={[0, -2.5, 0]} // Position the title below the model
      color="white"
      fontSize={0.4}
      anchorX="center"
      textAlign="center"
      maxWidth={5}
    >
      {title}
    </Text>
  </group>
);

function Projects() {
  const projects = [
    { id: 1, title: 'Project One: The Airship', component: <Airship /> },
    { id: 2, title: 'Project Two: The Mechanical Marvel', component: <MechanicalMarvel /> },
    { id: 3, title: 'Project Three: The Cosmic Engine', component: <CosmicEngine /> },
  ];

  return (
    <group>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 5]} intensity={1.5} />

      {/* We position each project wrapper at a different Y offset */}
      <ProjectWrapper position={[0, 0, 0]} title={projects[0].title}>
        {projects[0].component}
      </ProjectWrapper>

      <ProjectWrapper position={[0, -10, 0]} title={projects[1].title}>
        {projects[1].component}
      </ProjectWrapper>

      <ProjectWrapper position={[0, -20, 0]} title={projects[2].title}>
        {projects[2].component}
      </ProjectWrapper>
    </group>
  );
}

export default Projects;