import React from "react";
import styles from "./style.module.css";
import HorezontalSection from "../../utils/HorezontalSection/HorezontalSection";
import Card from "../../utils/Card/Card";

const About = () => {

  return (
    <div className={`${styles.container} container`}>
      <HorezontalSection img={"/about.png"} heading={"Who We Are"}>
        <div className={`${styles.childDiv}`}>
          <Card

            main={"Lahore's Premier Yango Fleet!"}
            text={
              "Best Yango fleet "
            }
          
          />
          <Card
            main={"Yango Gold Partner!"}
            text={
              "Officially Gold Status "
            }
           
          />
          <Card
            main={"We Brand Car & Rickshaw! Free"}
            text={
              "Free branding "
            }
            
          />
          <Card
            main={"10,000+ Happy Captains!"}
            text={
              "Most successful Captains"
            }
          />
        </div>
      </HorezontalSection>
    </div>
  );
};

export default About;
