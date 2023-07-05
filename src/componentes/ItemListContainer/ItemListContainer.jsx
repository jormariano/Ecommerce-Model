import { useState, useEffect } from "react";
import { getProductos, getProductosCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosCategoria : getProductos;

    funcion(idCategoria)
      .then(res => setProductos(res))
  }, [idCategoria])

  return (
    <>
      <h2> {props.title} </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer