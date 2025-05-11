// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import IndexApp from "./IndexApp"
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from "react-router-dom";
import Home from "./Home/Home";
import Saludo from "./Saludo/Saludo";
import Formulario from "./Formulario/Formulario";

const router =createBrowserRouter (
    createRoutesFromElements(
        [
            <Route path="/"  element={<IndexApp/>}>
                <Route index element={<Home/>}/> {/* La ruta principal renderiza Home dentro de IndexApp */}
                <Route path ="/saludo" element={<Saludo/>}/> {/* Ajusta la ruta a minúsculas */}
                <Route path="/formulario" element={<Formulario/>}/> {/* Ajusta la ruta a minúsculas */}
            </Route>
        ]
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
