import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { portfolio as portfolioList } from '../../data.json'
import Chip from '../components/chip'

//import Picture from '../assets/portfolio-example.webp'

const Portfolio = () => {
  const [showProject, setShowProject] = useState(false)
  const { t } = useTranslation('PORTFOLIO')

  return (
    <div
      id="portfolio"
      className={`flex justify-start flex-col items-start md:h-[90vh] pt-20 py-16 px-16`}
    >
      {!showProject ? (
        <>
          <p className="text-5xl font-medium">{t('TITLE')}</p>
          <section className="flex justify-between my-10 flex-wrap">
            {portfolioList.map((portfolio, i) => {
              return (
                <div
                  onClick={() => setShowProject(portfolio)}
                  key={`${portfolio?.name}${i}`}
                  className="max-w-[100%] md:max-w-[30%] rounded-lg py-5 hover:opacity-70 hover:cursor-pointer h-fit"
                >
                  <p className="font-medium text-lg mt-2 whitespace-nowrap text-ellipsis overflow-hidden">
                    {portfolio?.title}
                  </p>
                  {/* <img className="rounded-lg" src={Picture} /> */}
                </div>
              )
            })}
          </section>
        </>
      ) : (
        <ProjectView {...showProject} close={() => setShowProject(false)} />
      )}
    </div>
  )
}

const ProjectView = ({
  img,
  title,
  description,
  created,
  techs,
  repo,
  close,
}) => {
  const { t } = useTranslation('PORTFOLIO')
  return (
    <section className="flex flex-col w-full items-center fade-in-animation">
      <div className="flex flex-col w-[100%] items-center">
        <div className="flex items-start flex-col md:w-[70%]">
          <img className="rounded-lg" src={img} />
          <p className="font-medium text-3xl my-4 whitespace-nowrap text-ellipsis overflow-hidden">
            {title}
          </p>
          <p className="font-light pb-3">{description}</p>
          {created && <p className="font-normal pb-2">Created: {created}</p>}
        </div>
        {/* {Array.isArray(techs) && (
          <p className="font-normal pb-2">
            Techs:
            {techs?.map((tech, i) => (
              <Chip classes="mx-1" key={`${tech}${i}`} text={tech} />
            ))}
          </p>
        )} */}
        {repo && (
          <p className="font-normal">
            Repository: <a>{repo}</a>{' '}
          </p>
        )}
        <div className="flex justify-end py-10">
          <button
            onClick={close}
            className="bg-secondary-color text-primary-color p-5 rounded-sm fade-out-transition-hover"
          >
            {t('GO_BACK_TEXT')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
