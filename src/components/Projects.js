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
    <h2 className="under-construction">More coming soon...Feel free to browse my GitHub or CodePen!</h2><br></br>
    <div className="projects-grid">
      <ProjectCard
        title="User Dashboard"
        description="A visually engaging frontend demo built with React, showcasing a modern user interface designed using neumorphic design principles. The dashboard features interactive components like user profiles, statistics displays, and task management, all styled for a soft, 3D-like experience. This project highlights my ability to create user-friendly, aesthetically pleasing applications and serves as a foundation for further development into a full-fledged dashboard solution."
        techStack="JavaScript, React, Bootstrap, CSS"
        liveDemo="https://user-dashboard-snowy.vercel.app/"
        sourceCode="https://github.com/asearer/user-dashboard"
      />
      <ProjectCard
        title="Responsive Landing Page"
        description="A sleek, modern landing page showcasing a neumorphic design. This front-end demo features a fully responsive layout with a clean, minimalist style, ideal for presenting products or services. Built with HTML, CSS, and JavaScript, it emphasizes visual appeal and user interaction."
        techStack="HTML, CSS, JavaScript"
        liveDemo="https://asearer.github.io/responsive-landing-page/"
        sourceCode="https://github.com/asearer/responsive-landing-page"
      />
      {/* <ProjectCard
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
      /> */}
    </div> 
  </section>
);

export default Projects;

