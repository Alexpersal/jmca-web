import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../pages/obrasHome.jpg";
import img2 from "../obrasCasas.jpg";
import img3 from "../obrasReformas.jpg";
import imgDiseñoInteriores from "../diseñoInteriores.jpg";
import casaSteelFrame from "../casaSteelFrame.jpg";

function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const imagenes = [img1, img2, img3];
  const frases = [
    "Realizamos reformas",
    "Construcción sostenible",
    "Obra civil",
  ];

  const [posicion, setPosicion] = useState(0);

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
        </div>
      </div>
      <div className="texto-Home">
        <p>
          GRUP JCMA CALVO <br></br>Somos una empresa dedicada a la construcción
          desde el año 2005. Realizamos todo tipo de rehabilitaciones y
          reformas. Fachadas con andamio tubular, patios interiores, cambio de
          bajantes, reformas de viviendas con proyectos de interiorismo, retail,
          oficinas ... <br></br>Desde hace 3 años tambien realizamos viviendas
          de nueva edificación mediante el sistema constructivo steel frame,
          favoreciendo la industrialización en la construcción, así como hacerla
          mucho más sostenible y eficiente. Estamos a vuestra disposición para
          cualquier duda o consulta. Llámanos.
        </p>
      </div>
      <div className="contenedor-proyectos">
        <Link to={"./Reformas"} className="contenedor-reformas" alt="reformas2">
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
            src={casaSteelFrame}
          ></img>
        </Link>
      </div>
    </div>
  );
}
export default Home;
