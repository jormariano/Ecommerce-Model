import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, stock, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={img} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h3>Nombre: {nombre}</h3>
          <h4>Precio: {precio}</h4>
          <h4>ID: {id}</h4>
          <p className="card-text">Puedes descargar e imprimir esta imagen original para hacerla un cuadro en tu casa.</p>
        </div>

        {
          agregarCantidad > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad} />)
        }
      </div>
    </>
  )
}

export default ItemDetail