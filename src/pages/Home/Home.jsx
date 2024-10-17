import React, { Suspense, lazy } from "react";
import LoadingEffect from "../../components/LoadingEffect/LoadingEffect";
import heroImage from "../../assets/hero.webp";
import RegistrationProcess from "../../components/RegistrationProcess/RegistrationProcess";
import { Helmet } from "react-helmet";

// Lazily import components
const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const HeroSection = lazy(() => import("../../components/Hero/Hero"));
const Commitments = lazy(() =>
  import("../../components/commitments/Commitments")
);
const About = lazy(() => import("../../components/About/About"));
const Achievements = lazy(() =>
  import("../../components/Achievements/Achievements")
);
const ContactSection = lazy(() => import("../../components/Contact/Contact"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Braxas International | Yango Partner</title>
        <meta
          name="description"
          content="At Yango Partner Braxas International, we provide dedicated support to Yango captains—whether you drive a bike, car, or rickshaw. From seamless registration to 24/7 technical assistance, we ensure a smooth and profitable journey for all captains. Join us today and experience the best captain support services in the city."
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Suspense fallback={<LoadingEffect />}>
        <Navbar />
        <HeroSection
          image={heroImage}
          heading={"Welcome To Yango Partner Braxas International"}
          desc={`At Yango Partner Braxas International, we provide dedicated support to Yango
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
        <RegistrationProcess />

        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
