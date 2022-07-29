import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_text}>
        <h1>
          A company focused on innovation in <span>software creation.</span>
        </h1>
      </div>

      <div className={styles.hero_desc}>
        <p>
          We always seek the best way to help our customers with good agility.
        </p>
      </div>

      <div className={styles.hero_btn}>
        <button>Free Consultation</button>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Hero;
