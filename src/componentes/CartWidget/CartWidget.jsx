import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "/icon/navbar_cart.svg"
    
    return (
        <Link to="/cart">
            <img className='navbar-cart' src={imgCarrito} alt="carrito de compras" />
            {
                cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }
        </Link>
    )
}

export default CartWidget