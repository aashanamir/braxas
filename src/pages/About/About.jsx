import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from '../../components/Hero/Hero';
import Image from "../../assets/about.webp";
import Footer from '../../components/Footer/Footer';
import AboutSection from "../../components/About/About.jsx";


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection image={Image} heading={"About Yango Partner Braxas International"} desc={"Team up with Yango by partnering with your own transportation company or exploring investment opportunities. We've got your back every step of the way, from recruiting new drivers to scoring great deals on vehicles. Plus, we'll be there to help you manage things smoothly from day one"}/>
      <div style={{
        marginTop: "50px"
      }}>
        
      <AboutSection />
      </div>
      <Footer />
    </div>
  )
}

export default About