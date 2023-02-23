import { useTranslation } from 'react-i18next'

const BasicData = ({ data = [] }) => {
  const { i18n } = useTranslation()

  const lngKey = i18n.language === 'es' ? 'description' : 'description_en'
  const positionKey = i18n.language === 'es' ? 'position' : 'position_en'

  return (
    <div className="flex flex-wrap w-full">
      {data.map((rowData, i) => (
        <div
          key={`${rowData?.company}${i}`}
          className={`${i + 1 === data.length ? '' : 'mb-6'} w-full`}
        >
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
          <p className="text-base font-light opacity-60 break-words">
            {rowData?.[lngKey] || rowData?.description}
          </p>
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
