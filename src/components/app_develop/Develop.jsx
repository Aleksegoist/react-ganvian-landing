import React from 'react';
import styles from './Develop.module.css';
import Image_left from '../../assets/decor_develop_left.png';
import Image_right from '../../assets/decor_develop_right.png';
import People_Develop from '../../assets/people_develop.png';

const Develop = () => {
  return (
    <div className={styles.develop}>
      <div className={styles.image_left}>
        <img src={Image_left} alt='/' />
      </div>
      <div className={styles.image_right}>
        <img src={Image_right} alt='/' />
      </div>
      <div className={styles.develop_text}>
        <div>
          <h1 className='title'>
            Our App <span>Development Services</span>
          </h1>
          <p className='desc'>
            We focus on delivering world-class quality and bespoke application
            development solutions that expand your reach, improve your customer
            engagement, and take your business to the next level.
          </p>
          <div className={styles.button}>
            <button>Our Services</button>
          </div>
        </div>
        <div className={styles.people_image}>
          <img src={People_Develop} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Develop;
