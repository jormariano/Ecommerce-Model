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
            setUsuario("Inteta de nuevo");
            setPass("Inteta DE NUEVO");
        }
    }

    const cerrarSesion = () => {
        setVerificado(false);
    }

    return (
        <div>
            {verificado ? (<button onClick={cerrarSesion} className="loginUser closeBtn"> Cerrar sesion </button >) : (

                <form onSubmit={habilitarUsuario} className="loginUser">

                    <label htmlFor="usuario">Usuario: </label>
                    <input type="text" id="usuario" onChange={(e) => setUsuario(e.target.value)} value={usuario} />

                    <label htmlFor="pass">Contraseña: </label>
                    <input type="text" id="pass" onChange={(e) => setPass(e.target.value)} value={pass} />

                    <button> Iniciar sesión </button>

                    {usuario === 'Inteta de nuevo' && pass === 'Inteta DE NUEVO' && <div className="error">Usuario o contraseña incorrectos</div>}

                </form>
            )
            }
        </div>
    )
}

export default Login