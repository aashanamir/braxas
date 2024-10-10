import './App.css'
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Acheivemnts from './pages/Acheivments/Acheivemnts';
import Contact from './pages/Contact/Contact';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/acheivments" element={<Acheivemnts/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
