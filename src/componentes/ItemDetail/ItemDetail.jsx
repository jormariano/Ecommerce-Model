import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, city, city2, city3, price, money, stock, img, img2, img3 }) => {

  const [addAmount, setAddAmount] = useState(0);

  const { addProduct } = useContext(CartContext);

  const handlerAmount = (quantity) => {
    setAddAmount(quantity);

    const item = { id, city, price };
    addProduct(item, quantity);
  }

  return (
    <main>
      <section className='detail-container'>
        <div className="item-detail">
          <img src={img} alt={city} className='detail-img' />
          <div className="item-body">
            <h2>Ciudad: {city}</h2>
            <h3>Precio: {price} {money}</h3>
          </div>
          {
            addAmount > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount initial={1} stock={stock} addFunction={handlerAmount} />)
          }
        </div>
        <div className="item-detail">
          <img src={img2} alt={city2} className='detail-img' />
          <div className="item-body">
            <h2>Ciudad: {city2}</h2>
            <h3>Precio: {price} {money}</h3>
          </div>
          {
            addAmount > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount initial={1} stock={stock} addFunction={handlerAmount} />)
          }
        </div>
        <div className="item-detail">
          <img src={img3} alt={city3} className='detail-img' />
          <div className="item-body">
            <h2>Ciudad: {city3}</h2>
            <h3>Precio: {price} {money}</h3>
          </div>
          {
            addAmount > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount initial={1} stock={stock} addFunction={handlerAmount} />)
          }
        </div>
      </section>
    </main>
  )
}

export default ItemDetail