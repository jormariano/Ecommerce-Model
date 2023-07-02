// Simulamos una base de datos

const misProductos = [
    { id: 1, nombre: "Grecia ", precio: 50, img: "./img/grecia1.jpg" },
    { id: 2, nombre: "Tailandia ", precio: 50, img: "./img/tailandia1.jpg" },
    { id: 3, nombre: "Mexico ", precio: 50, img: "./img/mexico1.JPG" },
    { id: 4, nombre: "España ", precio: 50, img: "./img/espania1.JPG" },
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
}