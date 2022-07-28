import React from 'react';
import styles from './Right.module.css';
import Header_right from '../../assets/header_right.png';
import People_right from '../../assets/people_right.png';
import { RiArrowDownSLine } from 'react-icons/ri';

const Right = () => {
  return (
    <>
      <div className={styles.right}>
        <img src={Header_right} alt='/' />
      </div>
      <div className={styles.right_button}>
        <div className={styles.lang}>
          <div>
            <span>En</span>
          </div>
          <RiArrowDownSLine size={20} />
        </div>
        <div>
          <button>Contact Us</button>
        </div>
      </div>
      <div className={styles.people_img}>
        <img src={People_right} alt='/' />
      </div>
    </>
  );
};

export default Right;
