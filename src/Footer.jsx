import React from 'react';
import './Footer.css'; // Importa el archivo CSS
import logo from '../src/hero-bg.png'; // Asegúrate de que la ruta al logo sea correcta
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Importa los iconos de react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Las Trensas del Calvo" />
      </div>
      <div className="footer-social-icons">
        <a
          href="https://www.instagram.com/nico._ts?igsh=Y3FqZmR3Ync2NmVk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/streck331"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        {/* Puedes agregar más íconos aquí */}
      </div>
      <p className="footer-copyright">
        Todos los derechos reservados - LasTrensasdelCalvo.com {/* Reemplaza con tu dominio */}
      </p>
    </footer>
  );
};

export default Footer;