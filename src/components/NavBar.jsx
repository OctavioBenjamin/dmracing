import React, { useState } from "react";
import "../stylesheets/NavBar.css"
import { BsList } from "react-icons/bs";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return ( 
  
        <div className="navbar">
            <div className="nav_logo"> DMRacing </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#inicio"> INICIO</a>
                <a href="#trabajos"> TRABAJOS</a>
                <a href="#sobre-nosotros"> SOBRE NOSOTROS</a>
                <a href="#contacto"> CONTACTO</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  );
}


export default NavBar;