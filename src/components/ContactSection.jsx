import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./ContactSection.css";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lb1p9mn",
        "template_5h0d1vm",
        form.current,
        "zRgPQWsn3vS7QYsuV"
      )
      .then(
        () => {
          Swal.fire({
            title: "✅ ¡Mensaje enviado!",
            text: "Tu mensaje fue enviado con éxito.",
            icon: "success",
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#c2185b", // Rosa fuerte
            background: "#ffffff", // Fondo blanco para contraste
            color: "#212121", // Texto oscuro para accesibilidad
            customClass: {
              popup: "swal-wide",
            },
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "❌ Error",
            text: "Hubo un error al enviar el mensaje. Intenta de nuevo.",
            icon: "error",
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#c2185b",
            background: "#ffffff",
            color: "#212121",
            customClass: {
              popup: "swal-wide",
            },
          });
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-info">
        <h2>Contacto</h2>
        <p>
          <strong>Nombre:</strong> Katherine González
        </p>
        <p>
          <strong>Email:</strong> vgonzaleza@ucenfotec.ac.cr
        </p>
        <p>
          <strong>Teléfono:</strong> +506 8510 9501
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/katherine-gonz%C3%A1lez-960ab6188/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Katherine506"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <h3>Envíame un mensaje</h3>
        <input type="text" name="user_name" placeholder="Tu nombre" required />
        <input
          type="email"
          name="user_email"
          placeholder="Tu correo"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Tu mensaje"
          required
        ></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default ContactSection;
