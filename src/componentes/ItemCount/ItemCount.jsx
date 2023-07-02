import './ItemCount.css'
import { useState, useEffect } from "react"

/* Clase 4: Componentes 1 - 55'
Hay que trabajar con un ESTADO que va a guardar el num de productos seleccionados por el cliente.
ESTADO: Es un objeto que contiene informacion del componente que puede cambiar durante la ejecucion de la App 
Para crear y manipular el ESTADO hay que ayudarnos con la libreria propia de React, llamada HOOKS.
Hooks se llama usando "useState" 
useState retorna un Array con dos elementos, el primero es el estado en si (ej: contador) y el segundo es una funcion que permite cambiar/actualizar el valor del estado. La funcion siempre arranca con setNombredeestado. Dentro de useState() va el num de inicializacion del contador. 
Clase 5 18': 
Los datos se reciben por props de algun componente superior de algun componente padre. Las props se reciben desestructuradas en dos variables {stock, inicial} 
Clase Componentes II 36'. useEffect es un hook para realizar efectos secundarios y no solo mostrarse con useState. Hay que invocarlo y pasarle dos parametros (), el primero es una funcion flecha (funcion de callback) y segundo parametros se pasa un array (array de dependencias), todos los elementos que debe chequear ya que si se modifican. */

const ItemCount = ({ stock, inicial }) => {
  const [contador, setContador] = useState(inicial);

  // Clase Componentes II 50'
  const [color, setColor] = useState("white");

  useEffect(() => {
    // lo ejecuta y cambia el color del contador
    if (contador > 6) {
      setColor("red");
    } else {
      setColor("white")
    }
  }, [contador])

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const agregarCarrito = () => {
    console.log(`Agregado ${contador} items`)
  }

  return (
    <>
      <div className='contadorCarrito'>
        <h4>Contador:</h4>
        <button type="button" class="btn btn-primary btn-sm" onClick={decrementar}> - </button>
        <strong> {contador} </strong>
        <button type="button" class="btn btn-primary btn-sm" onClick={incrementar}> + </button>
        <button type="button" class="btn btn-success" onClick={agregarCarrito} style={{ color: color }} >Agregar al Carrito</button>
      </div>
    </>
  )
}

// Las funciones van sin () porque queremos que se ejecuten unicamente cuando el usuario haga click en los botones.

export default ItemCount