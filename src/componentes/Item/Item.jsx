import { Link } from "react-router-dom"


const Item = ({ id, city, img }) => {
    return (
        <div className="card" >
            <img src={img} alt={city} />
            <Link to={`/item/${id}`} >
                <h2> {city}</h2>
            </Link>
        </div>
    )
}

export default Item