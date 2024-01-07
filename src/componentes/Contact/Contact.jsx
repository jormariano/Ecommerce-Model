import './Contact.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com'

const Contact = () => {

    const { t } = useTranslation(['global'])

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendQuery = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: fullName,
            from_email: email,
            message: message
        };

        emailjs.send(
            "service_gqk722n",
            "template_tshjpb7",
            templateParams,
            "E4zHwwYn3G-EMcNrP"
        )
            .then(() => {
                alert(t('contactme.querysent'))
            })
            .catch(() => {
                alert(t('contactme.error'))
            })

        setFullName("");
        setEmail("");
        setMessage("");
    }


    return (
        <section>
            <div>
                <h2>Info de contacto</h2>
                <div>
                    <h3>Redes sociales</h3>
                    <br />
                    <h3>Mail</h3>
                </div>
            </div>
            <div>
                <h2>Formulario de contacto</h2>
                <form>
                    <h3></h3>

                    <input type="text" placeholder={t('contactme.fullname')} id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}></input>

                    <input type="email" placeholder={t('contactme.email')} id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <textarea placeholder={t('contactme.message')} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                    <button type="submit" className='contact-form-button'> {t('contactme.query')} </button>

                    <p className='contact-form-p'> {t('contactme.obligatory')} </p>
                </form>
            </div>
        </section>
    )
}

export default Contact