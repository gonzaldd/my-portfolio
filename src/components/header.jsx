import ProfilePic from '../assets/profile-pic.png'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t, i18n } = useTranslation('HEADER')
  const moveToTop = () => window?.scrollTo({ top: 0, behavior: 'smooth' })

  const changeLanguage = () =>
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

  return (
    <header id="header" className="sticky top-0 z-10">
      <div className="flex items-center justify-between flex-nowrap px-8 py-6 md:px-16 md:py-10 bg-background-color text-lg md:text-xl font-medium">
        <img
          src={ProfilePic}
          className="rounded-full h-[7vh] w-[7vh] cursor-pointer"
          onClick={moveToTop}
        />
        <div className="flex gap-5">
          <a
            className="cursor-pointer fade-out-transition-hover"
            href="#about-me"
          >
            {t('ABOUT_TITLE')}
          </a>
          <a
            className="cursor-pointer fade-out-transition-hover"
            href="#portfolio"
          >
            {t('PORTFOLIO_TITLE')}
          </a>
          <a
            className="cursor-pointer fade-out-transition-hover"
            href="#contact"
          >
            {t('CONTACT_TITLE')}
          </a>
          {/* <a onClick={changeLanguage}>{i18n.language}</a> */}
        </div>
      </div>
    </header>
  )
}
