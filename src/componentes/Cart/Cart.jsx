import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useTranslation } from 'react-i18next'

const Cart = () => {

    const { cart, emptyCart, total, totalAmount } = useContext(CartContext);

    const { t } = useTranslation(['global'])

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
            <div className="cart-item-map">
                {cart.map(product => <CartItem key={product.id}  {...product} />)}
            </div>
            <div className="cart-total">
                <h3>Total: <strong> {total} usd </strong> </h3>
                <h3> {t('cart.total')} <strong> {totalAmount} products </strong> </h3>
                <div className="cart-total-button">
                    <button onClick={() => emptyCart()}> {t('cart.empty')} </button>
                    <Link to="/checkout" > {t('cart.finalize')} </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart