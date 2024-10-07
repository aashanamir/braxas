import React from 'react';
import styles from './style.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome To Yango Partner Braxas International</h1>
        <p>
        At Braxas International, we provide dedicated support to Yango captains—whether you drive a bike, car, or rickshaw. From seamless registration to 24/7 technical assistance, we ensure a smooth and profitable journey for all captains. Join us today and experience the best captain support services in the city.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Get Started</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
