import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTranslation } from 'react-i18next'

const CartItem = ({ item, quantity }) => {
  
  const { removeProduct } = useContext(CartContext);

  const { t } = useTranslation(['global'])

  return (
    <div className="cartitem-container">
      <div className="cartitem-items">
        <h3> {item.city} </h3>
        <h4> {t('cartitem.quantity')} {quantity} </h4>
        <h4> {t('cartitem.price')} {item.price} usd </h4>
        <button onClick={() => removeProduct(item.id)}> Eliminar </button>
      </div>
      <img src={item.img} alt={item.city} />
    </div>
  )
}

export default CartItem