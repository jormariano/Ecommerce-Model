import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
    return (
           <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={img} class="card-img-top" alt={nombre} />
                        <div class="card-body">
                            <h5 class="card-title">Nombre: {nombre}</h5>
                            <p class="card-text">Precio: {precio}</p>
                            <p class="card-text">Id: {id}</p>
                            <Link to={`/item/${id}`}>Ver detalles</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img} class="card-img-top" alt={nombre} />
                        <div class="card-body">
                            <h5 class="card-title">Nombre: {nombre}</h5>
                            <p class="card-text">Precio: {precio}</p>
                            <p class="card-text">Id: {id}</p>
                            <Link to={`/item/${id}`}>Ver detalles</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img} class="card-img-top" alt={nombre} />
                        <div class="card-body">
                            <h5 class="card-title">Nombre: {nombre}</h5>
                            <p class="card-text">Precio: {precio}</p>
                            <p class="card-text">Id: {id}</p>
                            <Link to={`/item/${id}`}>Ver detalles</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img} class="card-img-top" alt={nombre} />
                        <div class="card-body">
                            <h5 class="card-title">Nombre: {nombre}</h5>
                            <p class="card-text">Precio: {precio}</p>
                            <p class="card-text">Id: {id}</p>
                            <Link to={`/item/${id}`}>Ver detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Item