import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import ProfilePic from '../assets/profile-pic.png'

function Home() {
  const navigate = useNavigate()
  const { t } = useTranslation('HOME')

  const handleAboutMe = () => navigate('/about-me')

  const handlePortfolio = () => navigate('/portfolio')

  return (
    <>
      <div
        id="glassCard"
        className="flex flex-col-reverse md:flex-row fade-in-animation"
      >
        <section className="flex flex-1 md:flex-[1.5] flex-col justify-center items-center">
          <p className="font-light mb-2">{t('GREETING')}</p>
          <p className="xs:text-3xl md:text-4xl font-medium whitespace-pre">
            {t('MY_NAME')}
          </p>
          <p className="font-light mt-2">{t('ROLE')}</p>
          <div className="flex text-sm font-medium space-x-4">
            <button
              className="glassButton py-2 px-5 mt-7"
              onClick={handleAboutMe}
            >
              {t('ABOUT_ME_BUTTON')}
            </button>
            <button
              className="glassButton py-2 px-5 mt-7"
              onClick={handlePortfolio}
            >
              {t('PORTFOLIO_BUTTON')}
            </button>
          </div>
        </section>
        <section className="flex flex-1 justify-center md:justify-start items-end md:items-center">
          <img className="rounded-full profilePic" src={ProfilePic} />
        </section>
      </div>
    </>
  )
}

export default Home
