// src/IndexApp.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom'; // Importa Outlet

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet /> {/* Aquí se renderizarán los componentes de las rutas hijas */}
        </>
    );
};

export default App;