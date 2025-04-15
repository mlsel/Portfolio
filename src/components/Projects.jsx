import React, { useState } from 'react';
import '../styling/Projects.css';
import '../styling/Modal.css';
import projects from '../data/projectsData';
import { 
  FaGithub, 
  FaLink,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaJs,
  FaCode,
  FaServer
} from "react-icons/fa";
import { Modal, Button, Carousel, Badge } from 'rsuite';

// Tech stack icon mapping
const techIcons = {
  'React': FaReact,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'SCSS': FaSass,
  'JavaScript': FaJs,
  'TypeScript': FaCode,
  'Bootstrap': FaBootstrap,
  'API': FaServer,
  'WordPress REST API': FaWordpress
};

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
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-card-header">
              {project.images && project.images[0] && (
                <img src={project.images[0]} alt={`${project.title} mockup`} className="project-image" />
              )}
              {!project.liveSiteWorks && (
                <div className="status-badge">
                  <Badge content="Offline" color="red" />
                </div>
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-container">
              {project.tech.map((item, techIndex) => {
                const IconComponent = techIcons[item];
                return (
                  <span key={techIndex} className={`tech-b ${item.toLowerCase()}`}>
                    {IconComponent && <IconComponent className="tech-icon" />}
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="card-overlay">
              <span>Klikk for mer informasjon</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal size={"md"} open={isOpen} onClose={closeModal}>
          <Modal.Header closeButton={false}>
            <Modal.Title style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {selectedProject.title}
              {!selectedProject.liveSiteWorks && (
                <Badge content="Offline" color="red" />
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject.images.length > 1 ? (
              <Carousel autoplay className="custom-slider" shape="bar" placement='bottom'>
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} - Slide ${index + 1}`}
                    className="carousel-image"
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
              <div className="modal-tech-container">
                {selectedProject.tech.map((tech, index) => {
                  const IconComponent = techIcons[tech];
                  return (
                    <div key={index} className="modal-tech-item">
                      {IconComponent && <IconComponent className="tech-icon" />}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              appearance="primary"
              href={selectedProject.githubLink}
              target="_blank"
              startIcon={<FaGithub />}
            >
              Vis på GitHub
            </Button>
            {selectedProject.livesiteLink && (
              <Button
                appearance="ghost"
                href={selectedProject.livesiteLink}
                target="_blank"
                startIcon={<FaLink />}
                disabled={!selectedProject.liveSiteWorks}
              >
                Nettside
              </Button>
            )}
            <Button onClick={closeModal} appearance="default">
              Lukk
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
