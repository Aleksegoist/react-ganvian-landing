import React from 'react';
import styles from './Footer.module.css';
import Facebook from '../../assets/facebook.png';
import Linken from '../../assets/linkedin.png';
import Insta from '../../assets/instagram.png';
import Twi from '../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}>
        <div className={styles.text_block}>
          <ul>
            <li className={styles.title_li}>
              <a href='/'>About Us</a>
            </li>
            <li className={styles.all_li}>
              <a href='/'>Our Company</a>
              <a href='/'>How we Work</a>
              <a href='/'>MVP</a>
              <a href='/'>Startup</a>
              <a href='/'>Careers</a>
              <a href='/'>Contact Us</a>
              <a href='/'>Blog</a>
            </li>
          </ul>
          <ul>
            <li className={styles.title_li}>
              <a href='/'>Services</a>
            </li>
            <li className={styles.all_li}>
              <a href='/'>iOS App Development</a>
              <a href='/'>Android app development</a>
              <a href='/'>IoT Application Development</a>
              <a href='/'>Software Development</a>
              <a href='/'>Mobile App Design</a>
              <a href='/'>React Native Development</a>
            </li>
          </ul>
          <ul>
            <li className={styles.title_li}>
              <a href='/'>Products</a>
            </li>
            <li className={styles.all_li}>
              <a href='/'>Mobile Game Apps</a>
              <a href='/'>HealthCare Apps</a>
              <a href='/'>Government Apps</a>
              <a href='/'>Enterprises Apps</a>
              <a href='/'>Events & Entertainment Apps</a>
            </li>
          </ul>
          <ul>
            <li className={styles.title_li}>
              <a href='/'>Contact Us</a>
            </li>
            <li className={styles.all_li}>
              <a href='/'>+55 90055-0011</a>
              <a href='/'>Street: Jhon Morgan 122</a>
              <a href='/'>gavian@mail.com</a>
              <a href='/'>EUA</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.rights}>
          <p>© 2022 Gavian Company</p>
        </div>
        <div className={styles.c_media}>
          <div className={styles.media_blocks}>
            <img src={Facebook} alt='/' />
          </div>
          <div className={styles.media_blocks}>
            <img src={Linken} alt='/' />
          </div>
          <div className={styles.media_blocks}>
            <img src={Insta} alt='/' />
          </div>
          <div className={styles.media_blocks}>
            <img src={Twi} alt='/' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
