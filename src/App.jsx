import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [section, setSection] = useState("inicio");

  return (
    <>
      <Navbar setSection={setSection} />

      {section === "inicio" && <Hero />}
      {section === "sobre-mi" && <AboutSection />}
      {section === "contacto" && <ContactSection />}
    </>
  );
}

export default App;
