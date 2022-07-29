import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/Ganvian.png';
import { RiArrowDownSLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles.logo}>
          <img src={Logo} alt='/' />
        </div>

        <ul className={styles.menu}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Services</a>
          </li>
          <li>
            <a href='/Films'>About Us</a>
          </li>
          <li>
            <a href='/'>Technologies</a>
          </li>
        </ul>

        <ul className={styles.menu_right}>
          <li>
            <a href='/'>En</a>
          </li>
          <li>
            <a href='/'>
              <RiArrowDownSLine />
            </a>
          </li>
          <div className={styles.btn}>
            <button>Contact Us</button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
