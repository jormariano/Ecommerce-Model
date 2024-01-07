import { colorStyles } from './StylesLanguages';
import { useTranslation } from 'react-i18next'
import Select from 'react-select';

const Languages = () => {

    const { i18n } = useTranslation(['global'])

    const handleChangeLanguage = (selectedOption) => {

        const selectedLanguage = selectedOption.value;
        i18n.changeLanguage(selectedLanguage);

    }

    const languages = [
        { value: "en", label: 'English' },
        { value: "es", label: 'Español' },
    ]

    return (
        <Select
            defaultValue={languages[0]}
            options={languages}
            onChange={handleChangeLanguage}
            styles={colorStyles}
        />
    )

}

export default Languages