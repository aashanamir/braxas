import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo.png";
import { FaBars  } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbar}`}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {
          isOpen ? <IoIosClose size={34}  color="white" /> : <FaBars color="white" />
        }
        </div>
        <div className={`${styles.left}`}>
          <div className={styles.logo}>
            <img src={logo} alt="Company Logo" />
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#services">Achievements</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul style={isOpen ? {display : "flex"} : {display : "none"}} className={styles.mobLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#services">Achievements</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.ctaButton}>
          <a href="tel:03066755577" className={styles.cta}>
            <IoCall  />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
