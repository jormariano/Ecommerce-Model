import './ItemCount.css'
import { useState, useEffect } from "react"


const ItemCount = ({ stock, inicial }) => {
  const [contador, setContador] = useState(inicial);

  const [color, setColor] = useState("white");

  useEffect(() => {

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

export default ItemCount