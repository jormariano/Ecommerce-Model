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
    <main className="gallery-container">
      {products.map(product => (
        <div key={product.id} className="gallery-img">
          <Link to={`/item/${product.id}`} >
            <img src={product.img} alt={product.city} />
          </Link>
        </div>
      ))}
    </main>
  )
}

export default ItemsContainer