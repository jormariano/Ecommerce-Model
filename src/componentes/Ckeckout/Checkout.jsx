import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cellphone, setCellphone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { cart, emptyCart, total, totalAmount } = useContext(CartContext);

    const handlerForm = (event) => {

        event.preventDefault();

        // Function and validations:

        if (!firstName || !lastName || !cellphone || !email || !emailConfirmation) {
            setError("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfirmation) {
            setError("Los Email no coinciden, vuelva a intentarlo");
            return;
        }

        // Purchase order:

        const orden = {
            items: cart.map(product => ({
                id: product.item.id,
                city: product.item.city,
                quantity: product.quantity
            })),
            total: total,
            date: new Date(),
            firstName,
            lastName,
            cellphone,
            email
        };

       

        Promise.all(

            orden.items.map(async (productOrden) => {
                const productRef = doc(db, "productos", productOrden.id);

                const productDoc = await getDoc(productRef);

                const currentStock = productDoc.data().stock;

                await updateDoc(productRef, {
                    stock: currentStock - productOrden.quantity,
                })
            })
        )

            .then(() => {

                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        emptyCart();
                    })
                    .catch((error) => {
                        setError("Error al intentar crear la orden, hazlo de nuevo");
                    });
            })
            .catch((error) => {
                setError("No se puede actualizar el stock, intente mas tarde");
            })
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form onSubmit={handlerForm}>
                {
                    cart.map(product => (
                        <div key={product.item.id}>
                            <p>{product.item.city} x {product.quantity}</p>
                            <p> {product.item.price} </p>

                            <hr />
                        </div>
                    ))
                }
                <strong>Cantidad total: {totalAmount}</strong>
                <hr />

                <div className="form-group">
                    <label htmlFor="firstName" >Nombre</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <label htmlFor="lastName" >Apellido</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <label htmlFor="cellphone">Telefono</label>
                    <input type="text" id="cellphone" value={cellphone} onChange={(e) => setCellphone(e.target.value)} />

                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="emailConfirmation" >Email Confirmacion</label>
                    <input type="email" id="emailConfirmation" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />

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