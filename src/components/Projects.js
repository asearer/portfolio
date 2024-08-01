import React from 'react';

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
    <div className="projects-grid">
      <ProjectCard
        title="Project 1"
        description="Description of Project 1"
        techStack="JavaScript, React"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
      {/* Add more ProjectCard components as needed */}
    </div>
  </section>
);

export default Projects;
