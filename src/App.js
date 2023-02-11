import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import img from "./imgs/fotopro.jpeg";
import { useState } from "react";
import Carrusel from "./carrusel";




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
      <a href="https://utd.edu.mx"><img className="utd-logo" src='https://www.seekpng.com/png/detail/263-2635426_deportes-utd-universidad-tecnologica-de-durango-logo.png'></img></a>
    </div>
  )
}
function Foto() {
  return(
  <div className="wrapper-center">
    <h2 style={{alignSelf: 'end', marginBottom: '4rem'}}>Hola, busco empleo</h2>
    <img className="fotopro" src={img} style={{alignSelf: 'start'}}></img>
  </div>
  )

}
function Alumnos() {
  return(
    <div>Currículum</div>
  )
}
function Mapa() {
  return(
    <div>Mapa</div>
  )
}
function Galeria() {
  return(
    <div>Carrusel</div>
  )
}


function App() {

  const longNavLinks = ['Home', 'Nombre', 'UTD', 'Carrera', 'Logo', 'Foto', 'Alumnos', 'Mapa', 'Galeria']

  const [links, setLinks] = useState(longNavLinks)
  
  console.log(links)
  return (
    <div className="app">
      <nav>
        <ul>
          {
            links.map(link =>(
              <li><Link to={link === 'Home' ? '/' : link.toLowerCase()}><span className="hash">#</span><span className="nav-link-style">{link}</span></Link></li>
            ))
          }
          {/* <li><Link to={'/'}><span className="hash">#</span><span className="nav-link">Home</span></Link></li>
          <li><Link to={'/nombre'}><span className="hash">#</span><span className="nav-link">Nombre</span></Link></li>
          <li><Link to={'/UTD'}><span className="hash">#</span><span className="nav-link">UTD</span></Link></li>
          <li><Link to={'/logo'}><span className="hash">#</span><span className="nav-link">Logo UTD</span></Link></li>
          <li><Link to={'/carrera'}><span className="hash">#</span><span className="nav-link">Carrera</span></Link></li> */}

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
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/galeria" element={<Carrusel />} />
      </Routes>
    </div>
  );
}

export default App;
