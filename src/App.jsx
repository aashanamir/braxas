import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Acheivemnts from "./pages/Acheivments/Acheivemnts";
import Contact from "./pages/Contact/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrainingPage from "./pages/Training/Training";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/acheivments" element={<Acheivemnts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
      <img
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send/?phone=923066755577&text=mujhy+guidenece+Chahiye+hy+help+me&type=phone_number&app_absent=0",
              "_blank"
            );
          }}
          className="whatsapp-icon"
          src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"
          alt=""
        />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
