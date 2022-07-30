import React from 'react';
import styles from './Services.module.css';
import Decor_Services from '../../assets/decoration_services.png';
import Service1 from '../../assets/service1.png';
import Service2_IOS from '../../assets/service2_ios.png';
import Service3_Android from '../../assets/service3_android.png';
import Service4_Laptop from '../../assets/service4_laptop.png';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.image}>
        <img src={Decor_Services} alt='/' />
      </div>
      <div>
        <h2 className='header'>
          Our <span>Services</span>
        </h2>
      </div>
      <div className={styles.blocks}>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.circle}>
              <img src={Service1} alt='/' />
            </div>
            <p>Product Management</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.circle} style={{ background: '#F1F1F1' }}>
              <img src={Service2_IOS} alt='/' />
            </div>
            <p>IOS Developement</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.circle} style={{ background: '#DAFFE2' }}>
              <img src={Service3_Android} alt='/' />
            </div>
            <p>Android Developement</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.circle} style={{ background: '#D1E9FF' }}>
              <img src={Service4_Laptop} alt='/' />
            </div>
            <p>Software Developement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
