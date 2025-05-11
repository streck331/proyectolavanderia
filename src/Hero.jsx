import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background" style={{ backgroundImage: `url('/images/Corte.jpg')` }}>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Descubre La<br />
          Excelencia En<br />
          Estilo Con<br />
          <span className="hero-business-name">Las Trensas Del<br />Calvo</span>
        </h1>
        <div className="hero-separator">
          <div className="hero-line"></div>
          <i className="bi bi-brush hero-icon"></i> {/* Usamos el icono de pincel */}
          <div className="hero-line"></div>
        </div>
        <p className="hero-subtitle">
          Donde la Tradición <br />
          Encuentra la Modernidad
        </p>
      </div>
    </div>
  );
};

export default Hero;