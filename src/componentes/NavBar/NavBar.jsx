import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {

  const [categoria, setCategoria] = useState("");

  // Pasar dos parametros (), el primero es una funcion de callback y el segundo un array de dependencias
  useEffect(() => {
    document.title = `Categoria: ${categoria}`;
  }, [categoria]);

  // Funcion manejadora Handle
  const handleClick = (categoria) => {
    setCategoria(categoria);
  }

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a onClick={ () => handleClick("PAISES")} class="navbar-brand" href="#">PAISES: </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li onClick={ () => handleClick("GRECIA")} class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">GRECIA</a>
              </li>
              <li onClick={ () => handleClick("TAILANDIA")} class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">TAILANDIA</a>
              </li>
              <li onClick={ () => handleClick("MEXICO")} class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">MEXICO</a>
              </li>
              <li onClick={ () => handleClick("ESPAÑA")} class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ESPAÑA</a>
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