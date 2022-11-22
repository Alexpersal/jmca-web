import "./Reformas.css";
import { useEffect } from "react";

export default function Reformas() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div class="imgSuperior">
        <p>
          Obra Civil
          <br />
          Reformas Integrales
          <br />
          Rehabilitación Edificios
        </p>
      </div>
      <div class="projectsSpace">
        <div class="projecto1">
          <h3>REFORMAS INTERIORES DE VIVIENDAS</h3>
          <div class="reformasImg5"></div>
          <p>
            Contamos con un equipo cualificado que se encarga de ejecutar los
            proyectos de la manera más eficiente posible, tanto en tiempo como
            en forma . <br></br>
            Le acompañamos en todo el proceso, desde la conceptualización de la
            reforma hasta la entrega de llaves a su finalización. Nuestros
            técnicos le podrán realizar propuestas de interiorismo y si lo desea
            la confección de planos e imágenes realistas para que en todo
            momento sepa cómo será su futura vivienda, incluso antes de empezar
            la obra.
          </p>
        </div>
        <div class="projecto1">
          <h3>RETAIL RESTAURACIÓN Y OFICINAS</h3>
          <div class="reformasImg6"></div>
          <p>
            Tenemos gran experiencia en este tipo de trabajos cumpliendo con sus
            pliegues de condiciones en cada caso. Hemos realizado tiendas tanto
            en plantas bajas de edificios plurifamiliares como en centros
            comerciales acogiéndonos a sus condiciones y demandas. Nos adaptamos
            a cualquier tipo de necesidad del cliente, realizando trabajos
            nocturnos para no afectar el buen funcionamiento de la actividad en
            cuestión. Tenemos un técnico en plantilla que organiza y dirige todo
            el proceso y sus oficios, que junto a nuestra red de expertos
            colaboradores para los trabajos más específicos, conseguimos
            excelentes resultados y acabados.
          </p>
        </div>
        <div class="projecto1">
          <h3>REHABILITACIONES DE FACHADAS</h3>
          <div class="reformasImg1"></div>
          <p>
            Rehabilitamos todo tipo de fachadas, abarcando todas aquellas
            técnicas que nos avalan para desarrollar las intervenciones que
            corresponden a cada tipo de fachada, ( fachadas ventiladas,
            revestimientos, sistema SATE, aplacados de piedra artificial,
            porcelánicos, morteros a la cal o convencionales ... ). <br></br>En
            GRUP JCMA CALVO, sabemos que la calidad no es una opción, sino una
            obligación, por ello siempre cumplimos estrictamente con todas las
            medidas de Seguridad pertinentes, reflejadas en el Plan de Seguridad
            supervisado por nuestros técnicos especializados y por la Dirección
            Facultativa responsable del proyecto.
          </p>
        </div>

        <div class="projecto1">
          <h3>CUBIERTAS</h3>
          <div class="reformasImg4"></div>
          <p>
            Las intervenciones en las cubiertas de los edificios son muy
            diversas y nosotros, en nuestra dilatada experiencia de más de 18
            años que nos avalan, hemos podido realizar cada una de ellas. Desde
            la restauración total mediante la impermeabilización con los
            distintos materiales homologados, empezando por los más
            tradicionales como la tela asfáltica o la auto protegida hasta los
            más innovadores como las imprimaciones de poliuretanos o la
            poliurea. Realizamos cubiertas invertidas y tradicionales
            consiguiendo el aislamiento térmico deseado.
          </p>
        </div>
        <div class="projecto1">
          <h3>PATIOS INTERIORES</h3>
          <div class="reformasImg2"></div>
          <p>
            Los trabajos en patios interiores, se ejecutan mediante diferentes
            técnicas específicas o combinadas, dependiendo de la complejidad de
            cada caso en particular, ya sea con estructuras andamio tubular,
            puente colgante o trabajos verticales. Cualquiera que sea su
            necesidad, estaremos ahí para ayudarle a solucionar complejos
            trabajos como pueden ser cambios de bajantes, montantes de agua y
            gas con certificado, reparaciones en paramentos, cosido de grietas,
            aplicación de morteros especiales de reparación, trabajos de
            pintura, sustitución de claraboyas ...
          </p>
        </div>
        <div class="projecto1">
          <h3>REFUERZOS ESTRUCTURALES</h3>
          <div class="reformasImg3"></div>
          <p>
            Realizamos todo tipo de refuerzos estructurales según dictámenes de
            la Dirección Facultativa. Desde los sistemas tradicionales hasta los
            más actuales tipo Mecanoviga, Cointecs o similares, así como
            actuaciones en todo tipo de patología estructural (aluminosis,
            desintegración de vigas de madera, oxidación vigas metálicas etc. )
            Al tratarse de trabajos especialmente delicados, los realizamos
            siempre siguiendo las indicaciones de arquitectos especializados y
            respetando escrupulosamente todas las medidas de seguridad,
          </p>
        </div>
      </div>
    </>
  );
}
