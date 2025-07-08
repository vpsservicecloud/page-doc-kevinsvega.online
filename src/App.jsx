import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes principales de la UI
import Navbar from "./components/Navbar";

// Páginas Principales
import Home from "./pages/Home";
import Python from "./pages/Python";
import Laravel from "./pages/Laravel";
import Nginx from "./pages/Nginx";
import Node from "./pages/Node";

// --- PASO 1: Importa tu nuevo componente ---
// Se asume que guardaste el archivo en: pages/Features/DetalleFeatures/Node/
import FeaturesDetalleFeaturesNodeIndex from "./pages/Features/DetalleFeatures/Node/index";

// Páginas de características específicas (si aún las usas)
import ExpressJS from "./pages/Features/ExpressJS";
import ServidorNginx from "./pages/Features/ServidorNginx";

// Estilos globales
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/python" element={<Python />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/nginx" element={<Nginx />} />
          <Route path="/node" element={<Node />} />

          {/* Rutas para explorar características específicas */}
          {/* Estas rutas seguirán funcionando como antes */}
          <Route path="/explorar/express-js" element={<ExpressJS />} />

          {/* renderizar ruras para la session de node /explorar/Servidor-Nginx-Node */}

          {/* rutas principales */}
          <Route
            path="/explorar/servidor-nginx-node"
            element={<ServidorNginx />}
          />
          {/* rutas auxiliares */}
          <Route
            path="/explorar/configuración-nginx-para-node.js-sin-backend"
            element={<FeaturesDetalleFeaturesNodeIndex />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
