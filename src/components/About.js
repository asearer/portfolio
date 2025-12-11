import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTimes, faEnvelope, faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    concentration: "Concentration in Software Engineering",
    institution: "Southern New Hampshire University (SNHU)",
    year: "Present",
    description: "Focusing on software development lifecycles, algorithms, and scalable architecture.",
    type: "degree"
  },
  {
    degree: "Software Engineering",
    institution: "UMass Global",
    year: "Feb 2024",
    description: "Comprehensive software development lifecycle, from design to deployment.",
    type: "certification"
  },
  {
    degree: "Front End Development Libraries",
    institution: "FreeCodeCamp",
    year: "July 2024",
    description: "Deep dive into React, Redux, and modern frontend architecture.",
    type: "certification"
  },
  {
    degree: "Data Visualization",
    institution: "FreeCodeCamp",
    year: "July 2024",
    description: "Translating complex data into intuitive and actionable insights.",
    type: "certification"
  },
  {
    degree: "Responsive Web Design",
    institution: "FreeCodeCamp",
    year: "Sept 2023",
    description: "Mastered the principles of ensuring seamless user experiences across various devices.",
    type: "certification"
  }
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="about-wrapper">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm <span className="text-highlight">Alonza Searer</span>, a passionate software developer building the future of the web.
            </p>
            <p>
              My journey in technology involves a continuous quest for learning and building responsive, scalable applications.
              I combine academic rigor with practical, hands-on experience to create meaningful digital solutions.
            </p>
            <p>
              When I'm not coding, I'm exploring data visualization techniques or diving into the latest web frameworks.
            </p>

            <div className="about-actions">
              <motion.button
                className="btn-primary"
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faDownload} /> Resume
              </motion.button>
              <motion.a
                href="mailto:asearerdev@gmail.com"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          id="education"
          className="education-section margin-top-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="section-subtitle-left">Education & Certifications</h3>
          <div className="education-grid">
            {educationData.map((edu, index) => (
              <motion.div
                className="education-card"
                key={index}
                whileHover={{ y: -5, borderColor: "var(--primary-color)" }}
              >
                <div className="edu-icon">
                  <FontAwesomeIcon icon={edu.type === 'certification' ? faCertificate : faGraduationCap} />
                </div>
                <div className="edu-content">
                  <h4>{edu.degree}</h4>
                  {edu.concentration && <span className="edu-concentration">{edu.concentration}</span>}
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-desc">{edu.description}</p>
                  <span className="edu-year">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className="modal-close" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h3>Download Resume</h3>
              <div className="modal-actions">
                <a href="/Alonza_Searer_Resume.pdf" download className="btn-primary" onClick={closeModal}>
                  PDF Format
                </a>
                <a href="/Alonza_Searer_Resume.docx" download className="btn-outline" onClick={closeModal}>
                  Word Format
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default About;
