import "./DatosContacto.css";
import { BsFillGeoFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function DatosContacto() {
  return (
    <>
      <div className="phone">
        <BsFillTelephoneFill
          style={{ fontSize: "28px", marginRight: "10px" }}
        ></BsFillTelephoneFill>
        <a href="tel:+34609449920">+34609449920</a>
      </div>
      <div className="mail">
        <HiMail style={{ fontSize: "28px", marginRight: "10px" }}></HiMail>
        <a href="mailto:miguelcalvo@gmail.com">miguelcalvo@gmail.com</a>
      </div>
      <div className="position">
        <BsFillGeoFill
          style={{ fontSize: "28px", marginRight: "10px" }}
        ></BsFillGeoFill>
        <p>
          Carrer de la Font de Can Solé, 6, <br />
          08640 Olesa de Montserrat, Barcelona
        </p>
      </div>
    </>
  );
}
