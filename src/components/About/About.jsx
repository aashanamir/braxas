import React from "react";
import styles from "./style.module.css";
import HorezontalSection from "../../utils/HorezontalSection/HorezontalSection";
import Card from "../../utils/Card/Card";

const About = () => {

  /*  text={
    "Experience unparalleled rides with Braxas International, the largest and most reliable Yango fleet in Lahore."
  }

   text={
              "Partner with Braxas International, Lahore's exclusive Yango Fleet awarded Gold Status for excellence in service and safety."
            }


            text={
              "Stand out on the road! With Braxas International, get free car and rickshaw branding that promotes your business."
            }

            text={
              "Join a community of success! Braxas International supports over 10,000 captains, offering them the best earnings and opportunities."
            }
    
  */
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
