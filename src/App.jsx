// Asegurarme de estar en mi-tienda y al crear con Vite, en la Terminal se ejecuta con: npm run dev

// Es necesario importar el documento App.css para que se apliquen los estilos

import './App.css'

// JSX es una extension de JavaScript. Si escribo RAFCE genero una nueva App

// Esta linea de codigo ya no es necesaria y se puede borrar: import React from 'react'

// App es el componente principal de toda la aplicacion. 
// Un componente solo puede retornar un elemento, por eso una solucion es envolver todo en una etiqueta semantica como un <div> <nav>

import ItemCount from './componentes/ItemCount/ItemCount'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'

const App = () => {
  // Aca se escribe la parte logica. La funcion flecha sirve para renderizar la App en el navegador.

  // En el return vamos a retornar la interfaz del usuario.
  return (
    <>
      <NavBar />
      <br />
      <TituloPrincipal titulo={"PRODUCCION DE FOTOS"} />
      <ItemListContainer greeting={"Bienvenido usuario a"} />
      <br />
      <ItemCount stock={15} inicial={1} />
      <br />
      <ItemCount stock={24} inicial={3} />
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos molestias voluptatibus, aperiam culpa, exercitationem officia nesciunt quae a quia impedit in quod quam. Quae facilis eaque sequi esse quod.</p>

    </>
  )
}

// Si o si, tienen que estar contenidas todas las etiquetas. Para no llenar todo de <div> </div> se soluciona utilizando el fragment: <> </> 
// Cada etiqueta es un elemento que debe estar contenida y deben estar balanceadas, osea siempre cerradas <img /> <br />

// Para agregar estilo hay que agregar una className=""

/* CLASE 4: Componentes 1
COMPONENTES: Conjunto de elementos que cumplen una funcion especifica. Renderizan un unico elemento, contienen props y pueden tener un estado. Ejemplo: un botón, una card de un producto, un formulario, un titulo, etc).

Tienen PROPS: 
Son objetos que contienen datos que un componente necesita para renderizarse correctamente. Se envian de forma unidireccional de padres a hijos.

Clase 4 - 35'
Pueden tener un ESTADO:
Es un objeto que contiene informacion del componente que puede cambiar durante la ejecucion de la App 
Para crear y manipular el estado hay que ayudarnos con la libreria propia de React, llamada HOOKS.
Hooks se llama usando "useState"
El ejemplo mas basico de un ESTADO es un contador en el carrito de compras. 

Clase 5 - 9'
Ciclo de vida de los componentes: Serie de estados por los cuales pasa todo componente.
Montaje (ingresa el componente al DOM), Actualizacion (se actualiza el valor del contador) y Desmontaje (desaparece el contador porque fuiste al carrito). 

Clase 5 - 31'
Nuevo HOOK: useEffect es para hacer mas cosas que solo renderizar el componente. Como por ejemplo:
Realizar operaciones, usar eventos, consumir datos de algun servidor, etc.
*/

export default App
