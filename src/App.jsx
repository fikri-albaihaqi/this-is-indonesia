import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PopularPlaces from './components/PopularPlaces'

function App() {

  return (
    <div className='overflow-x-hidden overflow-y-hidden bg-light'>
      <Navbar />
      <Header />
      <PopularPlaces />
    </div>
  )
}

export default App
