import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import haptic from '../utils/vibrate'
import toTop from '../utils/toTop'

const useChangeTitle = () => {
  const { t } = useTranslation('HEADER')

  useState(() => {
    window?.addEventListener(
      'blur',
      () => (document.title = t('THANKS_VISITE_TEXT'))
    )

    window?.addEventListener('focus', () => (document.title = t('WEB_TITLE')))
  }, [])
}

export default () => {
  const { t } = useTranslation('HEADER')
  useChangeTitle()

  const moveToTop = () => {
    haptic()
    toTop()
  }

  return (
    <header id="header" className="sticky top-0 left-0 z-10">
      <div className="flex items-center justify-around sm:justify-between flex-nowrap px-8 py-6 md:px-16 md:py-10 bg-background-color text-lg md:text-xl font-medium">
        <div className="flex-initial justify-start">
          <img
            src="https://res.cloudinary.com/ds30qs4yx/image/fetch/w_144,h_144,c_fill,f_auto/https://gdd-portfolio.web.app/assets/profile-pic-62d12921.png"
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
