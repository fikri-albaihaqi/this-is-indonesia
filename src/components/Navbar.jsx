import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='absolute w-screen py-4 md:py-8 px-12 md:px-16 flex flex-col items-center md:flex-row md:justify-between z-20'>
      <a href="#header">
        <img src={logo} alt="" />
      </a>
      <div className='flex justify-evenly md:justify-end w-full text-white font-signika font-medium md:text-lg'>
        <a className='md:px-8 md:py-4' href="#popular-places">Popular places</a>
        <a className='md:px-8 md:py-4' href="#travel-facts">Travel facts</a>
      </div>
    </nav>
  )
}

export default Navbar