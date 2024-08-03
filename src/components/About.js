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
        I am a passionate software developer with a diverse background in web development and data analysis. I thrive on leveraging technology to solve complex problems and create impactful solutions. My journey is marked by continuous learning and professional growth.
      </p>

      <h3>Certifications</h3>

      <div className="certification-item">
        <h4>Responsive Web Design</h4>
        <ul>
          <li><strong>Institution:</strong> FreeCodeCamp</li>
          <li><strong>Overview:</strong> Mastered responsive design techniques and best practices, including media queries, Flexbox, and Grid Layout. Proficient in creating flexible, mobile-first websites that adapt seamlessly to various screen sizes.</li>
        </ul>
      </div>

      <div className="certification-item">
        <h4>Software Engineering</h4>
        <ul>
          <li><strong>Institution:</strong> UMass Global</li>
          <li><strong>Overview:</strong> Acquired comprehensive software engineering skills, including project management, software development methodologies, and advanced programming techniques. Gained hands-on experience in designing, developing, and deploying scalable software solutions.</li>
        </ul>
      </div>

      <div className="certification-item">
        <h4>Data Visualization</h4>
        <ul>
          <li><strong>Institution:</strong> FreeCodeCamp</li>
          <li><strong>Overview:</strong> Specialized in transforming complex data into clear, insightful visualizations using tools like Tableau and Python libraries. Developed the ability to communicate data-driven insights effectively through charts, graphs, and interactive dashboards.</li>
        </ul>
      </div>

      <div className="certification-item">
        <h4>Front-End Development Libraries</h4>
        <ul>
          <li><strong>Institution:</strong> FreeCodeCamp</li>
          <li><strong>Overview:</strong> Explored modern front-end libraries and frameworks, including React, Angular, and Vue.js. Enhanced skills in building dynamic, interactive web applications with efficient state management and reusable components.</li>
        </ul>
      </div>

      <h3>Experience Highlights</h3>
      <div className="experience-highlights">
        <ul>
          <li><strong>Responsive Web Design:</strong> Designed and implemented responsive web interfaces, ensuring optimal user experiences across devices.</li>
          <li><strong>Software Engineering:</strong> Developed robust software solutions with a focus on scalability, maintainability, and performance.</li>
          <li><strong>Data Visualization:</strong> Created compelling visual stories from data, facilitating informed decision-making.</li>
          <li><strong>Front-End Development Libraries:</strong> Leveraged advanced front-end technologies to build high-performance web applications.</li>
        </ul>
      </div>

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




