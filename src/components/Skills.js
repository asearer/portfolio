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
  {
    name: 'JavaScript',
    icon: faJsSquare,
    description: 'Experienced in JavaScript, including ES6+ features and various libraries and frameworks. Proficient with asynchronous programming using Promises and async/await. Hands-on experience with tools such as Webpack and Babel for build processes.'
  },
  {
    name: 'React',
    icon: faReact,
    description: 'Experienced in React for building user interfaces. Proficient with React Hooks, Context API, and Redux for state management. Skilled in component-based architecture and optimizing performance with techniques like memoization and lazy loading.'
  },
  {
    name: 'Node.js',
    icon: faNodeJs,
    description: 'Experienced in Node.js for server-side development. Proficient with Express.js for building RESTful APIs, and familiar with tools like Nodemon and PM2 for development and process management. Knowledgeable in handling asynchronous operations and integrating with databases such as MongoDB and SQL.'
  },
  {
    name: 'HTML',
    icon: faHtml5,
    description: 'Experienced in HTML5, including modern semantic elements and accessibility practices. Skilled in creating responsive layouts with flexible grids and media queries. Familiar with integrating multimedia elements and optimizing for SEO.'
  },
  {
    name: 'CSS',
    icon: faCss3Alt,
    description: 'Experienced in CSS3 with a focus on modern styling techniques such as Flexbox and Grid Layout. Proficient in preprocessors like SASS/SCSS and CSS-in-JS libraries. Skilled in creating responsive designs and animations for a rich user experience.'
  },
  {
    name: 'Python',
    icon: faPython,
    description: 'Experienced in Python for a variety of applications including data analysis with Pandas and NumPy, machine learning with scikit-learn and TensorFlow, and web development with Django and Flask. Proficient in writing clean, efficient code and leveraging Python’s rich ecosystem of libraries and frameworks.'
  },
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













