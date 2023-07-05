// Para usar Bootstrap hay que transformar Link o Navlink con la propiedad as. Ej: 
// <Nav.Link as={Link} to="/tuCategoria">Nombre Categoria</Nav.Link>

import { useState, useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {

  const [categoria, setCategoria] = useState("");

  // Pasar dos parametros (), el primero es una funcion de callback y el segundo un array de dependencias
  useEffect(() => {
    document.title = `${categoria}`;
  }, [categoria]);

  // Funcion manejadora Handle
  const handleClick = (categoria) => {
    setCategoria(categoria);
  }

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" onClick={ () => handleClick("HOME")} class="navbar-brand">HOME</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li onClick={ () => handleClick("GRECIA")} class="nav-item">
                <NavLink to="/categoria/1" class="nav-link active" aria-current="page">GRECIA</NavLink>
              </li>
              <li onClick={ () => handleClick("TAILANDIA")} class="nav-item">
                <NavLink to="/categoria/2" class="nav-link active" aria-current="page">TAILANDIA</NavLink>
              </li>
              <li onClick={ () => handleClick("MEXICO")} class="nav-item">
                <NavLink to="/categoria/3" class="nav-link active" aria-current="page">MEXICO</NavLink>
              </li>
              <li onClick={ () => handleClick("ESPAÑA")} class="nav-item">
                <NavLink to="/categoria/4" class="nav-link active" aria-current="page">ESPAÑA</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar