// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#acerca">Sobre mí</a>
          </li>
          <li>
            <a href="#servicios">Portafolio</a>
          </li>
          <li>
            <a href="#portafolio">Experiencia Laboral</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
