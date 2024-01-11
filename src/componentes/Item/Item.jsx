import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'


const Item = ({ id, nombre, precio, img, img2, img3, nombre2, nombre3, stock }) => {
    return (
        <>
            <div className="card">
                <Carousel>
                    <Carousel.Item>
                        <img src={img} className="img-cart" alt={nombre} />
                        <Carousel.Caption>
                            <Link to={`/item/${id}`} className="card-title"> <h2> {nombre}</h2> </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} className="img-cart" alt={nombre2} />
                        <Carousel.Caption>
                            <Link to={`/item/${id}`} className="card-title"> <h2 > {nombre2}</h2> </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} className="img-cart" alt={nombre3} />
                        <Carousel.Caption>
                            <Link to={`/item/${id}`} className="card-title"> <h2> {nombre3}</h2> </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Item