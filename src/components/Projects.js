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
    <div className="projects-grid">
      <ProjectCard
        title="Project 1"
        description="Description of Project 1"
        techStack="JavaScript, React"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
      <ProjectCard
        title="Project 2"
        description="Description of Project 2"
        techStack="HTML, CSS, JavaScript"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
      <ProjectCard
        title="Project 3"
        description="Description of Project 3"
        techStack="Python, Django"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
      <ProjectCard
        title="Project 4"
        description="Description of Project 4"
        techStack="Node.js, Express"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
      <ProjectCard
  title="Project 5"
  description="Description of Project 5"
  techStack="Python, Flask" 
  liveDemo="https://example.com"
  sourceCode="https://github.com/example/repo"
/>

      <ProjectCard
        title="Project 6"
        description="Description of Project 6"
        techStack="Vue.js"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
      <ProjectCard
        title="Project 7"
        description="Description of Project 7"
        techStack="Python, SQLAlchemy, PostgreSQL"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
      <ProjectCard
        title="Project 8"
        description="Description of Project 8"
        techStack="React, MongoDB"
        liveDemo="https://example.com"
        sourceCode="https://github.com/example/repo"
      />
    </div>
  </section>
);

export default Projects;


