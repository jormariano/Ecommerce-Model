// Asegurarme de estar en mi-tienda y al crear con Vite, en la Terminal se ejecuta con: npm run dev

import './App.css'

// JSX es una extension de JavaScript. Al escribir RAFCE genero una nueva App

// App es el componente principal de toda la aplicacion. 
// Un componente solo puede retornar un elemento, por eso una solucion es envolver todo en una etiqueta semantica como un <div> <nav>

import ItemCount from './componentes/ItemCount/ItemCount'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

const App = () => {
  // Aca se escribe la parte logica. La funcion flecha sirve para renderizar la App en el navegador.

  return (
    // En el return vamos a retornar la interfaz del usuario.

    // AVERIGUAR COMO CENTRAR EL CONTADOR CON CSS

    <>
      <NavBar />
      <div className='estiloPrincipal'>
        <ItemListContainer title={"PRODUCCIÓN DE FOTOS"} />
        <ItemCount className='contadorCarrito' stock={15} inicial={1} />
      </div>
    </>
  )
}

export default App
