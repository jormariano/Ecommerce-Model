// Clase 14: Firebase II - 1h

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
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

        // 2- Guardamos la orden en la base de datos

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden de compra", error);
                setError("Se produjo un error al crear la orden de compra");
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