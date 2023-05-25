import './App.css';
import Section from './componentes/Section';
import Section2 from './componentes/Section2';
import Section3 from './componentes/Section3';
import Card from './componentes/Card';
import Carousel from './componentes/Carousel';
import { NavBar } from './componentes/NavBar';
import Form from './componentes/form';
import SubNavBar from './componentes/SubNavBar';

function App() {
  return (
    <div className="App">
      <div className='contenedor-nav'>
        <NavBar/>
      </div>
      <div className='contenedor-home'>
        <div className='contenedor-subnavBar'>
          <SubNavBar/>
        </div>
        <div className='carousel'>
          <Carousel
          imagen='logo'/>
        </div>

        <div className='contenedor-section'>
          <Section imagen ='imagen2' title='LLEGAR A DESTINO' text='Parkly tiene como objetivo ayudar a los conductores a encontrar estacionamiento disponible en su área de manera rápida y conveniente. También buscamos proporcionar una experiencia de estacionamiento sin problemas al permitir a los usuarios reservar y pagar por su estacionamiento a través de la aplicación.'/>
          <Section2 imagen ='imagen3' title='HACIA DONDE CONDUCES' text='la aplicación utiliza GPS y tecnología de mapas para mostrar a los usuarios la disponibilidad de estacionamiento en tiempo real en su área, incluidos garajes y estacionamientos en la calle. Permite a los usuarios reservar un lugar de estacionamiento en garajes y estacionamientos privados seleccionados, lo que les garantiza un lugar para estacionar.'/>
          <Section3 imagen ='imagen4' title='LLEGAR A DESTINO' text='Parkly tiene como objetivo ayudar a los conductores a encontrar estacionamiento disponible en su área de manera rápida y conveniente. También buscamos proporcionar una experiencia de estacionamiento sin problemas al permitir a los usuarios reservar y pagar por su estacionamiento a través de la aplicación.'/>

          <div className='contenedor-section-card'>
            <div className='box-text-card'>
              <h1 className='tittle-Section'>Descubre las increíbles características de Parkly</h1>
              <p className='text-Section-card'>Descarga Parkly hoy mismo y descubre las características innovadoras que hemos preparado exclusivamente para ti. Tu experiencia de estacionamiento nunca será la misma. ¡Únete a la revolución de Parkly y disfruta de la comodidad y eficiencia en cada viaje!</p>
            </div>
            <div className='row'>
              <div className='col'>
                <Card
                titulo = 'Reserva rápida y sencilla'
                texto = 'Encuentra y reserva tu lugar de estacionamiento en segundos con nuestra aplicación intuitiva y fácil de usar.'
                imagen = 'carousel1.png'/>
              </div>
              <div className='col'>
                <Card
                titulo = 'Notificaciones en tiempo rea'
                texto = 'Recibe actualizaciones en tiempo real sobre la disponibilidad de espacios, recordatorios de vencimiento y otras notificaciones importantes.'
                imagen = 'carousel2.png'/>
              </div>
              <div className='col'>
                <Card
                titulo = 'Seguridad y tranquilidad'
                texto = 'Mantén tus vehículos seguros con nuestro sistema de vigilancia avanzado y la opción de recibir alertas en caso de cualquier actividad sospechosa.'
                imagen = 'carousel3.png'/>
              </div>
            </div>  
          </div>
          <div className='contenedor-form'>
            <Form/>
            <img className='img-form' src='./img/imagen5.png'/>

          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
