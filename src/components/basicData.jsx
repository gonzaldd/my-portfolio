import { useTranslation } from 'react-i18next'

import parseLng from '../utils/parse-lng'

const BasicData = ({ data = [] }) => {
  const { i18n } = useTranslation()

  const lng = parseLng(i18n.language)
  const lngKey = lng === 'es' ? 'description' : 'description_en'
  const positionKey = lng === 'es' ? 'position' : 'position_en'

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
