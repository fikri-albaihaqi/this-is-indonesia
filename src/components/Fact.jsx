import bg from '../assets/rect-bg.svg'

const Fact = ({ fact }) => {
  return (
    <div
      className='w-[170px] md:w-[250px] h-[65px] md:h-[95px] flex items-center text-center my-4 p-2'
      data-aos='zoom-in'
      data-aos-duration="1500"
      data-aos-delay="1000"
      style={{
        backgroundImage: 'url(' + bg + ')',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <p className='text-xs md:text-base text-white font-signika'>
        {fact}
      </p>
    </div>
  )
}

export default Fact