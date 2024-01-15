import { colorStyles } from './StylesLanguages';
import { useTranslation } from 'react-i18next'
import Select from 'react-select';

const Languages = () => {

    const { i18n } = useTranslation(['global'])

    const handlerChangeLanguage = (selectedOption) => {

        const selectedLanguage = selectedOption.value;
        i18n.changeLanguage(selectedLanguage);

    }

    const languages = [
        { value: "en", label: 'ENGLISH' },
        { value: "es", label: 'ESPAÑOL' },
    ]

    return (
        <Select
            defaultValue={languages[0]}
            options={languages}
            onChange={handlerChangeLanguage}
            styles={colorStyles}
        />
    )

}

export default Languages