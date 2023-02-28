import { useTranslation } from 'react-i18next'

import BasicData from '../components/basicData'
import { experience, education } from '../../data.json'

const AboutMe = () => {
  const { t } = useTranslation('ABOUT_ME')

  const onButtonClick = async () => {
    //Save pdf in /public
    const response = await fetch('Gonzalo-De-Domingo-CV.pdf')
    const blob = await response.blob()
    const fileURL = window.URL.createObjectURL(blob)
    let alink = document.createElement('a')
    alink.href = fileURL
    alink.download = 'Gonzalo-De-Domingo.pdf'
    alink.click()
  }

  return (
    <section
      id="about-me"
      className="flex flex-col pb-48 px-8 py-6 md:px-16 md:py-10"
    >
      <div className="flex flex-col md:flex-row flex-wrap gap-x-40">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-3xl whitespace-pre">{t('TITLE')}</p>
        </div>
        <div className="flex-1">
          <p>
            <span className="text-base font-light opacity-60 break-words">
              {t('DESCRIPTION_1_A')}
            </span>
            <span className="text-highlight-color opacity-90">
              {t('DESCRIPTION_1_B')}
            </span>
            <span className="opacity-60">{t('DESCRIPTION_1_C')}</span>
          </p>
          <br />
          <p className="text-base font-light opacity-60 break-words">
            {t('DESCRIPTION_2')}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-x-40 mt-10">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-3xl whitespace-pre">{t('EXPERIENCE_TITLE')}</p>
        </div>
        <div className="flex-1">
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
        <button className="bg-secondary-color text-primary-color p-5 rounded-sm fade-out-transition-hover font-semibold">
          {t('DOWNLOAD_CV')}
        </button>
      </div>
    </section>
  )
}

export default AboutMe
