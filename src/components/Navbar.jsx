import "./Navbar.css";

function Navbar({ setSection }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => setSection("inicio")}>Inicio</li>
        <li onClick={() => setSection("sobre-mi")}>Sobre mí</li>
        <li onClick={() => setSection("portafolio")}>Portafolio</li>
        <li onClick={() => setSection("contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
