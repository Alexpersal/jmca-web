import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../pages/obrasHome.jpg";
import img2 from "../obrasCasas.jpg";
import img3 from "../obrasReformas.jpg";
import imgDiseñoInteriores from "../diseñoInteriores.jpg";
import imgCasaPrefabricada from "../casaPrefabricada.jpg";

function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const imagenes = [img1, img2, img3];
  const frases = [
    "Realizamos reformas",
    "Construcción sostenible",
    "Obra civil",
  ];
  const [posicion, setPosicion] = useState(0);

  /*   function imganterior() {
    if (posicion > 0) {
      setPosicion((posicion) => posicion - 1);
    } else {
      setPosicion(imagenes.length - 1);
    }
  }
  function imgSiguiente() {
    if (posicion < imagenes.length - 1) {
      setPosicion((posicion) => posicion + 1);
    } else {
      setPosicion(0);
    }
  } */
  useEffect(() => {
    const lastIndex = imagenes.length - 1;
    if (posicion < 0) {
      setPosicion(lastIndex);
    }
    if (posicion > lastIndex) {
      setPosicion(0);
    }
  }, [posicion, imagenes]);
  useEffect(() => {
    let slider = setInterval(() => {
      setPosicion(posicion + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [posicion]);

  return (
    <div className="contenedor-general-carrousel">
      <div className="contenedor-carrousel">
        <div className="contenedor-imagenes">
          <img
            className="imagen-principal"
            alt="imagenes"
            src={imagenes[posicion]}
          ></img>
          <div className="texto-imagen">{frases[posicion]}</div>
          {/*    <button className="imagenIzquierda" onClick={() => imganterior()}>
            <p>❮</p>
          </button>
          <button className="imagenDerecha" onClick={() => imgSiguiente()}>
            <p>❯</p>
          </button> */}
        </div>
      </div>
      <div className="texto-Home">
        <p>
          {" "}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="contenedor-proyectos">
        <Link
          to={"../Reformas"}
          className="contenedor-reformas"
          alt="reformas2"
        >
          <img
            className="reformas-home"
            alt="reformas"
            src={imgDiseñoInteriores}
          ></img>
        </Link>

        <Link
          className="contenedor-steelframe"
          alt="reformas"
          to={"./CasasEco"}
        >
          <img
            className="steelframe-home"
            alt="steelframe"
            src={imgCasaPrefabricada}
          ></img>
        </Link>
      </div>
    </div>
  );
}
export default Home;
