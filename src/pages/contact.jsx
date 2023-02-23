import { useTranslation } from 'react-i18next'

import LinkedinIcon from '../assets/linkedin-icon.svg'
import GithubIcon from '../assets/github-icon.svg'

const Contact = () => {
  const { t } = useTranslation('CONTACT')
  return (
    <div id="contact" className="flex flex-col h-[90vh] px-16 py-20">
      <p className="mt-10 text-5xl font-medium pb-20">{t('TITLE')}</p>
      <div className="flex flex-col md:flex-row flex-wrap gap-x-40">
        <div className="flex-initial mb-[5%] w-[10%]">
          <div>
            <p className="text-lg opacity-60 whitespace-pre">
              {t('EMAIL_TEXT')}
            </p>
            <p className="text-2xl whitespace-pre">mail@mail.com</p>
          </div>
          <div className="my-28">
            <p className="text-lg opacity-60 whitespace-pre">
              {t('SOCIAL_NETWORKS_TEXT')}
            </p>
            <div className="flex">
              <img
                src={LinkedinIcon}
                className="w-[100%] mr-7 cursor-pointer"
              />
              <img src={GithubIcon} className="w-[80%] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-5xl">FORM</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
