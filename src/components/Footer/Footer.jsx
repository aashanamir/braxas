import React from 'react';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      {/* Main Footer Section */}
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h4>About Us</h4>
          <p>
            At Braxas International, we provide dedicated support to Yango captains—whether you drive a bike, car, or rickshaw.
          </p>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>Email: info@braxasinternational.com</p>
          <p>Phone: 0306 6755577</p>
        </div>
        <div className={styles.column}>
          <h4>Office Timings</h4>
          <p>Monday - Staurday: 10 AM - 8 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Subfooter Section */}
      <div className={styles.subfooter}>
        <p>&copy; {new Date().getFullYear()} Braxas International. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
