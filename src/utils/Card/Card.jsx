import React from 'react';
import styles from './style.module.css';

const Card = ({img , main , text}) => {
  return (
    <div className={styles.card}>
      {
        img && <img src={img} alt={main} />
      }
        
        <h4>{main}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Card