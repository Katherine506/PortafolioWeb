import React from "react";
import { FaGithub } from "react-icons/fa"; // npm install react-icons

function ProjectCard({ title, image, repoUrl }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          <FaGithub /> Ver repositorio
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
