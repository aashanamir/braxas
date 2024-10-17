import React from "react";
import styles from "./style.module.css";
import SectionHeading from "../../utils/SectionHeading/SectionHeading";
import Card from "../../utils/Card/Card";

const Commitments = () => {
  return (
    <div className={`${styles.container} container`}>
      <SectionHeading text={"Why Register With Yango Partner Braxas International"} />
      <div className={`${styles.cardWrapper}`}>
        <Card
          img={"/service-1.png"}
          main={"24/7 Captain Support"}
          text={
            "Experience unparalleled support for our captains, available around the clock to ensure a smooth and efficient ride-hailing experience."
          }
        />

        <Card
          img={"/service-3.png"}
          main={"Quick Registration"}
          text={
            "Effortlessly create and activate your account in just 10 minutes, allowing you to start driving without delay."
          }
        />

        <Card
          img={"/service-2.png"}
          main={"24/7 Top-Up Service"}
          text={
            "Rest easy knowing that our 24/7 top-up service takes care of your account balance, ensuring you're always ready to hit the road."
          }
        />
      </div>
    </div>
  );
};

export default Commitments;
