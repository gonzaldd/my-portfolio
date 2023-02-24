import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'

import translations from './translations/translations.json'

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      ...translations,
    },
    fallbackLng: ['en', 'es'],

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })

export default i18n
