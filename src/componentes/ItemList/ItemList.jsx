import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className="contenedorProductos">
        {productos.map(prod => <Item key={productos.id} {...prod} />)}
    </div>
  )
}

export default ItemList