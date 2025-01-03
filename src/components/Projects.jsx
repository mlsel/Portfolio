import React, { useState } from 'react';
import './Projects.css';
import './Modal.css';
import projects from '../data/projectsData';
import { FaGithub, FaLink } from "react-icons/fa6";
import { Modal, Button, Carousel } from 'rsuite';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <section id="projects">
      <h2>Prosjekter</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.id || index}
            onClick={() => openModal(project)}
          >
            <div className="project-card-header">
              {project.images && project.images[0] && (
                <img src={project.images[0]} alt={`${project.title} mockup`} className="project-image" />
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-container">
              {project.tech.map((item, techIndex) => (
                <span key={techIndex} className={`tech-b ${item.toLowerCase()}`}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal size={"md"} open={isOpen} onClose={closeModal}>
          <Modal.Header closeButton={false}>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject.images.length > 1 ? (
              <Carousel autoplay className="custom-slider" shape="bar" placement='bottom'>
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} - Slide ${index + 1}`}
                  />
                ))}
              </Carousel>
            ) : (
              <img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                style={{ width: '100%', borderRadius: '14px', marginBottom: '10px' }}
              />
            )}
            <p>{selectedProject.longDescription || "Ingen ekstra informasjon tilgjengelig."}</p>
            <div>
              <h4>Tech Stack:</h4>
              <ul>
                {selectedProject.tech.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              appearance="primary"
              href={selectedProject.githubLink}
              target="_blank"
              startIcon={<FaGithub />}
            >
              View on GitHub
            </Button>
            {selectedProject.livesiteLink && (
              <Button
                appearance="ghost"
                href={selectedProject.livesiteLink}
                target="_blank"
                startIcon={<FaLink />}
              >
                Live Site
              </Button>
            )}
            <Button onClick={closeModal} appearance="default">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
