import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/Contact/Contact";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Commitments from "../../components/commitments/Commitments";
import HeroSection from "../../components/Hero/Hero";
import heroImage from "../../assets/hero.jfif";
import Achievements from "../../components/Achievements/Achievements";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        image={heroImage}
        heading={"Welcome To Yango Partner Braxas International"}
        desc={`At Braxas International, we provide dedicated support to Yango
          captains—whether you drive a bike, car, or rickshaw. From seamless
          registration to 24/7 technical assistance, we ensure a smooth and
          profitable journey for all captains. Join us today and experience the
          best captain support services in the city.`}
          btns={true}
      />
      <Commitments />
      <About />
      <Achievements />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
