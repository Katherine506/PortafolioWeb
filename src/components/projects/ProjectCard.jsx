import React from "react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, image, repoUrl, description, technologies }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="tech-list">
          {technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Ver repositorio
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
