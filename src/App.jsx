// Asegurarme de estar en mi-tienda y al crear con Vite, en la Terminal se ejecuta con: npm run dev
// Estilo: <div className='estiloPrincipal'></div>  EstilosCondicionales (en linea o con ClassName) en Clase 12 - 37'
// JSX es una extension de JavaScript. Al escribir RAFCE genero una nueva App
// App es el componente principal de toda la aplicacion. 
// Un componente solo puede retornar un elemento, por eso una solucion es envolver todo en una etiqueta semantica como un <div> <nav>

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
// import ItemCount from './componentes/ItemCount/ItemCount'
// <Route path='/ItemCount' element={<ItemCount className='contadorCarrito' stock={15} inicial={1} />} />
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Ckeckout/Checkout'

const App = () => {
  // Aca se escribe la parte logica. La funcion flecha sirve para renderizar la App en el navegador.

  return (
    // En el return vamos a retornar la interfaz del usuario.
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer title={"PRODUCCIÓN DE FOTOS"} />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer title={"PRODUCCIÓN DE FOTOS"} />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}  />
            <Route path="/checkout" element={<Checkout/>}  />
            <Route path="*" element={<h2>Link inexistente, vuelva a intentarlo</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
