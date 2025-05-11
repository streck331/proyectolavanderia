import React from 'react';
import './ReservaAhora.css';

const AgendarServicio = () => {
  return (
    <div className="agendar-servicio-container">
      <div className="agendar-servicio-content">
        
        {/* Columna izquierda con texto */}
        <div className="agendar-servicio-info">
          <h2 className="agendar-servicio-title">AGENDA TU SERVICIO</h2>
          <p className="agendar-servicio-subtitle">Rellena el formulario y contactanos.</p>
        </div>

        {/* Columna derecha con el formulario */}
        <form className="agendar-servicio-form">
          <div className="form-group">
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Num contacto" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label className="label-servicio">Selecciona el servicio</label>
            <select>
              <option>Cuidado facial</option>
              <option>Cuidado de la barva</option>
              <option>Cuidado capilar</option>
            </select>
          </div>
          <button type="submit" className="agendar-servicio-button">ENVIAR</button>
        </form>
      </div>
    </div>
  );
};

export default AgendarServicio;
