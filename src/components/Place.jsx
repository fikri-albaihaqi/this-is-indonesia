const Place = ({ place, index }) => {

  return (
    index % 2 === 0 ? (
      <div className="h-screen">
        <h1 className="text-6xl text-primary font-caveat font-bold">{place.name}</h1>
        <div className="flex mt-6">
          <div className="min-w-[500px] h-[500px] rounded-xl" style={{
            backgroundImage: 'url(' + place.images[0] + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
          <div className="flex flex-col ml-8 mt-8">
            <div className="h-[200px] rounded-xl" style={{
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
      <div className="h-screen">
        <h1 className="text-6xl text-right text-primary font-caveat font-bold">{place.name}</h1>
        <div className="flex mt-6">
          <div className="flex flex-col mr-8 mt-8">
            <div className="h-[200px] rounded-xl" style={{
              backgroundImage: 'url(' + place.images[1] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>
            <p className="mt-6 font-signika font-light">{place.desc}</p>
          </div>
          <div className="min-w-[500px] h-[500px] rounded-xl" style={{
            backgroundImage: 'url(' + place.images[0] + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
        </div>
      </div>
    )
  )
}

export default Place