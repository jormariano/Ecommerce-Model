import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
    return (
        <>
            <div className="card" style={{ width: '30rem' }}>
                <img src={img} className="imgsCarrito" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">Nombre: {nombre}</h5>
                    <p class="card-text">Precio: {precio}</p>
                    <p class="card-text">Id: {id}</p>
                    <Link to={`/item/${id}`}>Ver detalles</Link>
                </div>
            </div>
        </>
    )
}

export default Item