import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import ProfilePic from '../assets/profile-pic-noback.webp'
import Tabs from '../components/tabs'
import { experience, education } from '../assets/data.json'

const AboutMe = () => {
  const navigate = useNavigate()
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
    <div
      id="glassCard"
      className="flex justify-start flex-col items-center fade-in-animation"
    >
      <h1 className="mt-10 text-3xl font-medium mb-10 md:hidden">
        {t('TITLE')}
      </h1>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex flex-[0.5] justify-start items-center flex-col">
          <div className="glassCard rounded-full h-max xs:max-w-[60%] md:mt-[110px] sm:max-w-[50%] md:max-w-[70%] ">
            <img src={ProfilePic} className="rounded-full" />
          </div>
          <div className="text-sm font-medium mt-7 inline-flex flex-wrap gap-2 justify-center">
            <button className="glassButton py-2 px-5 max-w-[80%]" onClick={onButtonClick}>
              {t('DOWNLOAD_CV')}
            </button>
            <button className="glassButton py-2 px-5  max-w-[80%]">
              {t('CONTACT_ME')}
            </button>
          </div>
        </div>
        <div className="flex-1 px-5 pt-5 md:pt-0 text-xs">
          <h1 className="mt-10 text-3xl font-medium mb-10 hidden md:block">
            {t('TITLE')}
          </h1>
          <p className="text-sm font-light">{t('DESCRIPTION_1')}</p>
          <div className="pt-5">
            <Tabs experience={experience} education={education} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
