import React from 'react';
import styles from './Hero.module.css';
import Hero_people from '../../assets/people_right.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className='title'>
          A company focused on innovation in <span>software creation.</span>
        </h1>
        <p className='desc'>
          We always seek the best way to help our customers with good agility.
        </p>
        <div className='btn'>
          <button>Free Consultation</button>
          <button>Reed More</button>
        </div>
      </div>
      <div className={styles.hero_image}>
        <img src={Hero_people} alt='/' />
      </div>
    </div>
  );
};

export default Hero;
