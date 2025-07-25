// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
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
          <div className="buttons">
            <a href="/cv_es.pdf" className="btn download" download>
              Descargar CV
            </a>
            <div className="socials">
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
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
              <strong>18+</strong>
              <br />
              Profesores felices
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/images/hero-image.png" alt="Katherine con luces de neón" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
