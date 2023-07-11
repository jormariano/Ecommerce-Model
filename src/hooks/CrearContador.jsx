import { useContador } from "./useContador"

const CrearContador = () => {
    const {contador, incrementar, decrementar} = useContador(1, 20);

  return (
    <div>
        <h2>Use Contador</h2>
        <button onClick={incrementar}>Sumar</button>
        <strong>{contador}</strong>
        <button onClick={decrementar}>Restar</button>
    </div>
  )
}

export default CrearContador