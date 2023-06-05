import { useTranslation } from 'react-i18next'

type Position_Lang = 'position' | 'position_en'
type Description_Lang = 'description' | 'description_en'

type Row = {
  company: String
  name: String
  position?: string
  position_en?: string
  time: string
  description?: string
  description_en?: string
}

interface ExperienceType {
  time: string
  name: string
  position: string
  description: string
  description_en: string
  company?: string
  position_en?: string
}

import parseLng from '../utils/parse-lng.js'

const BasicData = ({ data = [] }: { data: Array<ExperienceType> }) => {
  const { i18n } = useTranslation()

  const lng = parseLng(i18n.language)
  const lngKey: Description_Lang =
    lng === 'es' ? 'description' : 'description_en'
  const positionKey: Position_Lang = lng === 'es' ? 'position' : 'position_en'

  return (
    <div className="flex flex-wrap w-full gap-y-12">
      {data.map((rowData, i) => (
        <div key={`${rowData?.company}${i}`} className={`w-full`}>
          <div className="flex flex-col-reverse md:flex-row gap-x-5 items-baseline">
            <p className="font-medium text-xl xl:text-2xl mb-4">
              {rowData?.name}
              {' - '}
              <span className="font-normal">
                {rowData?.[positionKey] || rowData?.position}
              </span>
            </p>
            <p className="text-custom-color-1 text-sm font-normal my-1">
              {rowData?.time}
            </p>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: rowData?.[lngKey] || rowData?.description,
            }}
          ></p>
          {/* <div className="inline-flex gap-2 flex-wrap">
            {rowData?.techs?.map((tech) => (
              <Chip text={tech} />
            ))}
          </div> */}
        </div>
      ))}
    </div>
  )
}

export default BasicData
