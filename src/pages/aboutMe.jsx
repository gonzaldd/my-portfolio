import { useTranslation } from 'react-i18next'

import ProfilePic from '../assets/profile-pic-noback.png'
import Tabs from '../components/tabs'
import { skills, experience, education } from '../assets/data.json'

const AboutMe = () => {
  const { t } = useTranslation('ABOUT_ME')

  return (
    <div
      id="glassCard"
      className="flex justify-start flex-col items-center fade-in-animation"
    >
      <h1 className="mt-10 text-3xl font-medium mb-10 md:hidden">
        {t('TITLE')}
      </h1>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex flex-[0.5] justify-center">
          <div className="glassCard rounded-full h-max md:mt-[110px] xs:max-w-[60%] sm:max-w-[50%] md:max-w-[70%] ">
            <img src={ProfilePic} className="rounded-full" />
          </div>
        </div>
        <div className="flex-1 px-5 pt-5 md:pt-0 text-xs">
          <h1 className="mt-10 text-3xl font-medium mb-10 hidden md:block">
            {t('TITLE')}
          </h1>
          <p className="font-light">{t('DESCRIPTION_1')}</p>
          <p className="font-light">{t('DESCRIPTION_2')}</p>
          <div className="mt-5">
            <p className="font-normal text-base mb-4">Skills</p>
            {skills.map((skill, i) => (
              <button
                key={`${skill}${i}`}
                className="glassButton py-1 px-3 mr-2 mb-2 font-light text-xs text-custom-color-1"
              >
                {skill}
              </button>
            ))}
          </div>
          <div className="pt-5">
            <Tabs experience={experience} education={education} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
