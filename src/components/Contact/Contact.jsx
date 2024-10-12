import React, { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    try {
      const { data } = await axios.post(
        "https://braxas-portal.vercel.app/api/v1/message/send",
        {
          name,
          email,
          phone,
          message,
        },{ headers: { "Content-Type": "application/json" } }
      );

      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <section className={`${styles.contactSection} container`}>
      <div className={styles.container}>
        {/* Contact Form */}
        <div className={styles.formContainer}>
          <h2>Contact Us</h2>
          <div className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className={styles.submitButton}
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Google Map */}
        <div className={styles.mapContainer}>
          <h2>Our Location</h2>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0638160317712!2d74.35989875491127!3d31.57729782476268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b1d407f8f7b%3A0x709d208c2492eb4f!2sYango%20Partner%20Braxas%20international%20(Registration%20Office)!5e0!3m2!1sen!2s!4v1728394160581!5m2!1sen!2s"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
