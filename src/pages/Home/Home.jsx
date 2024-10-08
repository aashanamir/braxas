import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/Contact/Contact";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Commitments from "../../components/commitments/Commitments";
import HeroSection from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Commitments />
      <About />
      <ContactSection />
      <About />
      <Footer />

    </div>
  );
};

export default Home;
