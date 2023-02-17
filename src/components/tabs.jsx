import { useState } from 'react'

const Tabs = ({ experience = [], education = [] }) => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div className="flex flex-wrap w-full">
      <ul className="flex pb-4 flex-row">
        <li className="mr-7 last:mr-0">
          <button
            className={
              'text-base font-normal rounded leading-normal hover:text-slate-400 cursor-pointer ' +
              (openTab === 1
                ? 'text-custom-color-1 underline underline-offset-4'
                : 'text-slate-500')
            }
            onClick={(e) => {
              e.preventDefault()
              setOpenTab(1)
            }}
          >
            Experience
          </button>
        </li>
        <li className="mr-2 last:mr-0">
          <button
            className={
              'text-base font-normal hover:text-slate-400 cursor-pointer ' +
              (openTab === 2
                ? 'text-custom-color-1 underline underline-offset-4'
                : 'text-slate-500')
            }
            onClick={(e) => {
              e.preventDefault()
              setOpenTab(2)
            }}
          >
            Education
          </button>
        </li>
      </ul>
      <div className="pt-4">
        <div className={openTab === 1 ? 'active' : 'hidden'} id="link1">
          <ol className="border-l border-custom-color-1">
            {experience.map((exp, i) => (
              <li key={`${exp?.company}${i}`}>
                <div className="flex items-center pt-3">
                  <div className="bg-custom-color-1 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                  <p className="text-custom-color-1 text-sm font-normal">
                    {exp?.time}
                  </p>
                </div>
                <div className="mt-0.5 ml-4 mb-6">
                  <h4 className="text-gray-800 font-medium text-xl mb-1.5">
                    {exp?.company}
                    {' - '}
                    <span className="font-normal">{exp?.position}</span>
                  </h4>
                  <p className="font-light mb-3">{exp?.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={openTab === 2 ? 'active' : 'hidden'} id="link2">
          <ol className="border-l border-custom-color-1">
            {education.map((edu, i) => (
              <li key={`${edu?.name}${i}`}>
                <div className="flex items-center pt-3">
                  <div className="bg-custom-color-1 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                  <p className="text-custom-color-1 text-sm font-normal">
                    {edu?.time}
                  </p>
                </div>
                <div className="mt-0.5 ml-4 mb-6">
                  <h4 className="text-gray-800 font-medium text-xl mb-1.5">
                    {edu?.name}
                    {' - '}
                    <span className="font-normal">{edu?.career}</span>
                  </h4>
                  <p className="font-light mb-3">{edu?.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Tabs
