import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <>
            <div className="card">
                <Link to={`/item/${id}`}><img src={img} className="img-cart" alt={nombre} /></Link>
                <div className="card-body">
                    <h2 className="card-title"> {nombre}</h2>

                </div>
            </div>
        </>
    )
}

export default Item