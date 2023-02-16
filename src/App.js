import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import img from "./imgs/fotopro.jpg";

import Carrusel from "./carrusel";
import GoogleMap from './mapsAPI'
import pdf from './files/cv.pdf';



//npm install: 
//reactstrap
//google-maps-react --force
//react bootstrap (npm install react-bootstrap bootstrap)
//react-places-autocomplete --force
//react-router-dom


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
    <h1 className="nombre">Nombre</h1>
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
    <img alt="Perfil" className="fotopro" src={img}></img>
  </div>
  )

}
function Alumnos() {
  return(

      <iframe title="curriculum" src={pdf} height='70%' width='50%' style={{position: 'relative', left: '50%', translate: '-50% 0'}}></iframe>

  )
}

function App() {


  return (
    <div className="app">
      <nav>
        
        <ul>
          
          <Link to={'/'}>Home</Link>
          <Link to={'nombre'}>Nombre</Link>
          <Link to={'UTD'}>UTD</Link>
          <Link to={'logo'}>Logo</Link>
          <Link to={'carrera'}>Carrrera</Link>
          <Link to={'foto'}>Foto</Link>
          <Link to={'alumnos'}>Alumnos</Link>
          <Link to={'galeria'}>Galeria</Link>
          <Link to={'mapa'}>Mapa</Link>


        </ul>
      </nav>

      
      <Routes>
        <Route path="/">
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
