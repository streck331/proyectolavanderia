import React from 'react';
import './Servicios.css';

const Servicios = () => {
  return (
    <section className="servicios">
      <h2 className="titulo">NUESTROS SERVICIOS</h2>
      <div className="icon-separador">✂</div>
      <div className="contenedor-servicios">

        {/* Servicio 1: Cuidado Capilar */}
        <div className="servicio">
          <img src="../images/Imagen1.png" alt="Cuidado Capilar" />
          <h3>CUIDADO CAPILAR</h3>
          <div className="icono-servicio">💈</div>
          <div className="card">
            <h4>➖ MASAJE CAPILAR CON AMPOLLETA</h4>
            <p>
              Un masaje capilar especializado realizado con un multiinstructor que aporta nutrientes, proteínas y vitaminas para compensar deficiencias de la fibra capilar.
              Este tratamiento deja una sensación de frescura y suavidad. Adecuado para todo tipo de cabello.
            </p>
            <h4>Corte de Cabello</h4>
          </div>
        </div>

        {/* Servicio 2: Barba */}
        <div className="servicio">
          <img src="../images/Imagen2.jpg" alt="Cuidado Barba" />
          <h3>CUIDADO DE LA BARBA</h3>
          <div className="icono-servicio">💈</div>
          <div className="card">
            <h4>➖ TINTURA DE BARBA</h4>
            <p>
              Perfecta para expresar tu personalidad y resaltar tu atractivo natural. Nuestra tintura de barba ofrece colores vibrantes y duraderos que se adaptan a tu estilo.
            </p>
            <h4>Barba de Lujo</h4>
          </div>
        </div>

        {/* Servicio 3: Cuidado Facial */}
        <div className="servicio">
          <img src="../images/Imagen3.jpg" alt="Cuidado Facial" />
          <h3>CUIDADO FACIAL</h3>
          <div className="icono-servicio">💈</div>
          <div className="card">
            <h4>➖ MASCARILLA NEGRA</h4>
            <p>
              Mascarilla Black Mask para eliminar puntos negros, espinillas e imperfecciones. Incluye asesoría, lavado, toalla caliente, exfoliación y mascarilla hidratante.
            </p>
            <h4>Mascarilla de Velo con Colágeno</h4>
            <h4>Mascarilla Dorada</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
