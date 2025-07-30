import React from "react";
import "./Habilities.css";

const Habilities = () => {
  return (
    <section id="habilidades" className="habilidades-section">
      <h3 className="subsection-title">Habilidades técnicas</h3>
      <ul className="skills-list">
        <li>Lenguajes: Java, C, C++, Python, JavaScript</li>
        <li>Tecnologías: React, Node.js, Sass, Bootstrap, Webpack</li>
        <li>Bases de datos: SQL Server, MongoDB</li>
        <li>Inteligencia Artificial y NLP</li>
        <li>Programación paralela (MPI, OpenMP)</li>
        <li>Adobe Experience Manager (AEM)</li>
        <li>Control de versiones: Git</li>
      </ul>

      <h3 className="subsection-title">Habilidades blandas</h3>
      <ul className="skills-list">
        <li>Pensamiento crítico y resolución de problemas</li>
        <li>Comunicación efectiva con equipos multidisciplinarios</li>
        <li>Liderazgo y toma de decisiones</li>
        <li>Trabajo colaborativo y adaptabilidad</li>
        <li>
          Gestión de proyectos con metodologías ágiles (Scrum, Kanban, Design
          Thinking)
        </li>
      </ul>
    </section>
  );
};

export default Habilities;
