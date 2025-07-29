import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="about-section" id="sobremi">
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
          <strong>Web Development Immersive Program</strong> - Konrad Group
          (2021) <br />
          Formación intensiva en desarrollo full-stack con HTML5, CSS3, JS,
          React, Node.
        </li>
        <li>
          <strong>Data Quality Analyst</strong> - Citi (2019 - 2023) <br />
          Validación y depuración de grandes volúmenes de datos para asegurar su
          integridad.
        </li>
      </ul>

      <h3 className="subsection-title">Formación académica</h3>
      <ul className="education-list">
        <li>
          <strong>Universidad Cenfotec</strong> – Bachillerato en Ingeniería de
          Software (2022 - 2026)
        </li>
        <li>
          <strong>Universidad de Costa Rica</strong> – Ciencias de la
          Computación (2019 - 2022)
        </li>
        <li>
          <strong>Universidad de Costa Rica</strong> – Maestría en Lingüística
          (2018 - 2021)
        </li>
        <li>
          <strong>BrainStation</strong> – Desarrollo Web (2019 - 2020)
        </li>
        <li>
          <strong>Universidad de Costa Rica</strong> – Bachillerato en Filología
          Española (2013 - 2017)
        </li>
      </ul>
    </section>
  );
}

export default Experience;
