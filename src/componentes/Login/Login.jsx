// Clase 12 - 1h 7'

import './Login.css'
import { useState } from "react"

const Login = () => {
    const [verificado, setVerificado] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');

    const habilitarUsuario = (e) => {
        e.preventDefault();

        if (usuario === "jorgelina" && pass === "654321") {
            setVerificado(true);
        } else {
            setUsuario("Intente de nuevo");
            setPass("Intete DE NUEVO");
        }
    }

    const cerrarSesion = () => {
        setVerificado(false);
    }

    return (
        <div>
            {verificado ? (<button onClick={cerrarSesion}> Cerrar sesion </button >) : (

                <form onSubmit={habilitarUsuario} className="loginUser">

                    <label htmlFor="usuario">Usuario: </label>
                    <input type="text" id="usuario" onChange={(e) => setUsuario(e.target.value)} value={usuario} />

                    <label htmlFor="pass">Contraseña: </label>
                    <input type="text" id="pass" onChange={(e) => setPass(e.target.value)} value={pass} />

                    <button> Iniciar sesión </button>

                </form>
            )
            }
        </div>
    )
}

export default Login