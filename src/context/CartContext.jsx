import { useEffect, useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalAmount: 0
})


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        // Recuperar el estado del carrito desde localStorage al cargar el componente
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const storedTotalAmount = parseInt(localStorage.getItem("totalAmount"), 10) || 0;
        const storedTotal = parseInt(localStorage.getItem("total"), 10) || 0;
    
        setCart(storedCart);
        setTotalAmount(storedTotalAmount);
        setTotal(storedTotal);
      }, []);
    
      useEffect(() => {
        // Almacenar el estado del carrito en localStorage cada vez que cambie
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("totalAmount", totalAmount.toString());
        localStorage.setItem("total", total.toString());
      }, [cart, totalAmount, total]);

    const addProducts = (item, quantity) => {

        const existentProduct = cart.find(prod => prod.item.id === item.id)

        if (!existentProduct) {
            setCart(prev => [...prev, { item, quantity }])
            setTotalAmount(prev => prev + quantity)
            setTotal(prev => prev + (item.price * quantity))

        } else {

            const cartUpdate = cart.map(prod => {

                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }

                } else {
                    return prod
                }
            })

            setCart(cartUpdate)
            setTotalAmount(prev => prev + quantity)
            setTotal(prev => prev + (item.price * quantity))
        }
    }

    const removeProduct = (id) => {
        const productRemove = cart.find(prod => prod.item.id === id);
        const cartUpdate = cart.filter(prod => prod.item.id !== id);

        setCart(cartUpdate);
        setTotalAmount(prev => prev - productRemove.quantity);
        setTotal(prev => prev - (productRemove.item.precio * productRemove.quantity));
    }


    const emptyCart = () => {
        setCart([]);
        setTotalAmount(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, addProducts, removeProduct, emptyCart, total, totalAmount }}>
            {children}
        </CartContext.Provider>
    )
}
