import React from "react";
import styles from "./style.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const HorezontalSection = ({ img, heading, children }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={heading} />
      <div>
        <SectionHeading text={heading} />
        {children}
      </div>
    </div>
  );
};

export default HorezontalSection;
