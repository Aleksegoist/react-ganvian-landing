import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_text}>
        <div className={styles.title}>
          <h1></h1>
        </div>
        <div className={styles.desc}>
          <p></p>
        </div>
        <div className={styles.btn}>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
