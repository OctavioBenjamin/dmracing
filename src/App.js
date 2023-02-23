import './App.css';
import Trabajo from "./components/Trabajo";
import Formulario from "./components/Formulario";
import InfoDeContacto from './components/InfoDeContacto';
import NavBar from './components/NavBar';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className='main-header'>
        <NavBar/>
      </header>

      <div className="presentacion">
          <h1 id="inicio">
            ¡Bienvenidos al taller mecánico de Martín y Damián!
          </h1>
          <p>
            Martín y Damián tienen años de experiencia en el mundo de la mecánica, lo que los convierte en unos verdaderos profesionales. Su conocimiento y habilidad en el diagnóstico y reparación de vehículos los han llevado a ser reconocidos en la comunidad como uno de los talleres más confiables y eficientes.
          </p>
        {/* <div className="texto-presentacion">
        </div> */}
      </div>

      <div className="trabajos" id="#trabajos">
        <h1>
        Algunos de los servicios que ofrecemos:
        </h1>
        <div className="contenedor-trabajos">
          <Trabajo trabajo="distribucion" descripcionTrabajo={"Disposición y colocación adecuada de los componentes internos del vehículo.\nProceso fundamental para garantizar el correcto funcionamiento y desempeño del vehículo. Una distribución adecuada mejora el rendimiento."}/>
          <Trabajo trabajo="service" alt="service de carro" descripcionTrabajo={"Hacer un service regularmente puede ayudar a prevenir fallas mecánicas y costosas reparaciones mayores en el futuro. Además, un servicio bien hecho también puede mejorar la eficiencia del combustible y la seguridad en la conducción."}/>
          <Trabajo trabajo="frenos" descripcionTrabajo={"Uno de los componentes más importantes, y su correcto funcionamiento garantiza seguridad.\nNos aseguramos que los componentes esten colocados y funcionando correactamente."}/>
          <Trabajo trabajo="embrague" descripcionTrabajo={"Inspeccionamos y ajustamos todos los componentes del sistema de embrague para garantizar que estén colocados y funcionando correctamente.\nPara mejorar su rendimiento y eficiencia."}/>
        </div>
      </div>

      <div className="sobre-nosotros" id='sobre-nosotros'>
        <h1 className='titulo-sobre-nosotros'>
          Sobre Nosotros
        </h1>
        
        <p className='texto-sobre-nosotros'>En nuestro taller mecánico, nos apasiona el mundo de los vehículos y la mecánica, lo que nos impulsó a crear este negocio con la visión de brindar un servicio de alta calidad y personalizado a cada uno de nuestros clientes.</p>
        <p className='texto-sobre-nosotros'>Nos comprometemos a brindar un servicio excepcional que siempre coloque la satisfacción del cliente en primer lugar. Nos aseguramos de escuchar atentamente a cada cliente para entender sus necesidades y ofrecer el mejor servicio posible, siempre con honestidad y transparencia en cada trabajo que realizamos. Antes de comenzar cualquier trabajo adicional, proporcionamos una estimación clara y detallada de los costos y plazos de reparación, para que nuestros clientes siempre sepan exactamente lo que pueden esperar.</p>
        <p className='texto-sobre-nosotros'>Con años de experiencia trabajando con una variedad de vehículos y clientes, desde propietarios de automóviles individuales hasta flotas empresariales, nos enorgullece brindar el mismo nivel de servicio excepcional a cada uno de nuestros clientes. Valoramos la confianza que cada cliente deposita en nosotros al dejarnos cuidar de su vehículo, y trabajamos duro para ganar y mantener esa confianza en cada trabajo que realizamos.</p>
      </div>

      <div className="contacto" id='contacto'>
        <div className="contenedor-formulario">
          <h1>Contate con nosotros.</h1>
          <p>Tu consulta no nos molesta.</p>
          <Formulario/>
        </div>
        
          <InfoDeContacto/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
