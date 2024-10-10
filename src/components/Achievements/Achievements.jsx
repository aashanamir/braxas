import React from 'react';
import styles from './style.module.css';
import { FaTrophy, FaUsers, FaProjectDiagram, FaAward } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className={styles.achievements}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Achievements</h2>
        <div className={styles.achievementsGrid}>
          <div className={styles.achievement}>
            <FaTrophy className={styles.icon} />
            <h3>10+ Awards Won</h3>
            <p>Recognized for excellence in service and innovation.</p>
          </div>
          <div className={styles.achievement}>
            <FaUsers className={styles.icon} />
            <h3>10000+ Happy Clients</h3>
            <p>Providing top-notch support and services to captains across the city.</p>
          </div>
          <div className={styles.achievement}>
            <FaProjectDiagram className={styles.icon} />
            <h3>50+ Projects Completed</h3>
            <p>Successfully launched impactful projects for our partners.</p>
          </div>
          <div className={styles.achievement}>
            <FaAward className={styles.icon} />
            <h3>5+ Years in Business</h3>
            <p>Continuously growing and providing the best solutions since 2018.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
