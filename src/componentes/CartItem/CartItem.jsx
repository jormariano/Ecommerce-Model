import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item, quantity}) => {
    const {removeProduct} = useContext(CartContext);

  return (
    <div>
        <h4> {item.city} </h4>
        <p> Cantidad: {quantity} </p>
        <p> Precio: {item.price} </p>
        <button onClick={() => removeProduct(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem