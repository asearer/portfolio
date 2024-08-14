import React from 'react';
import './Projects.css'; 

const ProjectCard = ({ title, description, techStack, liveDemo, sourceCode }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Tech Stack: {techStack}</p>
    <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
    <a href={sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
  </div>
);

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <h2 className="under-construction">More coming soon...Feel free to browse my GitHub or CodePen!</h2>
    {/* <div className="projects-grid">
      // ProjectCard components here...
    </div> */}
  </section>
);

export default Projects;
