import ProfilePic from '../assets/profile-pic-noback.webp'

export default () => {
  return (
    <header className='sticky top-0'>
      <div className='flex items-center justify-between flex-nowrap px-8 py-6 md:px-16 md:py-10 bg-background-color'>
        <img src={ProfilePic} className="rounded-full h-[7vh] w-[7vh] cursor-pointer" />
        <div className="flex gap-5">
          <span className="cursor-pointer fade-in-transition">About me</span>
          <span className="cursor-pointer fade-in-transition">Portfolio</span>
          <span className="cursor-pointer fade-in-transition">Contact</span>
        </div>
      </div>
    </header>)
}