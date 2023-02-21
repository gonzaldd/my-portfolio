import { useTranslation } from 'react-i18next'

import Header from '../components/header'
import ProfilePic from '../assets/profile-pic-noback.webp'

function Home() {
  const { t } = useTranslation('HOME')

  return (
    <>
      <section id="home" className='flex flex-1 items-center min-h-[80%]'>
        <div className='flex flex-1 flex-col px-16 py-20'>
          <p className="sm:text-2xl font-light mb-2">{t('GREETING')}</p>
          <p className="text-4xl sm:text-6xl lg:text-7xl font-medium">
            {t('MY_NAME')}
          </p>
          <p className="sm:text-2xl font-light mt-2">{t('ROLE')}</p>
        </div>
      </section>
      <section id="home" className='flex flex-1 items-center'>
        <div className='flex flex-1 flex-col px-16 py-20'>
          <p className="sm:text-2xl font-light mb-2">{t('GREETING')}</p>
          <p className="text-4xl sm:text-6xl lg:text-7xl font-medium">
            {t('MY_NAME')}
          </p>
          <p className="sm:text-2xl font-light mt-2">{t('ROLE')}</p>
        </div>
      </section>
    </>
  )
}

export default Home
