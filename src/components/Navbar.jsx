import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='absolute w-screen py-8 px-16 flex justify-between z-20'>
      <img src={logo} alt="" />
      <div className='text-white text-xl font-signika font-medium'>
        <a className='px-8 py-4' href="">Popular places</a>
        <a className='px-8 py-4' href="">Travel facts</a>
      </div>
    </nav>
  )
}

export default Navbar