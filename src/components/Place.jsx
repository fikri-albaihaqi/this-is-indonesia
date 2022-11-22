const Place = ({ place, index }) => {

  return (
    index % 2 === 0 ? (
      <div className="my-32">
        <h1 className="text-6xl text-primary font-caveat font-bold" data-aos="fade-down" data-aos-duration="1500">{place.name}</h1>
        <div className="flex flex-col xl:flex-row mt-4 xl:mt-6">
          <div className="w-[200px] h-[300px] xl:min-w-[500px] xl:h-[500px] xl:rounded-xl" data-aos='fade-right' data-aos-duration="1500"
            style={{
              backgroundImage: 'url(' + place.images[0] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>
          <div className="flex flex-col xl:ml-8 mt-8" data-aos='fade-left' data-aos-duration="1500">
            <div className="absolute xl:static w-[135px] xl:w-full h-[190px] xl:h-[200px] -translate-y-[180px] translate-x-[100px] xl:-translate-y-[0px] xl:translate-x-[0px] xl:rounded-xl" style={{
              backgroundImage: 'url(' + place.images[1] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>
            <p className="mt-6 font-signika font-light">{place.desc}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="my-32">
        <h1 className="text-6xl text-left xl:text-right text-primary font-caveat font-bold" data-aos="fade-down" data-aos-duration="1500">{place.name}</h1>
        <div className="flex flex-col-reverse xl:flex-row mt-4 xl:mt-6">
          <div className="flex flex-col xl:mr-8 mt-8" data-aos='fade-right' data-aos-duration="1500">
            <div className="absolute xl:static w-[135px] xl:w-full h-[190px] xl:h-[200px] -translate-y-[180px] translate-x-[100px] xl:-translate-y-[0px] xl:translate-x-[0px] xl:rounded-xl" style={{
              backgroundImage: 'url(' + place.images[1] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>
            <p className="mt-6 font-signika font-light">{place.desc}</p>
          </div>
          <div className="w-[200px] h-[300px] xl:min-w-[500px] xl:h-[500px] xl:rounded-xl" data-aos='fade-left' data-aos-duration="1500"
            style={{
              backgroundImage: 'url(' + place.images[0] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>
        </div>
      </div>
    )
  )
}

export default Place