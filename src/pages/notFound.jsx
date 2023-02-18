import { useRouteError, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()
  const { t } = useTranslation('404')

  const handleGoHome = () => navigate('/')

  return (
    <div
      id="glassCard"
      className="flex flex-col justify-center items-center fade-in-animation"
    >
      <h1 className="text-8xl">{error.status} </h1>
      <h1 className="font-medium">{t('GENERIC_ERROR')}</h1>
      <p className="font-medium">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="pt-10">
        <button onClick={handleGoHome} className="glassButton px-10 py-2">
          {t('GO_TO_HOME')}
        </button>
      </div>
    </div>
  )
}
