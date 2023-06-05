import { useTranslation } from 'react-i18next'

function Home(): JSX.Element {
  const { t } = useTranslation('HOME')

  return (
    <section
      id="home"
      className="flex flex-1 items-center h-[100vh] md:h-[90vh] px-8 py-6 md:px-16 md:py-10"
    >
      <div className="flex flex-1 flex-col">
        <p className="sm:text-2xl font-light mb-2">{t('GREETING')}</p>
        <p className="text-5xl sm:text-6xl lg:text-7xl font-medium">
          {t('MY_NAME')}
        </p>
        <p className="sm:text-2xl font-light mt-2 text-highlight-color">
          {t('ROLE')}
        </p>
      </div>
    </section>
  )
}

export default Home
