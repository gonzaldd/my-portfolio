import ProfilePic from '../assets/profile-pic-noback.webp'

export default () => {
  const moveToTop = () => window?.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <header id="header" className='sticky top-0 z-10'>
      <div className='flex items-center justify-between flex-nowrap px-8 py-6 md:px-16 md:py-10 bg-background-color'>
        <img src={ProfilePic} className="rounded-full h-[7vh] w-[7vh] cursor-pointer" onClick={moveToTop} />
        <div className="flex gap-5">
          <a className="cursor-pointer fade-out-transition-hover" href="#about-me">About me</a>
          <a className="cursor-pointer fade-out-transition-hover">Portfolio</a>
          <a className="cursor-pointer fade-out-transition-hover">Contact</a>
        </div>
      </div>
    </header >)
}