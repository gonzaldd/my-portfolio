import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation('HOME')

  return (
    <section
      id="home"
      className="flex flex-1 items-center h-[100vh] md:h-[90vh]"
    >
      <div className="flex flex-1 flex-col px-16 py-20">
        <p className="sm:text-2xl font-light mb-2">{t('GREETING')}</p>
        <p className="text-5xl sm:text-6xl lg:text-7xl font-medium">
          {t('MY_NAME')}
        </p>
        <p className="sm:text-2xl font-light mt-2">{t('ROLE')}</p>
      </div>
    </section>
  )
}

export default Home
