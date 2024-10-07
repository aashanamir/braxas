import React from "react";
import styles from "./style.module.css";
import HorezontalSection from "../../utils/HorezontalSection/HorezontalSection";
import Card from "../../utils/Card/Card";

const About = () => {
  return (
    <div className={`${styles.container} container`}>
      <HorezontalSection img={"/about.jfif"} heading={"Ride safe"}>
        <div className={`${styles.childDiv}`}>
          <Card
            main={"Fixed prices"}
            text={
              "Fixed prices for all trips. You know in advance how much you will pay."
            }
          />
          <Card
            main={"Fixed prices"}
            text={
              "Fixed prices for all trips. You know in advance how much you will pay."
            }
          />
          <Card
            main={"Fixed prices"}
            text={
              "Fixed prices for all trips. You know in advance how much you will pay."
            }
          />
          <Card
            main={"Fixed prices"}
            text={
              "Fixed prices for all trips. You know in advance how much you will pay."
            }
          />
        </div>
      </HorezontalSection>
    </div>
  );
};

export default About;
