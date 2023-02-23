import React, { useState } from 'react';
import "../stylesheets/Formulario.css"


function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podríamos enviar los datos del formulario a un servidor mediante una petición HTTP
    console.log('Nombre: ', nombre);
    console.log('Email: ', email);
    console.log('Teléfono: ', telefono);
    console.log('Mensaje: ', mensaje);
  };

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id='nombre'
          className='input-form'
          name="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id='email'
          className='input-form'
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id='telefono'
          className='input-form'
          name="telefono"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
          pattern="[0-9]{10}"
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id='mensaje'
          className='input-form text-area'
          name="mensaje"
          value={mensaje}
          onChange={(event) => setMensaje(event.target.value)}
          required
        />

        <button type="submit" className='button-input'>Enviar</button>
      </form>
  );
}

export default FormularioContacto;
