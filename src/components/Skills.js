import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import Modal from './Modal'; // Import the Modal component
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: faJsSquare, description: 'Experienced in the JavaScript programming language.' },
  { name: 'React', icon: faReact, description: 'Experienced in the React library for frontend development.' },
  { name: 'Node.js', icon: faNodeJs, description: 'Experienced in the Node.js programming language for server side development.' },
  { name: 'HTML', icon: faHtml5, description: 'Experienced in the HTML markup language used to create and structure web pages.' },
  { name: 'CSS', icon: faCss3Alt, description: 'Experienced in the Cascading Style Sheets (CSS) language used to style web pages.' },
  { name: 'Python', icon: faPython, description: 'Experienced in the Python programming language for data analysis, machine learning, and web development.' },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index} onClick={() => handleSkillClick(skill)}>
            <div className="skill-icon-container">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            </div>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      <Modal skill={selectedSkill} onClose={handleCloseModal} />
    </section>
  );
};

export default Skills;













