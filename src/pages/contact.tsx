import { useTranslation } from 'react-i18next'

import data from '../../data.json'

const Contact = (): JSX.Element => {
  const { t } = useTranslation('CONTACT')

  return (
    <section
      id="contact"
      className="flex flex-col h-[70vh] px-8 py-6 md:px-16 md:py-10"
    >
      <p className="mt-10 text-3xl font-medium pb-10">{t('TITLE')}</p>
      <div className="flex flex-1 flex-col xl:mt-20 gap-y-10 gap-x-10">
        <div className="flex flex-initial flex-col gap-y-3 max-h-[40%]">
          <p className="text-lg opacity-60 whitespace-pre">
            {t('SOCIAL_NETWORKS_TEXT')}
          </p>
          <a
            className="text-lg md:text-2xl whitespace-pre underline underline-offset-3"
            href={data?.linkedin}
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-lg md:text-2xl whitespace-pre underline underline-offset-3"
            href={data?.github}
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="flex-1 flex-col gap-y-4">
          <p className="text-lg opacity-60 whitespace-pre">{t('EMAIL_TEXT')}</p>
          <a
            href={`mailto:${data?.email}`}
            className="text-lg md:text-2xl whitespace-pre underline underline-offset-3"
          >
            {data?.email}
          </a>
        </div>
        <div className="flex-1 flex-col gap-y-4">
          <p className="text-lg opacity-60 whitespace-pre">
            {t('LOCALIZATION_TEXT')}
          </p>
          <p className="text-lg md:text-2xl whitespace-pre">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
