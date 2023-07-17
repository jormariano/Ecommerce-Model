import './ItemCount.css'
import { useState, useEffect } from "react"


const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const [color, setColor] = useState("white");

  useEffect(() => {

    if (contador > 6) {
      setColor("red");
    } else {
      setColor("white")
    }
  }, [contador])

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }

  return (
    <>
      <div className='contadorCarrito'>
        <h4>Contador:</h4>
        <button type="button" class="btn btn-primary btn-sm" onClick={decrementar}> - </button>
        <strong> {contador} </strong>
        <button type="button" class="btn btn-primary btn-sm" onClick={incrementar}> + </button>
      </div>
        <button type="button" class="btn btn-success" onClick={() => funcionAgregar(contador)} style={{ color: color }} >Agregar al Carrito</button>
    </>
  )
}

export default ItemCount