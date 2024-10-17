import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AcheivemntSection from "../../components/Achievements/Achievements";
import Image from "../../assets/acheivements.webp";
import HeroSection from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const Acheivemnts = () => {
  return (
    <div>
      <Helmet>
        <title>Acheivements | Yango Partner Braxas Inernational</title>
      </Helmet>
      <Navbar />
      <HeroSection
        image={Image}
        heading={"Why Register With Yango Partner Braxas International"}
        desc={
          "Team up with Yango by partnering with your own transportation company or exploring investment opportunities. We've got your back every step of the way, from recruiting new drivers to scoring great deals on vehicles. Plus, we'll be there to help you manage things smoothly from day one"
        }
      />
      <AcheivemntSection />
      <Footer />
    </div>
  );
};

export default Acheivemnts;
