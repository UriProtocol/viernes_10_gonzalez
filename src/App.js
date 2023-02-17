import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import img from "./imgs/fotopro.jpeg";
import { useState } from "react";
import Carrusel from "./carrusel";
import GoogleMap from './mapsAPI'
import pdf from './files/cv.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode, faFileLines, faGraduationCap, faHome, faImage, faLocationDot, faPen, faSchool, faUser } from '@fortawesome/free-solid-svg-icons'



function Card({text, title, order}){
  return(
    <div className={`card ${order}`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function Home() {
  return (
    <div className="home-wrapper">
      <h1 className="home">Inicio</h1>
      <div className="info-container">
        <Card title={'Método Render'} text={' Todo componente de React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza (veremos esto más adelante)'} order={'first'}></Card>
        <Card title={'React Strict Mode'} text={'StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment, StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.'} order={'second'}></Card>
        <Card title={'Método Return'} text={'Este método es obligatorio en cualquier componente, pues como su nombre lo indica, se utiliza para obtener los elementos finales a visualizar y renderizar en el navegador. Debe ser una funcion pura, es decir, no debe modificar las props, no debe modificar el state, ni realizar operaciones en el DOM'} order={'third'}></Card>
      </div>
    </div>
  );
}
function Nombre() {
  return(
  <div className="nombre-wrapper">
    <h1 className="nombre">Uriel González</h1>
  </div>
  )
}
function UTD() {
  return(
  <div className="utd-wrapper">
    <h1 className="utd">UTD</h1>
  </div>
  )
}
function Carrera() {
  return(
  <div className="carrera-wrapper">
    <h1 className="carrera">Desarrollo de Software Multiplataforma</h1>
  </div>
  )
}
function Logo() {
  return(
    <div className="wrapper-center">
      <a href="https://utd.edu.mx"><img alt="Logo UTD" className="utd-logo" src='https://www.seekpng.com/png/detail/263-2635426_deportes-utd-universidad-tecnologica-de-durango-logo.png'></img></a>
    </div>
  )
}
function Foto() {
  return(
  <div className="wrapper-center">
    <h2 style={{alignSelf: 'end', marginBottom: '4rem'}}>Hola, busco empleo</h2>
    <img alt="Perfil" className="fotopro" src={img} style={{alignSelf: 'start'}}></img>
  </div>
  )

}
function Alumnos() {
  return(

    <div className="wrapper-center">
      <iframe title="curriculum" src={pdf} height='70%' width='100%'></iframe>
    </div>

  )
}

function App() {

  const links = [['Inicio', faHome], ['Nombre', faPen], ['UTD', faSchool], ['Carrera', faCode], ['Logo', faGraduationCap], ['Foto', faUser], ['Alumnos', faFileLines], ['Mapa', faLocationDot], ['Galeria', faImage]]

  const [nav, setNav] = useState(false)

  const navToggle = () =>{
    setNav(!nav)
  }
  return (
    <div className="app">
      <nav className={`${nav ? 'nav-open' : 'nav-collapsed'}` }>
        <button className="nav-toggle" onClick={navToggle}><FontAwesomeIcon icon={faBars} /></button>
        <ul>
          {
            links.map(link =>(
              <li key={link[0]}><Link to={link[0] === 'Inicio' ? '/gonzalezu' : 'gonzalezu/' + link[0].toLowerCase() }><FontAwesomeIcon className="hash" icon={link[1]}></FontAwesomeIcon><span className="nav-link-style">{link[0]}</span></Link></li>
            ))
          }
        </ul>
      </nav>

      
      <Routes>
        <Route path="/gonzalezu">
          <Route index element={<Home />}/>
          <Route path="nombre" element={<Nombre />} />
          <Route path="UTD" element={<UTD />} />
          <Route path="logo" element={<Logo />} />
          <Route path="carrera" element={<Carrera />} />
          <Route path="foto" element={<Foto />} />
          <Route path="alumnos" element={<Alumnos />} />
          <Route path="galeria" element={<Carrusel />} />
          <Route path="mapa" element={<GoogleMap />} />
        </Route>
        {/* <Route path="/nombre" element={<Nombre />} />
        <Route path="/UTD" element={<UTD />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/carrera" element={<Carrera />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/galeria" element={<Carrusel />} />
        <Route path="/mapa" element={<GoogleMap />} /> */}
      </Routes>
    </div>
  );
}

export default App;
