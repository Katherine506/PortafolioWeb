// src/components/projects/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

import ruralanimal from "../../assets/ruralanimal.png";
import simepci from "../../assets/simepci.png";
import fasthabit from "../../assets/fasthabit.png";

const projects = [
  {
    title: "FastHabit 💪🏻🏋🏻‍♀️🥑",
    image: fasthabit,
    repoUrl: "https://github.com/Katherine506/FSD-FastHabit",
    description:
      "Aplicación de hábitos saludables para registrar ayuno intermitente, rutinas, nutrición y progreso.",
    technologies: ["HTML5", "CSS", "JavaScript", "Node.js"],
  },
  {
    title: "SIMEPCI 🧑🏻‍⚕️🚑⚕️",
    image: simepci,
    repoUrl: "https://dev.azure.com/vgonzaleza0114/_git/DevBuggers",
    description:
      "Sistema para la administración de hospitales, registro de citas, expedientes médicos y más.",
    technologies: ["C#", "ASP.NET Core", "SQL Server"],
  },
  {
    title: "Rural Animal 🐄🐖🐓",
    image: ruralanimal,
    repoUrl: "https://bitbucket.org/andreshts/rural-animal-frontend/src/main/",
    description:
      "Plataforma web para la gestión de subastas y ventas de animales de granja, atención veterinaria y asistencia mediante IA.",
    technologies: ["Angular", "Spring Boot", "Oracle SQL"],
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            image={proj.image}
            repoUrl={proj.repoUrl}
            description={proj.description}
            technologies={proj.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
