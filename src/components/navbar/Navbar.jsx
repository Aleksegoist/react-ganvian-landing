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
            <ul
              className={
                nav
                  ? [styles.header_menu, styles.active].join(' ')
                  : [styles.header_menu]
              }
            >
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
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
