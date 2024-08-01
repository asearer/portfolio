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
    <div className="about">
      <h1>About Me</h1>
      <p>Here is some information about me...</p>
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
    </div>
  );
};

export default About;



