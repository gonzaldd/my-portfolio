import { useTranslation } from 'react-i18next'

import toTop from '../utils/toTop'
import parseLng from '../utils/parse-lng'

const languages = {
  en: 'English',
  es: 'Español',
}

const Footer = () => {
  const { i18n } = useTranslation('FOOTER')

  const changeLanguage = (lng: string) => {
    try {
      if (i18n.language !== lng) toTop()

      i18n.changeLanguage(lng)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <footer
      id="footer"
      className="flex justify-center items-center gap-10 h-[80px] mt-16"
    >
      {Object.keys(languages).map((key: string, i) => (
        <div key={`${key}-${i}`} onClick={() => changeLanguage(key)}>
          <p
            className={`${
              parseLng(i18n.language) === key
                ? 'underline underline-offset-2'
                : ''
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
