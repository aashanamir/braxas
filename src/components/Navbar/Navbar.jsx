import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo.webp";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? (
            <IoIosClose size={34} color="white" />
          ) : (
            <FaBars color="white" />
          )}
        </div>
        <div className={`${styles.left}`}>
          <div className={styles.logo}>
            <img src={logo} alt="Company Logo" />
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/acheivments">Achievments</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul
            style={isOpen ? { display: "flex" } : { display: "none" }}
            className={styles.mobLinks}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/acheivments">Achievments</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ctaButton}>
          <a href="tel:03066755577" className={styles.cta}>
            <IoCall />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
