import React from "react";
import styles from "./style.module.css";

const HeroSection = ({ image, heading, desc, btns }) => {
  const learnMoreHandler = () => {
    const link = document.createElement("a");

    link.setAttribute(
      "href",
      `https://whatsapp.com/channel/0029VaJQHq4GU3BJxpytSA1F`
    );

    link.setAttribute("target", "_blank");

    link.click();
  };

  const getStartedHandler = () => {
    const link = document.createElement("a");

    link.setAttribute(
      "href",
      `https://forms.fleet.yango.com/forms?ref_id=ca7509a4416648f4ada29f3f00be9441`
    );

    link.setAttribute("target", "_blank");

    link.click();
  };

  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={`${styles.hero}  fade-in-element`}
    >
      <div className={`${styles.content} container`}>
        <h1>{heading}</h1>
        <p>{desc}</p>
        {btns && (
          <div className={styles.buttons}>
            <button
              onClick={getStartedHandler}
              className={styles.primaryButton}
            >
              Get Started
            </button>
            <button
              onClick={learnMoreHandler}
              className={styles.secondaryButton}
            >
              Whatsapp Channel
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
