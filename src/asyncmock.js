// Simulamos una base de datos

const misProductos = [
    { id: 1, nombre: "Alemania ", precio: 50, img: "" },
    { id: 2, nombre: "Tailandia ", precio: 50, img: "" },
    { id: 3, nombre: "Francia ", precio: 50, img: "" },
    { id: 4, nombre: "Espania ", precio: 50, img: "" },
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
}