import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, emptyCart, total, totalAmount } = useContext(CartContext);

    if (totalAmount === 0) {
        return (
            <div className="cart-container">
                <h2 className="empty-cart-message"> No hay productos en el carrito. ¡Compra!</h2>
                <Link to="/">Ver Productos</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            {cart.map(product => <CartItem key={product.id}  {...product} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {totalAmount} </h3>
            <button onClick={() => emptyCart()}> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart