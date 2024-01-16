import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ItemDetail = ({ id, city, price, money, stock, img, pixels }) => {

  const { t } = useTranslation(['global'])

  const [addAmount, setAddAmount] = useState(0);

  const {addProducts} = useContext(CartContext);
  
  const handlerAmount = (quantity) => {
    setAddAmount(quantity);


    const item = { id, city, price };
    addProducts(item, quantity);
  }

  return (
    <main className='detail-container'>
      <div className='item-detail'>
        <h2> {city} </h2>
        <img src={img} alt={city} />
      </div>
      <div className="item-body">
        <div className="item-description">
          <h3> {t('itemdetail.description')} </h3>
          <h4> {t('itemdetail.pixels')}: <strong> {pixels} </strong></h4>
          <h4> {t('itemdetail.price')} <strong> {price} {money} </strong> </h4>
          <h4>Stock: <strong> {stock} </strong> </h4>
        </div>
        {
          addAmount > 0 ? (<Link to="/cart"> {t('itemdetail.buy')} </Link>) : 
          (<ItemCount initial={1} stock={stock} addFunction={handlerAmount} />)
        }
      </div>

    </main>
  )
}

export default ItemDetail