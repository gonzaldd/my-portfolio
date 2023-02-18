import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Modal from '../components/modal'
import PortfolioImg from '../assets/portfolio-example.webp'

const portfolioList = [
  { title: 'App Landing Page', img: PortfolioImg },
  { title: 'Title 2', img: PortfolioImg },
  { title: 'Title 3', img: PortfolioImg },
  { title: 'Title 4', img: PortfolioImg },
  { title: 'Title 5', img: PortfolioImg },
  { title: 'Title 6', img: PortfolioImg },
]

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false)
  const { t } = useTranslation('PORTFOLIO')

  return (
    <>
      <div
        id="glassCard"
        className="fade-in-animation flex justify-start flex-col items-center"
      >
        <h1 className="mt-10 text-3xl font-medium">{t('TITLE')}</h1>
        <section className="flex justify-center gap-5 p-5 mt-10 flex-wrap">
          {portfolioList.map((portfolio, i) => {
            return (
              <div
                onClick={() => setOpenModal(portfolio)}
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
      </div>
      <Modal
        open={Boolean(openModal)}
        closeModal={() => setOpenModal(false)}
        data={openModal}
      />
    </>
  )
}

export default Portfolio
