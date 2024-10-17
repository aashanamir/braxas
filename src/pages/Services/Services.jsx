import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from '../../components/Hero/Hero';
import Image from "../../assets/services.webp";
import Footer from '../../components/Footer/Footer';
import Commitments from '../../components/commitments/Commitments';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services | Yango Partner Braxas Inernational</title>
      </Helmet>
      <Navbar />
      <HeroSection image={Image} heading={"Why Register With Yango Partner Braxas International"} desc={"Team up with Yango by partnering with your own transportation company or exploring investment opportunities. We've got your back every step of the way, from recruiting new drivers to scoring great deals on vehicles. Plus, we'll be there to help you manage things smoothly from day one"}/>
      <Commitments />
      <Footer />
    </div>
  )
}

export default Services