import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import img from "./imgs/fotopro.jpeg";
import { useState } from "react";
import Carrusel from "./carrusel";
import GoogleMap from './mapsAPI'
import pdf from './files/cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode, faFileLines, faGraduationCap, faHome, faImage, faLocationDot, faPen, faSchool, faUser } from '@fortawesome/free-solid-svg-icons'



function Home() {
  return (
    <div className="home-wrapper">
      <h1 className="home">Home</h1>
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

  const links = [['Home', faHome], ['Nombre', faPen], ['UTD', faSchool], ['Carrera', faCode], ['Logo', faGraduationCap], ['Foto', faUser], ['Alumnos', faFileLines], ['Mapa', faLocationDot], ['Galeria', faImage]]

  const [nav, setNav] = useState(false)

  const navToggle = () =>{
    setNav(!nav)
  }
  return (
    <div className="app">
      <nav className={`${nav ? 'nav-open' : 'nav-collapsed'}`}>
        <button className="nav-toggle" onClick={navToggle}><FontAwesomeIcon icon={faBars} /></button>
        <ul>
          {
            links.map(link =>(
              <li key={link[0]}><Link to={link[0] === 'Home' ? '/' : link[0].toLowerCase()}><FontAwesomeIcon className="hash" icon={link[1]}></FontAwesomeIcon><span className="nav-link-style">{link[0]}</span></Link></li>
            ))
          }
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nombre" element={<Nombre />} />
        <Route path="/UTD" element={<UTD />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/carrera" element={<Carrera />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/galeria" element={<Carrusel />} />
        <Route path="/mapa" element={<GoogleMap />} />
      </Routes>
    </div>
  );
}

export default App;
