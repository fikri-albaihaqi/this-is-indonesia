import logo from '../assets/logo.svg'

const BottomHeader = () => {
  return (
    <div className="relative w-screen h-screen z-10 bg-fixed flex items-center justify-center" style={{
      backgroundImage: 'url(https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1881&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <img src={logo} className='w-[500px]' alt="" />
    </div>
  )
}

export default BottomHeader