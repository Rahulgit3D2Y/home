import './App.css'
import Business from './Components/Business'
import Footer from './Components/Footer'
import Hero from "./Components/Hero.jsx"
import Navbar from "./Components/Navbar.jsx"
import Rooms from './Components/Rooms'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Business/>
      <Rooms/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App
