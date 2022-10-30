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
        <p>+34 666 66 66 66</p>
      </div>
      <div className="mail">
        <HiMail style={{ fontSize: "28px", marginRight: "10px" }}></HiMail>
        <p>miguelcalvo@gmail.com</p>
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
