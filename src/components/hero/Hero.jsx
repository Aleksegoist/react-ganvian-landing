import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <div className={styles.hero_text}>
        <span>A company focused on</span>
        <span>
          innovation in <span style={{ color: '#B311FF' }}>software</span>
        </span>
        <span style={{ color: '#B311FF' }}>creation.</span>
      </div>
    </>
  );
};

export default Hero;
