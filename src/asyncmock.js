// Simulamos una base de datos

const misProductos = [
    { id: "1", nombre: "Grecia ", precio: 50, img: "../img/grecia-1.jpg", idCat: "1" },
    { id: "2", nombre: "Tailandia ", precio: 50, img: "../img/tailandia-1.jpg", idCat: "2" },
    { id: "3", nombre: "Mexico ", precio: 50, img: "../img/mexico-1.jpg", idCat: "3" },
    { id: "4", nombre: "España ", precio: 50, img: "../img/espania-1.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}

// Funcion igual a la anterior, pero que retorna un solo item

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto)
        }, 2000)
    })
}

// Funcion que retorna un array de una determinada categoria de producto

export const getProductosCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategorias = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategorias);
        }, 100)
    })
}