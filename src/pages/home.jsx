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
      <div id="glassCard" className="flex flex-col-reverse md:flex-row">
        <section className="flex flex-1 md:items-start justify-center flex-col px-5 md:px-10 self-center">
          <h1 className="font-light mb-2">{t('GREETING')}</h1>
          <h1 className="text-4xl font-medium ">{t('MY_NAME')}</h1>
          <h1 className="font-light mt-2">{t('ROLE')}</h1>
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
        <section className="flex flex-1 justify-center items-center">
          <img className="rounded-full profilePic" src={ProfilePic} />
        </section>
      </div>
    </>
  )
}

export default Home
