import React from 'react';
import './Projects.css';
import projects from '../data/projectsData';
import { FaCircleInfo, FaGithub, FaLink } from "react-icons/fa6";


const Projects = () => {
  return (
    <section id="projects">
      <h2>Prosjekter</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {!project.liveSiteWorks && (
              <div className="info-icon" title="Nettsiden fungerer ikke som forventet, pga WordPress REST API.">
                <FaCircleInfo />
              </div>
            )}
            <h3>{project.title}</h3>
            <div className="tech-container">
              {project.tech.map((item, index) => (
                <span key={index} className="tech-b">
                  {item}
                </span>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.githubLink} className="gitHub" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a>
              <a href={project.livesiteLink} target="_blank" rel="noopener noreferrer"><FaLink />Nettside</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
