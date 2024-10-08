import './App.css'
import About from './components/About/About'
import Commitments from './components/commitments/Commitments'
import ContactSection from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Commitments/>
      <About/>
      <ContactSection/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
