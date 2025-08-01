import React, { useState } from "react";
import "./Hero.css";
import heroImage from "../assets/hero-image.png";
import cvES from "../documents/Katherine_Gonzalez_CV_Español_2025.pdf";
import cvEN from "../documents/Katherine_Gonzalez_CV_English_2025.pdf";

function Hero() {
  const [cvOption, setCvOption] = useState(""); // Estado para controlar el select

  const handleCvDownload = (e) => {
    const value = e.target.value;
    if (value) {
      const link = document.createElement("a");
      link.href = value;
      link.download = value.split("/").pop(); // Usa el nombre del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setCvOption(""); // Reinicia el selector a "Descargar CV"
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <p className="greeting">Hola, soy</p>
          <h1 className="name">Katherine González</h1>
          <h2 className="role">
            Ingeniera de Software e Inteligencia Artificial
          </h2>
          <p className="description">
            Especialista en crear soluciones inteligentes que combinan IA y
            desarrollo de software para resolver desafíos reales.
          </p>
          <p className="description">
            Apasionada por el diseño de sistemas que integran precisión técnica
            con sensibilidad humana, aplico principios de machine learning,
            ciencia de datos y accesibilidad para construir productos
            funcionales e inclusivos.
          </p>
          <p className="description">
            Mi objetivo profesional es seguir creciendo en proyectos
            interdisciplinarios donde la IA impulse el impacto social y
            tecnológico de las soluciones digitales.
          </p>

          <div className="buttons">
            <select
              className="btn download"
              value={cvOption}
              onChange={handleCvDownload}
            >
              <option value="" disabled hidden>
                Descargar CV
              </option>
              <option value={cvES}>Español 🇪🇸</option>
              <option value={cvEN}>English 🇺🇸</option>
            </select>
          </div>

          <div className="metrics">
            <div>
              <strong>2+</strong>
              <br />
              Años de experiencia
            </div>
            <div>
              <strong>3+</strong>
              <br />
              Proyectos
            </div>
            <div>
              <strong>34+</strong>
              <br />
              Profesores felices
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Katherine con luces de neón" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
