import React from 'react';
import styles from './Landscape.module.css';
import Landscape_left from '../../assets/decor_landscape_left.png';
import Landscape_right from '../../assets/decor_landscape_right.png';
import Landscape_people from '../../assets/people_landscape.png';

const Landscape = () => {
  return (
    <div className={styles.landscape}>
      <div className={styles.image_left}>
        <img src={Landscape_left} alt='/' />
      </div>
      <div className={styles.image_right}>
        <img src={Landscape_right} alt='/' />
      </div>
      <div className={styles.landscape_text}>
        <div className={styles.landscape_people}>
          <img src={Landscape_people} alt='/' />
        </div>
        <div>
          <h1 className='title'>
            We Are Transforming the <span>Digital Landscape</span>
          </h1>
          <p className='desc'>
            We take care of your business needs by bringing novel digital
            experiences to the table by flawlessly integrating design &
            development. Our team offers end-to-end full stack development
            services blended with
          </p>
          <div className={styles.button}>
            <button>Free Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landscape;
