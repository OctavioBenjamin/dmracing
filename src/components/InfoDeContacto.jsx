import React from "react";
import { BsWhatsapp,BsEnvelope, BsInstagram, BsHouseDoor } from "react-icons/bs";
import "../stylesheets/InfoDeContacto.css"

function InfoDeContacto() {
  return ( 
    <div className="info-de-contacto">
      <div className="contenedor-data">
        <BsWhatsapp id="whatsapp-icon" className="icon-logo"/>
        <label htmlFor="whatsapp-icon">+54 2966 64-2470 | Martin</label>
      </div>
      <div className="contenedor-data">
        <BsWhatsapp id="whatsapp-icon-2" className="icon-logo"/>
        <label htmlFor="whatsapp-icon-2">+54 2966 70-4118 | Damian</label>
      </div>
      <div className="contenedor-data">
        <BsEnvelope id="correo-icon" className="icon-logo"/>
        <label htmlFor="correo-icon">martinvieraopac@gmail.com</label>
      </div>
      <div className="contenedor-data">
        <BsInstagram id="instagram-icon" className="icon-logo"/>
        <label htmlFor="instagram-icon">dmracing_calafate</label>
      </div>
      <div className="contenedor-data">
        <BsHouseDoor id="ubicacion-icon" className="icon-logo"/>
        <label htmlFor="ubicacion-icon">El Calafate, Santa Cruz</label>
      </div>
    </div>
  );
}

export default InfoDeContacto;