// Para usar Bootstrap hay que transformar Link o Navlink con la propiedad as. Ej: 
// <Nav.Link as={Link} to="/tuCategoria">Nombre Categoria</Nav.Link>

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import Login from '../Login/Login'
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" onClick={() => handleClick("HOME")} className="navbar-brand">HOME</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li onClick={() => handleClick("GRECIA")} className="nav-item">
                <NavLink to="/categoria/1" className="nav-link active" aria-current="page">GRECIA</NavLink>
              </li>
              <li onClick={() => handleClick("TAILANDIA")} className="nav-item">
                <NavLink to="/categoria/2" className="nav-link active" aria-current="page">TAILANDIA</NavLink>
              </li>
              <li onClick={() => handleClick("MEXICO")} className="nav-item">
                <NavLink to="/categoria/3" className="nav-link active" aria-current="page">MEXICO</NavLink>
              </li>
              <li onClick={() => handleClick("ESPAÑA")} className="nav-item">
                <NavLink to="/categoria/4" className="nav-link active" aria-current="page">ESPAÑA</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="loginCar">
        <CartWidget />
        <Login />
      </div>
    </header>
  )
}

export default NavBar