import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="sobremi">
      <h2 className="section-title">Sobre mí</h2>
      <p className="about-description">
        Soy <strong>Katherine González</strong>, Ingeniera de Software con
        experiencia en procesamiento de lenguaje natural, inteligencia
        artificial y desarrollo web. Apasionada por la tecnología como
        herramienta para impactar positivamente el entorno, combino habilidades
        técnicas con una sólida formación académica y humanística. Mi objetivo
        profesional es seguir desarrollando soluciones tecnológicas innovadoras
        y accesibles.
      </p>

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

      <h3 className="subsection-title">Experiencia laboral</h3>
      <ul className="experience-list">
        <li>
          <strong>Software Engineer</strong> - Moody's (2024 - Actualidad){" "}
          <br />
          Desarrollo de soluciones en AI, NLP, y automatización de procesos.
          Tecnologías: C++, Python, Linux.
        </li>
        <li>
          <strong>Application Support Engineer</strong> - Citi (2023 - 2024){" "}
          <br />
          Soporte técnico a aplicaciones críticas. Resolución de incidencias,
          automatización y mejora continua.
        </li>
        <li>
          <strong>Data Quality Analyst</strong> - Citi (2019 - 2023) <br />
          Validación y depuración de grandes volúmenes de datos para asegurar su
          integridad.
        </li>
        <li>
          <strong>Web Development Immersive Program</strong> - Konrad Group
          (2021) <br />
          Formación intensiva en desarrollo full-stack con HTML5, CSS3, JS,
          React, Node.
        </li>
      </ul>

      <h3 className="subsection-title">Formación académica</h3>
      <ul className="education-list">
        <li>
          <strong>Universidad Cenfotec</strong> – Bachillerato en Ingeniería de
          Software (2022 - 2025)
        </li>
        <li>
          <strong>Universidad de Costa Rica</strong> – Licenciatura en Filología
          Española (2013 - 2017)
        </li>
        <li>
          <strong>Universidad de Costa Rica</strong> – Maestría en Lingüística
          (2018 - 2021)
        </li>
        <li>
          <strong>Universidad de Costa Rica</strong> – Ciencias de la
          Computación (2019 - 2022)
        </li>
        <li>
          <strong>BrainStation</strong> – Web Development (2019 - 2020)
        </li>
      </ul>
    </section>
  );
}

export default AboutSection;
