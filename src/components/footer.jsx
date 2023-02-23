import { useTranslation } from 'react-i18next'

const languages = {
  en: 'English',
  es: 'Español',
}

const Footer = () => {
  const { i18n } = useTranslation('FOOTER')

  const changeLanguage = () => {
    try {
      i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
      localStorage.setItem('lng', i18n.language)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <footer
      id="footer"
      className="flex justify-center items-center gap-10 h-[80px] mt-16"
      onClick={changeLanguage}
    >
      {Object.keys(languages).map((key, i) => (
        <div key={`${key}-${i}`}>
          <p
            className={`${
              i18n.language === key ? 'underline underline-offset-2' : ''
            } cursor-pointer fade-out-transition-hover`}
          >
            {languages[key]}
          </p>
        </div>
      ))}
    </footer>
  )
}

export default Footer
