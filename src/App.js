import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Reformas from "./pages/Reformas";
import CasasEco from "./pages/CasasEco";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Reformas" element={<Reformas />} />
            <Route path="CasasEco" element={<CasasEco />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/*    <header>
        <div className="cabeceraSuperior">
          <DatosContacto></DatosContacto>
        </div>
        <nav className="HolyGrail-nav">
          <div className="Logotipo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="Navegador-home">
            <li>Home</li>
            <li>Reformas</li>
            <li>Casas Prefabricadas</li>
          </ul>
        </nav>
      </header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <div className="App">
            {/* <HomeImagen></HomeImagen> *
            <Reformas></Reformas>
          </div>
        </main>
      </div>
      <footer>
        <DatosContacto></DatosContacto>
      </footer> */}
    </>
  );
}

export default App;
