import { useState, useEffect } from "react";
// import { getProductos, getProductosCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";
import { useTranslation } from 'react-i18next'
// collection es para vincular una coleccion de Firestone, ej: productos
// getDocs trae todos los documentos de una Coleccion
// query es para hacer consulta a la base de datos
// where es para hacer un filtrado en la consulta

const ItemListContainer = (props) => {

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
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer