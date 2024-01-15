import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'


const Item = ({ id, city, city2, city3, img, img2, img3 }) => {
    return (
        <>
            <div className="card" >
                <Carousel style={{ zIndex: 0 }}>
                    <Carousel.Item>
                        <img src={img} className="img-cart" alt={city} />
                        <Carousel.Caption>
                            <Link to={`/item/${id}`} className="card-title"> <h2> {city}</h2> </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} className="img-cart" alt={city2} />
                        <Carousel.Caption>
                            <Link to={`/item/${id}`} className="card-title"> <h2 > {city2}</h2> </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} className="img-cart" alt={city3} />
                        <Carousel.Caption>
                            <Link to={`/item/${id}`} className="card-title"> <h2> {city3}</h2> </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Item