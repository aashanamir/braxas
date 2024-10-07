import './App.css'
import About from './components/About/About'
import Commitments from './components/commitments/Commitments'
import HeroSection from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Commitments/>
      <About/>
    </div>
  )
}

export default App
