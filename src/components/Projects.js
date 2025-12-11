import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faPython,
  faJsSquare,
  faHtml5
} from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faGlobe, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const projectsData = [
  {
    title: "User Dashboard",
    category: "Web Development",
    tags: ["React", "JavaScript", "Web Development"],
    description: "A modern dashboard interface featuring interactive user stat displays and task management. Built to demonstrate component reusability and clean aesthetic principles.",
    techStack: "React, Bootstrap, CSS",
    liveDemo: "https://user-dashboard-snowy.vercel.app/",
    sourceCode: "https://github.com/asearer/user-dashboard",
    isFeatured: true
  },
  {
    title: "Social Media Analytics",
    category: "Data Science",
    tags: ["React", "JavaScript", "Data Science", "D3.js"],
    description: "Dynamic visualization dashboard for social media metrics. Features interactive D3.js charts for data analysis and performance tracking.",
    techStack: "React, D3.js, Material-UI",
    liveDemo: "https://social-media-dashboard-umber-five.vercel.app/",
    sourceCode: "https://github.com/asearer/social-media-dashboard",
    isFeatured: true
  },
  {
    title: "Responsive Landing Page",
    category: "Web Development",
    tags: ["HTML5", "CSS3", "JavaScript", "Web Development"],
    description: "A minimalist, fully responsive landing page optimized for conversion and visual impact. Demonstrates core semantic HTML and CSS mastery.",
    techStack: "HTML5, CSS3, JavaScript",
    liveDemo: "https://asearer.github.io/responsive-landing-page/",
    sourceCode: "https://github.com/asearer/responsive-landing-page"
  }
];

const filters = [
  { name: "All", icon: null },
  { name: "Data Science", icon: faChartBar },
  { name: "Web Development", icon: faGlobe },
];

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className={`project-card ${project.isFeatured ? 'featured-card' : ''}`}
    whileHover={{ y: -5, borderColor: "var(--primary-color)" }}
  >
    <div className="project-content">
      <div className="card-header">
        <h3>{project.title}</h3>
        <span className="category-tag">{project.category}</span>
      </div>
      <div className="project-tech-stack">
        {project.techStack.split(',').map((tech, idx) => (
          <span key={idx} className="tech-badge">{tech.trim()}</span>
        ))}
      </div>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">Live Demo</a>
        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">Source Code</a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam) {
      setActiveFilter(filterParam);
    } else {
      setActiveFilter("All");
    }
  }, [searchParams]);

  const handleFilterChange = (filterName) => {
    setActiveFilter(filterName);
    if (filterName === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ filter: filterName });
    }
  };

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => {
      if (project.tags.includes(activeFilter)) return true;
      return false;
    });

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Featured Projects
        </motion.h2>

        {/* New Link back to Languages page */}
        <motion.div
          className="languages-link-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link to="/languages" className="languages-back-link">
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
            Browse by Languages
          </Link>
        </motion.div>

        <div className="category-filter">
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={`filter-btn ${activeFilter === filter.name ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.name)}
            >
              {filter.icon && <FontAwesomeIcon icon={filter.icon} className="filter-icon" />}
              {filter.name}
              {activeFilter === filter.name && (
                <motion.div
                  className="active-underline"
                  layoutId="underline"
                />
              )}
            </button>
          ))}

          {!filters.some(f => f.name === activeFilter) && activeFilter !== "All" && (
            <button className="filter-btn active">
              {activeFilter}
              <motion.div className="active-underline" layoutId="underline" />
            </button>
          )}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="no-results"
              >
                No projects found for {activeFilter}.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
