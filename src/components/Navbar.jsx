import { useState } from "react";
import "./Navbar.css";

function Navbar({ setSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionChange = (section) => {
    setSection(section);
    setIsOpen(false); // Cierra el menú al hacer clic
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li onClick={() => handleSectionChange("inicio")}>Acerca de mí</li>
          <li onClick={() => handleSectionChange("experience")}>Experiencia</li>
          <li onClick={() => handleSectionChange("habilidades")}>
            Habilidades
          </li>
          <li onClick={() => handleSectionChange("portafolio")}>Portafolio</li>
          <li onClick={() => handleSectionChange("contacto")}>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
