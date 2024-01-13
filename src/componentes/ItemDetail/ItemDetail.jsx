import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, nombre2, nombre3, precio, money, stock, img, img2, img3 }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <main>
      <section className='detail-container'>
        <div className="item-detail">
          <img src={img} alt={nombre} className='detail-img' />
          <div className="item-body">
            <h2>Ciudad: {nombre}</h2>
            <h3>Precio: {precio} {money}</h3>
          </div>
          {
            agregarCantidad > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad} />)
          }
        </div>
        <div className="item-detail">
          <img src={img2} alt={nombre2} className='detail-img' />
          <div className="item-body">
            <h2>Ciudad: {nombre2}</h2>
            <h3>Precio: {precio} {money}</h3>
          </div>
          {
            agregarCantidad > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad} />)
          }
        </div>
        <div className="item-detail">
          <img src={img3} alt={nombre3} className='detail-img' />
          <div className="item-body">
            <h2>Ciudad: {nombre3}</h2>
            <h3>Precio: {precio} {money}</h3>
          </div>
          {
            agregarCantidad > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad} />)
          }
        </div>
      </section>
    </main>
  )
}

export default ItemDetail