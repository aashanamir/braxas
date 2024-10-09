import React from "react";
import styles from "./style.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const HorezontalSection = ({ img, heading, children }) => {
  return (
    <div className={`${styles.container} container`}>
      <img src={img} alt={heading} />
      <div className={styles.content}>
        <SectionHeading text={heading} />
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorezontalSection;
