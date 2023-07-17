import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const ItemDetail = ({ id, nombre, precio, stock, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }

  return (
    <>
      <div className='unProducto'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad, quaerat officia non eveniet iure provident possimus similique aspernatur molestias quia dolorem eligendi at? Eos illum cupiditate cum et corrupti.</p>
        <img src={img} alt={nombre} />

        {
          agregarCantidad > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad}/>)
        }

      </div>
    </>
  )
}

export default ItemDetail