import React from "react";
import styles from "./style.module.css";

const HeroSection = ({ image, heading, desc, btns }) => {
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
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={`${styles.hero} container fade-in-element`}
    >
      <div className={styles.content}>
        <h1>{heading}</h1>
        <p>{desc}</p>
        {btns && (
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started</button>
            <button
              onClick={learnMoreHandler}
              className={styles.secondaryButton}
            >
              Learn More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
