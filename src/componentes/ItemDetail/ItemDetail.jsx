import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <>
      <div className='unProducto'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad, quaerat officia non eveniet iure provident possimus similique aspernatur molestias quia dolorem eligendi at? Eos illum cupiditate cum et corrupti.</p>
        <img src={img} alt={nombre} />
      </div>
    </>
  )
}

export default ItemDetail