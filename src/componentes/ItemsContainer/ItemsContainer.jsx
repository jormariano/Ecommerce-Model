import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";

const ItemsContainer = (props) => {

  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const myProducts = idCategory ? query(collection(db, "productos"), where("idCat", "==", idCategory))
      : collection(db, "productos");

    getDocs(myProducts)
      .then(res => {
        const newProducts = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(newProducts);
      })
      .catch(error => console.log(error));

  }, [idCategory])

  return (
    <main >
      {products.map(product => (
        <section key={product.id} className="gallery-container">
           <div className="gallery-img img-5">
            <Link to={`/item/${product.id}`} className="card-title">
              <img src={product.img5} alt={product.city2} />
            </Link>
          </div>
          <div className="gallery-img img-1">
            <Link to={`/item/${product.id}`} >
              <img src={product.img} alt={product.city} />
            </Link>
          </div>
          <div className="gallery-img img-2">
            <Link to={`/item/${product.id}`} className="card-title">
              <img src={product.img4} alt={product.city2} />
            </Link>
          </div>
          <div className="gallery-img img-3">
            <Link to={`/item/${product.id}`} className="card-title">
              <img src={product.img2} alt={product.city2} />
            </Link>
          </div>
          <div className="gallery-img img-6">
            <Link to={`/item/${product.id}`} className="card-title">
              <img src={product.img6} alt={product.city2} />
            </Link>
          </div>
          <div className="gallery-img img-4">
            <Link to={`/item/${product.id}`} className="card-title">
              <img src={product.img3} alt={product.city2} />
            </Link>
          </div>
        </section>
      ))}
    </main>
  )
}

export default ItemsContainer