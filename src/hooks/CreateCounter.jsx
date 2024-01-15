import { useCounter } from "./useCounter"

const CreateCounter = () => {
    const {counter, increase, decrease} = useCounter(1, 20);

  return (
    <div>
        <h2>Use Contador</h2>
        <button onClick={increase}>Sumar</button>
        <strong>{counter}</strong>
        <button onClick={decrease}>Restar</button>
    </div>
  )
}

export default CreateCounter