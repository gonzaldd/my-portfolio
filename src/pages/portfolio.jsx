import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { portfolio as portfolioList } from '../assets/data.json'
import Chip from '../components/chip'

const Portfolio = () => {
  const [showProject, setShowProject] = useState(false)
  const { t } = useTranslation('PORTFOLIO')

  return (
    <div
      id="glassCard"
      className="fade-in-animation flex justify-start flex-col items-center"
    >
      {!showProject ? (
        <>
          <h1 className="mt-10 text-3xl font-medium">{t('TITLE')}</h1>
          <section className="flex justify-center gap-5 p-5 mt-10 flex-wrap fade-in-animation">
            {portfolioList.map((portfolio, i) => {
              return (
                <div
                  onClick={() => setShowProject(portfolio)}
                  key={`${portfolio?.name}${i}`}
                  className="glassCard max-w-[100%] md:max-w-[30%] rounded-lg p-2 hover:opacity-70 hover:cursor-pointer h-fit"
                >
                  <img className="rounded-lg" src={portfolio?.img} />
                  <p className="font-medium text-lg mt-2 whitespace-nowrap text-ellipsis overflow-hidden">
                    {portfolio?.title}
                  </p>
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
}) => (
  <section className="flex flex-col p-2 pb-3 w-full items-center fade-in-animation">
    <div className="flex w-full justify-end ">
      <svg
        onClick={close}
        stroke="currentColor"
        className="max-w-[5vh] mb-3 glassButton rounded-full"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <path
          fill="#000000"
          d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        ></path>
      </svg>
    </div>
    <div className="flex flex-col w-[80%]">
      <img className="rounded-lg w-full" src={img} />
      <p className="font-medium text-3xl my-4 whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </p>
      <p className="font-light pb-3">{description}</p>
      <p className="font-normal pb-2">Created: {created}</p>
      <p className="font-normal pb-2">
        Techs:
        {techs?.map((tech, i) => (
          <Chip classes="mx-1" key={`${tech}${i}`} text={tech} />
        ))}
      </p>
      {repo && (
        <p className="font-normal">
          Repository: <a>{repo}</a>{' '}
        </p>
      )}
    </div>
  </section>
)

export default Portfolio
