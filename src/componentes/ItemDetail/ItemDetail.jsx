import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, city, price, money, stock, img }) => {

  const [addAmount, setAddAmount] = useState(0);

  const { addProduct } = useContext(CartContext);

  const handlerAmount = (quantity) => {
    setAddAmount(quantity);

    const item = { id, city, price };
    addProduct(item, quantity);
  }

  return (
    <main className='detail-container'>
      <div className='item-detail'>
        <img src={img} alt={city} className='detail-img' />
        <div className="item-body">
          <h2>Ciudad: {city}</h2>
          <h3>Precio: {price} {money}</h3>
          <h3>Stock: {stock} </h3>
          {
            addAmount > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount initial={1} stock={stock} addFunction={handlerAmount} />)
          }
        </div>
      </div>
    </main>
  )
}

export default ItemDetail