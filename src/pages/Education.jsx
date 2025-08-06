import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './Education.css';

const Education = () => {
  return (
    <>
      <Helmet>
        <title>Education - SaiLokesh Nalabothu</title>
      </Helmet>
      <motion.div
        className="education-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="education-title">Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#112240', color: '#cccccc' }}
            contentArrowStyle={{ borderRight: '7px solid  #112240' }}
            date="2021 - 2025"
            iconStyle={{ background: '#64ffda', color: '#000000' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science and Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Saveetha School of Engineering</h4>
            <p>
              CGPA: 8.7 | Focus on Cybersecurity, Web Dev
            </p>
          </VerticalTimelineElement>
          {/* Add more education entries here if needed */}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Education;
