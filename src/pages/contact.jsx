import { useTranslation } from 'react-i18next'

import data from '../../data.json'

const Contact = () => {
  const { t } = useTranslation('CONTACT')
  return (
    <div
      id="contact"
      className="flex flex-col h-[70vh] px-8 py-6 md:px-16 md:py-10"
    >
      <p className="mt-10 text-3xl font-medium pb-20">{t('TITLE')}</p>
      <div className="flex flex-row flex-wrap gap-x-40 gap-y-20">
        <div className="flex flex-1 flex-col gap-y-4">
          <p className="text-lg opacity-60 whitespace-pre">{t('EMAIL_TEXT')}</p>
          <p className="text-lg md:text-2xl whitespace-pre">
            gonzalodedomingo@gmail.com
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-y-4">
          <p className="text-lg opacity-60 whitespace-pre">
            {t('SOCIAL_NETWORKS_TEXT')}
          </p>
          <a
            className="text-2xl whitespace-pre"
            href={data?.linkedin}
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-2xl whitespace-pre"
            href={data?.github}
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
