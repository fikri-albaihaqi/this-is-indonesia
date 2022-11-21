const Header = () => {
  return (
    <header className="relative w-screen h-screen z-10 bg-fixed" id="header"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1511248391039-7d043f42ac7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="pt-[40vh] text-center font-caveat font-bold text-6xl md:text-8xl text-white">Paradise on Earth</h1>
      <div className="relative h-[35%] md:h-[45%] flex flex-col items-center justify-end font-signika">
        <p className="text-white text-center mb-2">Discover Indonesia</p>
        <div className="flex items-center justify-center border-[1px] border-white rounded-full w-[40px] h-[40px]">
          <span className="material-symbols-outlined text-white">
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header