// Clase 8 - 30' Creamos nuestros propios hooks para reutilizar. Por ejemplo el contador:
import { useState } from "react";

export const useContador = (valorInicial, stock) => {
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > valorInicial) {
            setContador(contador - 1);
        }
    }

    return {contador, incrementar, decrementar}
}