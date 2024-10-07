import React from 'react';
import styles from './style.module.css';
import SectionHeading from '../../utils/SectionHeading/SectionHeading';
import Card from '../../utils/Card/Card';

const Commitments = () => {
  return (
    <div className={`${styles.container}`}>
      <SectionHeading text={"Why is Yango better than a taxi"}/>
      <div className={`${styles.cardWrapper}`}>
        <Card img={"/mob.svg"} main={"Fixed prices"} text={"Fixed prices for all trips. You know in advance how much you will pay."}/>

        <Card img={"/mob.svg"} main={"Fixed prices"} text={"Fixed prices for all trips. You know in advance how much you will pay."}/>

        <Card img={"/mob.svg"} main={"Fixed prices"} text={"Fixed prices for all trips. You know in advance how much you will pay."}/>
      </div>
    </div>
  )
}

export default Commitments