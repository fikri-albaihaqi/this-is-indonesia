import BottomHeader from './components/BottomHeader'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PopularPlaces from './components/PopularPlaces'
import TravelFacts from './components/TravelFacts'
import Footer from './components/Footer'

function App() {

  return (
    <div className='overflow-x-hidden overflow-y-hidden bg-light'>
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
