import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div >
            <img className="imgCard" src={img} alt={nombre} />
            <h5 class="card-title">Nombre: {nombre}</h5>
            <p class="card-text">Precio: {precio}</p>
            <p class="card-text">Id: {id}</p>
            <Link to={`/item/${id}`}>Ver detalles</Link>
        </div>
    )
}

export default Item