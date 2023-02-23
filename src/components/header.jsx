import ProfilePic from '../assets/profile-pic.png'
import { useTranslation } from 'react-i18next'

import haptic from '../utils/vibrate'

export default () => {
  const { t, i18n } = useTranslation('HEADER')

  const moveToTop = () => {
    haptic()
    window?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header id="header" className="sticky top-0 left-0 z-10">
      <div className="flex items-center justify-around sm:justify-between flex-nowrap px-8 py-6 md:px-16 md:py-10 bg-background-color text-lg md:text-xl font-medium">
        <div className="flex-initial justify-start">
          <img
            src={ProfilePic}
            className="rounded-full h-[7vh] w-[7vh] cursor-pointer"
            onClick={moveToTop}
          />
        </div>
        <div className="flex flex-1 justify-end gap-5">
          <a
            className="cursor-pointer fade-out-transition-hover"
            href="#about-me"
          >
            {t('ABOUT_TITLE')}
          </a>
          {/* <a
            className="cursor-pointer fade-out-transition-hover"
            href="#portfolio"
          >
            {t('PORTFOLIO_TITLE')}
          </a> */}
          <a
            className="cursor-pointer fade-out-transition-hover"
            href="#contact"
          >
            {t('CONTACT_TITLE')}
          </a>
        </div>
      </div>
    </header>
  )
}
