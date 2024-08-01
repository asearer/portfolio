import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faPython
} from '@fortawesome/free-brands-svg-icons'; 
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: faJsSquare, description: 'A versatile programming language primarily used for web development.' },
  { name: 'React', icon: faReact, description: 'A JavaScript library for building user interfaces, developed by Facebook.' },
  { name: 'Node.js', icon: faNodeJs, description: 'A runtime environment that allows you to run JavaScript on the server side.' },
  { name: 'HTML', icon: faHtml5, description: 'The standard markup language for creating web pages.' },
  { name: 'CSS', icon: faCss3Alt, description: 'A style sheet language used to describe the presentation of a document written in HTML or XML.' },
  { name: 'Python', icon: faPython, description: 'A high-level programming language known for its readability and versatility.' },
];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;












