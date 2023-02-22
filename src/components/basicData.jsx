const Experience = ({ data = [] }) => {
  return (
    <div className="flex flex-wrap w-full">
      {data.map((rowData, i) => (
        <div key={`${rowData?.company}${i}`} className={`${(i + 1) === data.length ? "" : "mb-6"} w-full`}>
          <div className="flex flex-col md:flex-row gap-x-5 items-baseline">
            <p className="font-medium text-xl mb-1.5">
              {rowData?.name}
              {' - '}
              <span className="font-normal">{rowData?.position}</span>
            </p>
            <p className="text-custom-color-1 text-sm font-normal">
              {rowData?.time}
            </p>
          </div>
          <p className="text-sm font-light opacity-60">{rowData?.description}</p>
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

export default Experience
