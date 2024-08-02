import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: faJsSquare, description: 'Experienced in the JavaScript programming language.' },
  { name: 'React', icon: faReact, description: 'Experienced in the React library for frontend development.' },
  { name: 'Node.js', icon: faNodeJs, description: 'Experienced in the Node.js programming language for server side development.' },
  { name: 'HTML', icon: faHtml5, description: 'Experienced in the HTML markup language used to create and structure web pages.' },
  { name: 'CSS', icon: faCss3Alt, description: 'Experienced in the Cascading Style Sheets (CSS) language used to style web pages.' },
  { name: 'Python', icon: faPython, description: 'Experienced in the Python programming language for data analysis, machine learning, and web development.' },
];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-icon-container">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
          </div>
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <p className="skill-description">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;












