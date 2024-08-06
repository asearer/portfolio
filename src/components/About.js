import React from 'react';
import './About.css'; // Ensure this CSS file includes modal styles

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const handleDownloadClick = () => {
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'block';
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'none';
  };

  const handleDownload = (format) => {
    const resumeUrl = {
      pdf: '/path/to/resume.pdf',
      docx: '/path/to/resume.docx'
    };
    window.location.href = resumeUrl[format];
    handleCloseModal();
  };

  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
      I am a passionate software developer with a diverse background in web development and data analysis. My journey in technology has been both dynamic and rewarding, marked by a continuous quest for learning and professional growth. Currently, I am pursuing a Bachelor’s degree in Computer Science with a concentration in Software Engineering at Southern New Hampshire University (SNHU). This academic endeavor is allowing me to deepen my understanding of software development principles and gain hands-on experience with advanced technologies.
      </p>

      <h3>Certifications</h3>
      <p><strong>Responsive Web Design</strong></p>
      <p><strong>Date Aquired:</strong> September 2023</p>
      <p><strong>Institution:</strong> FreeCodeCamp</p>
      <p><strong>Overview:</strong> Mastered responsive design techniques and best practices, including media queries, Flexbox, and Grid Layout. Proficient in creating flexible, mobile-first websites that adapt seamlessly to various screen sizes.</p><br></br>

      <p><strong>Software Engineering</strong></p>
      <p><strong>Date Aquired:</strong> February 2024</p>
      <p><strong>Institution:</strong> UMass Global Software Engineering Bootcamp</p>
      <p><strong>Overview:</strong> Acquired comprehensive software engineering skills, including project management, software development methodologies, and advanced programming techniques. Gained hands-on experience in designing, developing, and deploying scalable software solutions.</p><br></br>

      <p><strong>Data Visualization</strong></p>
      <p><strong>Date Aquired:</strong> July 2024</p>
      <p><strong>Institution:</strong> FreeCodeCamp</p>
      <p><strong>Overview:</strong> Specialized in transforming complex data into clear, insightful visualizations using tools like D3.js and Python libraries. Developed the ability to communicate data-driven insights effectively through charts, graphs, and interactive dashboards.</p><br></br>

      <p><strong>Front-End Development Libraries:</strong></p>
      <p><strong>Date Aquired:</strong> July 2024</p>
      <p><strong>Institution:</strong> FreeCodeCamp</p>
      <p><strong>Overview:</strong> Explored modern front-end libraries and frameworks, including React, Angular, and Vue.js. Enhanced skills in building dynamic, interactive web applications with efficient state management and reusable components.</p>

      <h3>Experience Highlights</h3>
      <ul>
        <li><strong>Responsive Web Design:</strong> Designed and implemented responsive web interfaces, ensuring optimal user experiences across devices.</li>
        <li><strong>Software Engineering:</strong> Developed robust software solutions with a focus on scalability, maintainability, and performance.</li>
        <li><strong>Data Visualization:</strong> Created compelling visual stories from data, facilitating informed decision-making.</li>
        <li><strong>Front-End Development Libraries:</strong> Leveraged advanced front-end technologies to build high-performance web applications.</li>
      </ul>

      <button className="modal-button" onClick={handleDownloadClick}>
        <FontAwesomeIcon icon={faDownload} /> Download Resume
      </button>

      {/* Modal for download options */}
      <div id="downloadModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2>Download Resume</h2>
          <p>Select a format to download:</p>
          <button className="modal-button" onClick={() => handleDownload('pdf')}>
            <FontAwesomeIcon icon={faDownload} /> Download PDF
          </button>
          <button className="modal-button" onClick={() => handleDownload('docx')}>
            <FontAwesomeIcon icon={faDownload} /> Download DOCX
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;






