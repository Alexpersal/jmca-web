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
        <a href="+34722109491">+34722109491</a>
      </div>
      <div className="mail">
        <HiMail style={{ fontSize: "28px", marginRight: "10px" }}></HiMail>
        <a href="mailto:miguel.grupcalvo@hotmail.com">
          miguel.grupcalvo@hotmail.com
        </a>
      </div>
      <div className="position">
        <BsFillGeoFill
          style={{ fontSize: "28px", marginRight: "10px" }}
        ></BsFillGeoFill>
        <p>
          Carrer Pep Ventura 8 - 08640 <br />
          Olesa de Montserrat, Barcelona
        </p>
      </div>
    </>
  );
}
