import { useState } from "react"
import { useTranslation } from 'react-i18next'

const Login = () => {

    const { t } = useTranslation(['global'])

    const [check, setCheck] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const verifiedUser = (e) => {
        e.preventDefault();

        if (user === "jorgelina" && pass === "654321") {
            setCheck(true);
        } else {
            setUser("Usuario incorrecta");
            setPass("Contrasenia incorrecta");
        }
    }

    const signOff = () => {
        setCheck(false);
    }

    return (
        <div>
            {check ? (<button onClick={signOff} className="closeBtn"> Cerrar sesion </button >) : (

                <form onSubmit={verifiedUser} className="loginUser">

                    <label htmlFor="user"> {t('login.user')} </label>
                    <input type="text" id="user" onChange={(e) => setUser(e.target.value)} value={user} />

                    <label htmlFor="pass">{t('login.password')} </label>
                    <input type="text" id="pass" onChange={(e) => setPass(e.target.value)} value={pass} />

                    <button> {t('login.login')} </button>

                    {user === 'Inteta de nuevo' && pass === 'Inteta DE NUEVO' && <div className="error">Usuario o contraseña incorrectos</div>}

                </form>
            )
            }
        </div>
    )
}

export default Login