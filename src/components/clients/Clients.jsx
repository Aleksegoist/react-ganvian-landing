import React from 'react';
import styles from './Clients.module.css';
import Decor_Left from '../../assets/decor_clients_left.png';
import Decor_Right from '../../assets/decor_clients_right.png';
import Client1 from '../../assets/Client1.png';
import Client2 from '../../assets/Client2.png';
import Client3 from '../../assets/Client3.png';
import Client4 from '../../assets/Client4.png';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={styles.image_left}>
        <img src={Decor_Left} alt='/' />
      </div>
      <div className={styles.image_right}>
        <img src={Decor_Right} alt='/' />
      </div>
      <div className='header'>
        <h2>
          Clients <span>Commentaries</span>
        </h2>
      </div>
      <div className={styles.blocks}>
        <div className={styles.box1}>
          <div className={styles.content}>
            <div className={styles.circle}>
              <img src={Client1} alt='/' />
            </div>
            <h3>Wade Warren</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.content}>
            <div className={styles.circle}>
              <img src={Client2} alt='/' />
            </div>
            <h3>Esther Howard</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.content}>
            <div className={styles.circle}>
              <img src={Client3} alt='/' />
            </div>
            <h3>Guy Hawkins</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
          </div>
        </div>
        <div className={styles.box4}>
          <div className={styles.content}>
            <div className={styles.circle}>
              <img src={Client4} alt='/' />
            </div>
            <h3>Kristin Watson</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
          </div>
        </div>
      </div>
      <div className={styles.block_arrows}>
        <div className={styles.left}>
          <MdOutlineKeyboardArrowLeft size={25} color='#99B8AF' />
        </div>
        <div className={styles.right}>
          <MdOutlineKeyboardArrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
