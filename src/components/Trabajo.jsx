import React from "react";
import "../stylesheets/Trabajo.css"

function Trabajo({ trabajo, alt , descripcionTrabajo }) {
  return ( 
    <div className="contenedor-trabajo">
      <img src={require(`../images/image_${trabajo}.jpg`)} alt={alt} className="imagen-trabajo"/>
      <h2 className="titulo-trabajo">{trabajo}</h2>
      <p className="texto-trabajo">{descripcionTrabajo}</p>
    </div>
  );
}

export default Trabajo;