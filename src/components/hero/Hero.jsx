import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_text}>
        <span>A company focused on</span>
        <span>
          innovation in <span style={{ color: '#B311FF' }}>software</span>
        </span>
        <span style={{ color: '#B311FF' }}>creation.</span>
      </div>

      <div className={styles.hero_desc}>
        <span>We always seek the best way to help our </span>
        <span>customers with good agility.</span>
      </div>

      <div className={styles.hero_btn}>
        <button>Free Consultation</button>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Hero;
