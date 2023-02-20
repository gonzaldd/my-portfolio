const Modal = ({ open, closeModal, data }) => {
  return (
    <div
      className={`absolute ${open ? 'active' : 'hidden'
        } bg-gray-600 bg-opacity-70 h-full w-full hidden-scrollbar`}
    >
      <div className="flex flex-1 justify-center items-center">
        <div className="glassCard fade-in-animation rounded-lg items-center p-5 flex flex-col max-w-[95%] md:max-w-[70%] bg-modal my-5">
          <div className="flex w-full justify-end ">
            <svg
              onClick={closeModal}
              stroke="currentColor"
              class="max-w-[5vh] mb-3 glassButton rounded-full"
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
          <div className="w-full mb-5">
            <img
              className="rounded-lg w-full"
              src={data?.img}
              alt="portfolio-img"
            />
            <p className="font-medium text-3xl my-4 whitespace-nowrap text-ellipsis overflow-hidden">
              {data?.title}
            </p>
            <p className="font-light pb-3">
              Est consectetur veniam mollit minim duis ad quis deserunt anim
              aliquip laboris. Enim pariatur sint excepteur occaecat esse
              adipisicing veniam commodo sint officia cillum ex. Nisi ullamco
              pariatur adipisicing laborum in minim ullamco officia sint sunt
              est. Nulla eiusmod consectetur dolore dolor culpa labore quis
              incididunt. Quis velit laborum mollit qui ut irure irure ipsum
              velit labore. Fugiat aliqua ut tempor ullamco proident nostrud
              sint ad aute.
            </p>
            <p className="font-normal pb-2">Created: </p>
            <p className="font-normal pb-2">Techs: </p>
            <p className="font-normal">Repository: </p>
            {/* {data?.repo && <p>Repository: </p>} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
