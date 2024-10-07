import React from 'react';
import styles from './style.module.css';

const SectionHeading = ({text}) => {
  return (
    <h2 className={styles.heading}>{text}</h2>
  )
}

export default SectionHeading