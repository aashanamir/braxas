import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import ContactSection from '../../components/Contact/Contact';
import Image from "../../assets/contact1.webp";



const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection image={Image} heading={"Contact With Yango Partner Braxas International"} desc={"Team up with Yango by partnering with your own transportation company or exploring investment opportunities. We've got your back every step of the way, from recruiting new drivers to scoring great deals on vehicles. Plus, we'll be there to help you manage things smoothly from day one"}/>

      <div style={{
        marginTop: "50px"
      }}>
        <ContactSection />
      </div>
      <Footer />

    </div>
  )
}

export default Contact