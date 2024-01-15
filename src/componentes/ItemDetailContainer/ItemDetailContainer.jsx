import { useState, useEffect } from "react"
// import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const newDoc = doc(db, "productos", idItem)

        getDoc(newDoc)
            .then(res => {
                const data = res.data();
                const newProduct = { id: res.id, ...data }
                setProduct(newProduct);
            })
            .catch(error => console.log(error));

    }, [idItem]);

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer