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
    <div>
      {productos.map(producto => (
        <div key={producto.id}>
          <img src={producto.img} alt={producto.nombre} />
          <Link to={`/item/${producto.id}`} className="card-title"><p>{producto.nombre}</p></Link>
          {/* Agrega más información del producto según tus necesidades */}
        </div>
      ))}
    </div>
  )
}

export default ItemsContainer