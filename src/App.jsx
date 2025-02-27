import BottomHeader from './components/BottomHeader'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PopularPlaces from './components/PopularPlaces'
import TravelFacts from './components/TravelFacts'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from 'lenis'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      startEvent: 'load',
    })

    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-light">
      <Navbar />
      <Header />
      <PopularPlaces />
      <TravelFacts />
      <BottomHeader />
      <Footer />
    </div>
  )
}

export default App
