import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3050/3050238.png"
    return (
        <Link to="/cart">
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            {
                cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }
        </Link>
    )
}

export default CartWidget