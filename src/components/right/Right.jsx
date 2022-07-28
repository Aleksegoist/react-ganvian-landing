import React from 'react';
import styles from './Right.module.css';
import Header_right from '../../assets/header_right.png';

const Right = () => {
  return (
    <div>
      <div className={styles.right}>
        <img src={Header_right} alt='/' />
      </div>
      <div>
        <div className={styles.right_button}>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Right;
