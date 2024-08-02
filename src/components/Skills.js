import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faPython
} from '@fortawesome/free-brands-svg-icons'; 
import Modal from './Modal'; // Import the modal component
import './Skills.css';

const skills = [
   {
    name: 'Responsive Web Design',
    image: '/responsive-web-design.png',
    description: 'Description of Certification 3, including the scope and relevance of the certification in your field.',
    type: 'certification'
  },
  {
    name: 'Software Engineering',
    image: '/umass.png',
    description: 'Description of Certification 4, specifying the skills and knowledge covered by this certification.',
    type: 'certification'
  },
  {
    name: 'Data Visualization',
    image: '/datavis.png',
    description: 'Description of Certification 1, detailing what skills or knowledge were acquired.',
    type: 'certification'
  },
  {
    name: 'Front End Development Libraries',
    image: '/frontendlib.png',
    description: 'Description of Certification 2, outlining the expertise gained or validated through this certification.',
    type: 'certification'
  },
 
  
  {
    name: 'JavaScript',
    image: '/javascript-js-icon.png',
    icon: faJsSquare,
    description: 'Experienced in JavaScript, including ES6+ features and various libraries and frameworks. Proficient with asynchronous programming using Promises and async/await. Hands-on experience with tools such as Webpack and Babel for build processes.'
  },
  {
    name: 'React',
    image: '/logo192.png',
    icon: faReact,
    description: 'Experienced in React for building user interfaces. Proficient with React Hooks, Context API, and Redux for state management. Skilled in component-based architecture and optimizing performance with techniques like memoization and lazy loading.'
  },
  {
    name: 'Node.js',
    image: '/nodejs.png',
    icon: faNodeJs,
    description: 'Experienced in Node.js for server-side development. Proficient with Express.js for building RESTful APIs, and familiar with tools like Nodemon and PM2 for development and process management. Knowledgeable in handling asynchronous operations and integrating with databases such as MongoDB and SQL.'
  },
  {
    name: 'HTML',
    image: '/html-5-logo-png-transparent.png',
    icon: faHtml5,
    description: 'Experienced in HTML5, including modern semantic elements and accessibility practices. Skilled in creating responsive layouts with flexible grids and media queries. Familiar with integrating multimedia elements and optimizing for SEO.'
  },
  {
    name: 'CSS',
    image: '/css3-logo.png',
    icon: faCss3Alt,
    description: 'Experienced in CSS3 with a focus on modern styling techniques such as Flexbox and Grid Layout. Proficient in preprocessors like SASS/SCSS and CSS-in-JS libraries. Skilled in creating responsive designs and animations for a rich user experience.'
  },
  {
    name: 'Python',
    image: '/python-transparent.png',
    icon: faPython,
    description: 'Experienced in Python for a variety of applications including data analysis with Pandas and NumPy, machine learning with scikit-learn and TensorFlow, and web development with Django and Flask. Proficient in writing clean, efficient code and leveraging Python’s rich ecosystem of libraries and frameworks.'
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div 
            className={`skill-item ${skill.type === 'certification' ? 'certification-item' : ''}`} 
            key={index}
            onClick={() => openModal(skill)}
          >
            {skill.type === 'certification' ? (
              <div className="certification-image-container">
                <img src={skill.image} alt={skill.name} className="certification-image" />
              </div>
            ) : (
              <div className="skill-image-container">
                <img src={skill.image} alt={skill.name} className="skill-image" />
              </div>
            )}
            <div className="skill-info">
              {skill.icon ? (
                <div className="skill-icon-container">
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                </div>
              ) : null}
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        skill={selectedSkill}
        onClose={closeModal}
      />
    </section>
  );
};

export default Skills;























