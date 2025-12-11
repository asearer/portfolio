import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faPython,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const displaySkills = [
  {
    category: "Frontend Development",
    items: [
      { name: 'React', icon: faReact },
      { name: 'JavaScript (ES6+)', icon: faJsSquare },
      { name: 'HTML5', icon: faHtml5 },
      { name: 'CSS3 / SASS', icon: faCss3Alt },
      { name: 'Responsive Design', icon: faCode }
    ]
  },
  {
    category: "Backend & Tools",
    items: [
      { name: 'Node.js', icon: faNodeJs },
      { name: 'Python', icon: faPython },
      { name: 'Databases', icon: faDatabase },
      { name: 'Git & Version Control', icon: faGitAlt },
      { name: 'Data Visualization', icon: faCode }
    ]
  }
];



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Technical Skills</motion.h2>
        <div className="skills-grid">
          {displaySkills.map((category, idx) => (
            <motion.div key={idx} className="skill-category" variants={itemVariants}>
              <h3>{category.category}</h3>
              <div className="skill-items">
                {category.items.map((skill, index) => (
                  <motion.div
                    className="skill-card"
                    key={index}
                    whileHover={{ scale: 1.05, borderColor: "var(--primary-color)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="skill-icon-wrapper">
                      <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    </div>
                    <div className="skill-details">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </motion.section>
  );
};

export default Skills;
