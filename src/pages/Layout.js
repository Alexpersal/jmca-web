import Logo from "../logo320x100.jpg";
import { Outlet, Link } from "react-router-dom";
import DatosContacto from "./DatosContacto";

import React from "react";

export default function Layout() {
  return (
    <>
      <header>
        <div className="cabeceraSuperior">
          <DatosContacto></DatosContacto>
        </div>
        <nav className="HolyGrail-nav">
          <div className="Logotipo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <ul className="Navegador-home">
            <li key="/">
              <Link to="/">Home</Link>
            </li>
            <li key="../Reformas">
              <Link to="../Reformas">
                Reformas /<br></br> Rehabilitaciones
              </Link>
            </li>
            <li key="../CasasEco">
              <Link to="../CasasEco">
                Casas <br></br>Industrializadas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet></Outlet>
          {/*   <div className="App">
             <HomeImagen></HomeImagen> 
            <Reformas></Reformas>
          </div> */}
        </main>
      </div>
      <footer>
        <DatosContacto></DatosContacto>
      </footer>
    </>
  );
}
