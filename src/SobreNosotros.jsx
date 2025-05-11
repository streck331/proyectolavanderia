import React from 'react';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros-section">
      <div className="contenido">
        <h2 className="titulo">SOBRE LAS TRENSAS DEL CALVO</h2>
        <hr className="decoracion" />
        <div className="contenido-flex">
          <div className="texto">
            <p>
              Las Trensas del Calvo es un espacio moderno de barbería donde entendemos las inquietudes y necesidades del hombre contemporáneo para ofrecerle una imagen actual y un estilo que refleje su personalidad.
            </p>
            <p>
              Somos uno de los pocos lugares que aún ofrece a sus clientes el servicio de barbería con técnica tradicional de navaja y productos de la más alta calidad.
            </p>
            <p>
              Ofrecemos mucho más que cortes: ofrecemos una experiencia completa, con atención personalizada en un ambiente acogedor. ¡Te esperamos!
            </p>
          </div>
          <div className="imagen">
            <img src="../images/Imagen4.png" alt="Interior de la barbería" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;