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
  },
  {
    title: "SIMEPCI 🧑🏻‍⚕️🚑⚕️",
    image: simepci,
    repoUrl: "https://dev.azure.com/vgonzaleza0114/_git/DevBuggers",
  },
  {
    title: "Rural Animal 🐄🐖🐓",
    image: ruralanimal,
    repoUrl: "https://bitbucket.org/andreshts/rural-animal-frontend/src/main/",
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
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
