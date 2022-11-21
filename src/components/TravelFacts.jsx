import { useState } from 'react'
import map from '../assets/map.svg'
import Fact from './Fact'

const TravelFacts = () => {
  const [facts, setFacts] = useState([
    'Home to over 700 different languages and dialects',
    'Indonesia is the hottest spot on the Pacific Ring of Fire',
    'Indonesia is made up of 17,504 islands',
    'Home to the biggest Buddhist temple in the world',
    'Indonesia has the second largest coastline in the world',
    'Indonesia has three time zones western, central, and eastern',
    'Java is the world’s most populous island',
  ])

  return (
    <div className="w-[60vw] m-auto flex flex-col items-center mb-32">
      <h1 className="font-signika font-bold text-4xl text-dark">Travel Facts About</h1>
      <h1 className="font-caveat font-bold text-7xl text-primary -mt-6">Indonesia</h1>
      <img src={map} className='mt-16' alt="" />
      <div className='w-full flex flex-col items-center mt-24'>
        <div>
          {facts.slice(0, 1).map((fact, i) => (
            <Fact key={i} fact={fact} />
          ))}
        </div>
        <div className='w-full flex justify-between'>
          {facts.slice(1, 3).map((fact, i) => (
            <Fact key={i} fact={fact} />
          ))}
        </div>
        <div>
          {facts.slice(3, 4).map((fact, i) => (
            <Fact key={i} fact={fact} />
          ))}
        </div>
        <div className='w-full flex justify-between'>
          {facts.slice(4, 6).map((fact, i) => (
            <Fact key={i} fact={fact} />
          ))}
        </div>
        <div>
          {facts.slice(6, 7).map((fact, i) => (
            <Fact key={i} fact={fact} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelFacts