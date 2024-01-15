import { useState, useEffect } from "react"


const ItemCount = ({ initial, stock, addFunction }) => {
  const [counter, setCounter] = useState(initial);

  const [color, setColor] = useState("white");

  useEffect(() => {

    if (counter > 6) {
      setColor("red");
    } else {
      setColor("white")
    }
  }, [counter])

  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const decrease = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <div className='contadorCarrito'>
        <h5>Contador:</h5>
        <button type="button" class="btn btn-primary btn-sm" onClick={decrease}> - </button>
        <strong> {counter} </strong>
        <button type="button" class="btn btn-primary btn-sm" onClick={increase}> + </button>
      </div>
      <button type="button" class="btn btn-success" onClick={() => addFunction(counter)} style={{ color: color }} >Agregar al Carrito</button>
    </>
  )
}

export default ItemCount