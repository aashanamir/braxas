import React from "react";
import styles from "./style.module.css";

const HeroSection = () => {
  const learnMoreHandler = () => {
    const link = document.createElement("a");

    link.setAttribute(
      "href",
      `https://wa.me/923066755577?text=mujhy%20register%20krna%20hy%20help%20me`
    );

    link.setAttribute("target", "_blank");

    link.click();
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome To Yango Partner Braxas International</h1>
        <p>
          At Braxas International, we provide dedicated support to Yango
          captains—whether you drive a bike, car, or rickshaw. From seamless
          registration to 24/7 technical assistance, we ensure a smooth and
          profitable journey for all captains. Join us today and experience the
          best captain support services in the city.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Get Started</button>
          <button onClick={learnMoreHandler} className={styles.secondaryButton}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
