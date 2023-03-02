import { useTranslation, Trans } from 'react-i18next'

import BasicData from '../components/basicData'
import { experience, education, resumeLink } from '../../data.json'

const AboutMe = () => {
  const { t } = useTranslation('ABOUT_ME')

  return (
    <section
      id="about-me"
      className="flex flex-col pb-0 px-8 py-6 md:px-16 md:py-10 mb-12"
    >
      <div className="flex flex-col md:flex-row flex-wrap gap-x-40">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-3xl whitespace-pre">{t('TITLE')}</p>
        </div>
        <div className="flex-1 mb-12">
          <p>
            <Trans
              defaults={t('DESCRIPTION')}
              components={[
                <span className="text-base font-light opacity-60 break-words"></span>,
                <span className="text-highlight-color opacity-90"></span>,
                <span className="text-base font-light opacity-60 break-words"></span>,
              ]}
            ></Trans>
          </p>
          <br />
          <p>
            <Trans
              defaults={t('DESCRIPTION_2')}
              components={[
                <span className="text-base font-light opacity-60 break-words"></span>,
                <span className="text-highlight-color opacity-90"></span>,
                <span className="text-base font-light opacity-60 break-words"></span>,
              ]}
            ></Trans>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-x-40 mt-10">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-3xl whitespace-pre">{t('EXPERIENCE_TITLE')}</p>
        </div>
        <div className="flex-1 mb-12">
          <BasicData data={experience} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-x-40 mt-10">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-3xl whitespace-pre">{t('EDUCATION_TITLE')}</p>
        </div>
        <div className="flex-1">
          <BasicData data={education} />
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <a
          className="bg-secondary-color text-primary-color p-5 rounded-sm scale-hover-transition font-semibold"
          href={resumeLink}
          target="_blank"
        >
          {t('DOWNLOAD_CV')}
        </a>
      </div>
    </section>
  )
}

export default AboutMe
