import React from 'react';
import styles from './Budget.module.css';
import DecorLeftTop from '../../assets/decor_budget_left_top.png';
import DecorLeftBottom from '../../assets/decor_budget_left_bottom.png';
import DecorRight from '../../assets/decor_budget_right.png';

const Budget = () => {
  return (
    <div className={styles.budget}>
      <div className={styles.images_left_top}>
        <img src={DecorLeftTop} alt='/' />
      </div>
      <div className={styles.images_left_bottom}>
        <img src={DecorLeftBottom} alt='/' />
      </div>
      <div className={styles.images_right}>
        <img src={DecorRight} alt='/' />
      </div>
      <div>
        <h2 className='header'>
          Project <span>Budget</span>
        </h2>
      </div>
      <div className={styles.budget_block}>
        <div className={styles.budget_text}>
          <h1 className='title'>
            Send us your <span>project</span> for a quote
          </h1>
          <p className='desc'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className={styles.button}>
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.form_email}>
          <div className={styles.input}>
            <input type='text' placeholder='Full Name' />
          </div>
          <div className={styles.input}>
            <input type='email' placeholder='E-mail' />
          </div>
          <div className={styles.input}>
            <input type='number' placeholder='Phone Number' />
          </div>
          <div className={styles.text}>
            <textarea
              cols={542}
              rows={6}
              placeholder='Project Description'
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
