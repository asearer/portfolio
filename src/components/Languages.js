import React from 'react';
import { Link } from 'react-router-dom';
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
import './Languages.css'; // We'll create this next

const languages = [
    { name: 'React', icon: faReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E' },
    { name: 'Python', icon: faPython, color: '#3776AB' },
    { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: faCss3Alt, color: '#1572B6' },
    { name: 'Node.js', icon: faNodeJs, color: '#339933' },
    // Adding some that might be used in "Web Development" or "Data Science" generically if needed
    // For now keeping it to ones we have icons for and are used in filters
];


const Languages = () => {
    return (
        <motion.section
            className="languages-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    My Tech Stack
                </motion.h2>
                <p className="section-subtitle">
                    Tools and technologies I use to bring ideas to life. <br />
                    Click on any icon to see projects built with it.
                </p>

                <div className="languages-grid">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/projects?filter=${lang.name}`} className="language-card">
                                <div className="icon-wrapper" style={{ color: lang.color }}>
                                    <FontAwesomeIcon icon={lang.icon} />
                                </div>
                                <span className="language-name">{lang.name}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Languages;
