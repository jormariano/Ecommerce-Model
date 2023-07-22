// CLASE 11 - 1h 5' HOOK USECONTEXT

import { useState, createContext } from 'react';

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    // Ver carrito provisoriamente

    console.log(carrito);
    
    // Funcion para agregar producto y que no se duplique
    
    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
            // Se utiliza para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto que representa el nuevo producto.
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }

    // Funcion para eliminar producto

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    // Funcion para vaciar el carrito

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <>
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}> {children} </CarritoContext.Provider>
        </>
    )
    // Utilizamos la propiedad especial de children para todos aquellos componentes que puedan necesitar el carrito y sus metodos
}