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
    description: 'Mastered the principles of Responsive Web Design, ensuring seamless user experiences across various devices and screen sizes. Proficient in crafting flexible layouts, adaptive images, and media queries, I bring a keen eye for detail and a commitment to accessibility standards.',
    type: 'certification'
  },
  {
    name: 'Software Engineering',
    image: '/umass.png',
    description: 'Gained comprehensive knowledge in Software Engineering, covering the full software development lifecycle. Equipped with advanced problem-solving skills, I am adept at designing, implementing, and maintaining robust software solutions, utilizing industry-standard methodologies and best practices.',
    type: 'certification'
  },
  {
    name: 'Data Visualization',
    image: '/datavis.png',
    description: 'Specialized in Data Visualization, translating complex data into intuitive and actionable insights. Proficient with modern tools and techniques for creating compelling visualizations that drive decision-making and storytelling, enhancing data comprehension and engagement.',
    type: 'certification'
  },
  {
    name: 'Front End Development Libraries',
    image: '/frontendlib.png',
    description: 'Gained deep knowledge of Front End Development Libraries, including React, Angular, and Vue. Skilled in leveraging these libraries to build dynamic, scalable, and maintainable user interfaces, I excel in enhancing web performance and user interaction through modern development practices.',
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























