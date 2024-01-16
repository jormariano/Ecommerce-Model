import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const {totalAmount} = useContext(CartContext);

    const imgCart = "/icon/navbar_cart.svg"
    
    return (
        <Link to="/cart">
            <img className='navbar-cart' src={imgCart} alt="carrito de compras" />
            {
                totalAmount > 0 && <strong> {totalAmount} </strong>
            }
        </Link>
    )
}

export default CartWidget