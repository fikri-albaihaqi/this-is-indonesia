import { useState } from "react"
import Place from "./Place"

const PopularPlaces = () => {
  const [places, setPlaces] = useState([
    {
      name: 'Raja Ampat',
      desc: 'Far from the view-blocking skyscrapers, dense and hectic concrete jungles, congested traffics, flickering electric billboards, endless annoying noises, and all the nuisances of modern cities, you will find a pristine paradise where Mother Nature and warm friendly people welcome you with all the exceptional wonders in Raja Ampat, the islands-regency in West Papua Province.',
      images: [
        'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1564946674274-b1a97f8c77c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
      ]
    },
    {
      name: 'Bali',
      desc: 'Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers’ paradise! Bali enchants with its dramatic dances and colorful ceremonies, its arts, and crafts, to its luxurious beach resorts and exciting nightlife. And everywhere, you will find intricately carved temples.',
      images: [
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80',
        'https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
      ]
    },
    {
      name: 'Bromo',
      desc: 'Being the largest volcanic region in the province, Bromo Tengger Semeru National Park covers a massive area of 800 square km in the center of East Java. Visitors who have an eager interest in volcanic activities must come to the park and witness the smoke of ashes coming from Mount Semeru, an active volcano that rises 3,676 meters above sea level.',
      images: [
        'https://images.unsplash.com/photo-1587651687979-77cf05d1b841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1505966309334-54eb8f9e3c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      ]
    },
    {
      name: 'Lake Toba',
      desc: 'Lake Toba is an extraordinary natural wonder of the world. This enormous crater lake consists of an island almost the size of Singapore in its center. At over 1,145 square km, and a depth of 450 meters, Lake Toba is actually more like an ocean. This is the largest lake in Southeast Asia and one of the deepest lakes in the world.',
      images: [
        'https://images.unsplash.com/photo-1625024017825-1a1dfc2f4ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80',
        'https://images.unsplash.com/photo-1623598122059-9b5ef17619c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
  ])

  return (
    <div className="w-[60vw] m-auto mt-16">
      <h1 className="text-dark font-signika font-bold text-4xl">Popular Places</h1>
      <div className="mt-16">
        {places.map((place, i) => (
          <Place key={i} place={place} index={i} />
        ))}
      </div>
    </div>
  )
}

export default PopularPlaces