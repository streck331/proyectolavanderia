import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';
import logo from '../imeges/hero-bg.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Menú */}
      <ul className="navbar-links">
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#sobre">SOBRE NOSOTROS</a></li>
        <li><a href="#servicios">SERVICIOS</a></li>
        <li><a href="#ubicacion">UBÍCANOS</a></li>
      </ul>

      {/* Contenedor derecho para íconos y botón */}
      <div className="navbar-right-items">
        {/* Íconos sociales */}
        <div className="social-icons">
          <a href="https://www.instagram.com/nico._ts?igsh=Y3FqZmR3Ync2NmVk" target="_blank"><FaInstagram /></a>
          <a href="https://www.facebook.com/streck331" target="_blank"><FaFacebook /></a>
          <a href="mailto:correo@ejemplo.com"><FaEnvelope /></a>
          <a href="https://wa.me/3114488068" target="_blank"><FaWhatsapp /></a>
        </div>
        {/* Botón Reservar */}
        <div className="navbar-button">
          <button>RESERVAR</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;