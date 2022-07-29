import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/Ganvian.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className='container'>
        <div className={styles.wrapper}>
          <div>
            <img className={styles.logo} src={Logo} alt='/' />
          </div>
          <nav>
            <ul className={styles.header_menu}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Services</a>
              </li>
              <li>
                <a href='/'>About Us</a>
              </li>
              <li>
                <a href='/'>Technologies</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
