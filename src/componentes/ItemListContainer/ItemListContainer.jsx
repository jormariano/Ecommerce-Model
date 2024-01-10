import { useState, useEffect } from "react";
// import { getProductos, getProductosCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

// collection es para vincular una coleccion de Firestone, ej: productos
// getDocs trae todos los documentos de una Coleccion
// query es para hacer consulta a la base de datos
// where es para hacer un filtrado en la consulta

import { db } from "../../services/config";

const ItemListContainer = (props) => {

  const imgTitle = './img/img-title.png'

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
    <>
      <div className="img-title">
        <ItemList productos={productos} />
      </div>
    </>
  )
}

export default ItemListContainer