import { useState, createContext } from 'react';

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalAmount: 0
});

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    
    const addProduct = (item, quantity) => {
        const existentProduct = cart.find(prod => prod.item.id === item.id);

        if (!existentProduct) {
            setCart(prev => [...prev, { item, quantity }]);
            setTotalAmount(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
            
        } else {
            const updateCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                } else {
                    return prod;
                }
            });
            setCart(updateCart);
            setTotalAmount(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }
    }


    const removeProduct = (id) => {
        const itemRemoved = cart.find(prod => prod.item.id === id);
        const updateCart = cart.filter(prod => prod.item.id !== id);

        setCart(updateCart);
        setTotalAmount(prev => prev - itemRemoved.quantity);
        setTotal(prev => prev - (itemRemoved.item.price * itemRemoved.quantity));
    }


    const emptyCart = () => {
        setCart([]);
        setTotalAmount(0);
        setTotal(0);
    }

    return (
        <>
        <CartContext.Provider value={{cart, total, totalAmount, addProduct, removeProduct, emptyCart}}> {children} </CartContext.Provider>
        </>
    )
}