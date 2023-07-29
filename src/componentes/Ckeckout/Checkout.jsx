// Clase 14: Firebase II - 1h
// Clase 15: Workshop final - 8' descuenta stock

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const handlerFormulario = (event) => {

        event.preventDefault();

        // Funciones y validaciones:

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los Email no coinciden, vuelva a intentarlo");
            return;
        }

        // 1- Creamos un objeto con todos los datos de la orden de compra:

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        // Promise.all() ejecutar varias promesas en paralelo: actualizar el stock de productos y generar una orden de compra

        Promise.all(

            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                // por cada producto en la coleccion productos obtengo una referencia y a partir de esa referencia obtengo el documento

                const productoDoc = await getDoc(productoRef);

                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )

            .then(() => {
                // Guardamos la orden en la base de datos 
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al intentar crear la orden, hazlo de nuevo");
                    });
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock", error);
                setError("No se puede actualizar el stock, intente mas tarde");
            })
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form onSubmit={handlerFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p> {producto.item.precio} </p>

                            <hr />
                        </div>
                    ))
                }
                <strong>Cantidad total: {cantidadTotal}</strong>
                <hr />
                
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="">Email Confirmacion</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

                    {
                        error && <p style={{ color: "red" }}>{error}</p>
                    }

                    <button type="submit">Finalizar Compra</button>

                </div>
            </form>
            {
                ordenId && (
                    <strong>Gracias por tu compra! Tu numero de pedido es {ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout