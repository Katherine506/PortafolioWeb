import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Habilities from "./components/Habilities";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/projects/ProjectsSection";

function App() {
  const [section, setSection] = useState("inicio");

  return (
    <>
      <Navbar setSection={setSection} />

      {section === "inicio" && <Hero />}
      {section === "experience" && <Experience />}
      {section === "habilidades" && <Habilities />}
      {section === "portafolio" && <ProjectsSection />}
      {section === "contacto" && <ContactSection />}
    </>
  );
}

export default App;
