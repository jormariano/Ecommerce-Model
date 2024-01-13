import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";

const ItemsContainer = (props) => {

  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error));

  }, [idCategoria])

  return (
    <main >
      {productos.map(producto => (
        <section key={producto.id} className="gallery-container">
           <div className="gallery-img img-5">
            <Link to={`/item/${producto.id}`} className="card-title">
              <img src={producto.img5} alt={producto.nombre2} />
            </Link>
          </div>
          <div className="gallery-img img-1">
            <Link to={`/item/${producto.id}`} >
              <img src={producto.img} alt={producto.nombre} />
            </Link>
          </div>
          <div className="gallery-img img-2">
            <Link to={`/item/${producto.id}`} className="card-title">
              <img src={producto.img4} alt={producto.nombre2} />
            </Link>
          </div>
          <div className="gallery-img img-3">
            <Link to={`/item/${producto.id}`} className="card-title">
              <img src={producto.img2} alt={producto.nombre2} />
            </Link>
          </div>
          <div className="gallery-img img-6">
            <Link to={`/item/${producto.id}`} className="card-title">
              <img src={producto.img6} alt={producto.nombre2} />
            </Link>
          </div>
          <div className="gallery-img img-4">
            <Link to={`/item/${producto.id}`} className="card-title">
              <img src={producto.img3} alt={producto.nombre2} />
            </Link>
          </div>
        </section>
      ))}
    </main>
  )
}

export default ItemsContainer