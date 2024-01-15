import { useState } from "react";

export const useCounter = (valueInitial, stock) => {
    const [counter, setCounter] = useState(valueInitial);

    const increase = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrease = () => {
        if (counter > valorInicial) {
            setCounter(counter - 1);
        }
    }

    return {counter, increase, decrease}
}