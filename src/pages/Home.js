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
        <h1>
          Contamos con una dilatada experiencia en la rehabilitación de
          edificios, fachadas y reformas, ya sean estas últimas en proyectos de
          interiorismo para viviendas, remodelación de oficinas o retail.{" "}
          <br></br>Somos una empresa dedicada a la construcción desde el año
          2005 y con especialización contrastada desde hace más de 3 años en la
          construcción de obra nueva más sostenible y eficiente, ofreciendo la
          última tecnología en sistemas constructivos, mediante el sistema Steel
          Frame. Si quieres que te acompañemos en el proceso de hacer realidad
          todos tus proyectos, no dudes en contactar con nosotros, estaremos
          encantados de poder ser partícipe en cada uno de ellos.
        </h1>
      </div>
      <div className="contenedor-proyectos">
        <div className="contenedor-proyectos-reformas-descripcion">
          <Link
            to={"./Reformas"}
            className="contenedor-reformas"
            alt="reformas2"
          >
            <img
              className="reformas-home"
              alt="reformas"
              src={imgDiseñoInteriores}
            ></img>
          </Link>
          <div className="contenedor-proyectos-reformas-textos">
            <h2>REFORMAS</h2>
            <p>
              Trabajamos con criterios de responsabilidad ambiental, ofreciendo
              soluciones constructivas eficientes en el uso de recursos,
              sostenibles, saludables y con máximas prestaciones. Queremos
              ofrecer una nueva experiencia a aquellos clientes que han decidido
              emprender un nuevo proyecto constructivo, creando y dando valor a
              esta importante decisión, trabajamos juntos en la personalización
              de los espacios del proyecto para conseguir un edificio
              SOSTENIBLE, SALUDABLE y ENERGETICAMENTE EFICIENTE adecuado a sus
              necesidades.
            </p>
          </div>
        </div>
        <div className="contenedor-proyectos-casas-descripcion">
          <div className="contenedor-proyectos-casas-textos">
            <h2>CASAS</h2>
            <p>
              Nuestro principal objetivo es facilitar, acompañar y realizar de
              la manera más satisfactoria, el duro camino que representa
              cualquier tipo de obra y rehabilitación. Somos versátiles,
              polivalentes y flexibles, nos adaptamos siempre a cada caso y a
              las necesidades que tienen nuestros clientes. Para nosotros es
              importante la experiencia del cliente en todo el proceso
              constructivo. Intentamos siempre estar a la vanguardia de nuevas
              tecnologías, soluciones y sistemas constructivos que nos ayuden a
              realizar los proyectos, teniendo en cuenta aspectos tan
              importantes como la ecología, la sostenibilidad y la inversión
              económica de las obras. Tus proyectos son nuestra pasión, no dudes
              en contactar con nosotros
            </p>
          </div>
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
    </div>
  );
}
export default Home;
