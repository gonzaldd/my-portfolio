import { useTranslation } from 'react-i18next'

import BasicData from '../components/basicData'
import { experience, education } from '../assets/data.json'

const AboutMe = () => {
  const { t } = useTranslation('ABOUT_ME')

  const onButtonClick = async () => {
    //Save pdf in /public
    const response = await fetch('Gonzalo-De-Domingo-CV.pdf')
    const blob = await response.blob()
    const fileURL = window.URL.createObjectURL(blob);
    let alink = document.createElement('a');
    alink.href = fileURL;
    alink.download = 'Gonzalo-De-Domingo.pdf';
    alink.click();
  }

  return (
    <section
      id="about-me"
      className="flex flex-col"
    >
      <div className="flex flex-col md:flex-row flex-wrap px-16 py-20 gap-x-40">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-2xl whitespace-pre">{t('TITLE')}</p>
        </div>
        <div className="flex-1">
          <p className="text-sm font-light opacity-60">{t('DESCRIPTION_1')}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap px-16 gap-x-40">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-2xl whitespace-pre">{t('EXPERIENCE_TITLE')}</p>
        </div>
        <div className="flex-1">
          <BasicData data={experience} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap py-16 px-16 gap-x-40">
        <div className="flex-initial mb-[5%] w-[10%]">
          <p className="text-2xl whitespace-pre">{t('EDUCATION_TITLE')}</p>
        </div>
        <div className="flex-1">
          <BasicData data={education} />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
