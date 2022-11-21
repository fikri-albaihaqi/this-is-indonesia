import bg from '../assets/rect-bg.svg'

const Fact = ({fact}) => {
  return (
    <div 
      className='w-[250px] h-[95px] flex items-center text-center' style={{
      backgroundImage: 'url(' + bg + ')',
      backgroundSize: '100%'
    }}>
      <p className='text-white font-signika'>
        {fact}
      </p>
    </div>
  )
}

export default Fact