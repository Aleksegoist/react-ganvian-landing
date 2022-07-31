import React from 'react';
import styles from './Featured.module.css';
import NameLogo from '../../assets/Ganvian.png';
import Logo from '../../assets/Logo.png';

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div>
        <h2 className='title'>
          Featured <span>Project</span>
        </h2>
      </div>
      <div className={styles.featured_block}>
        <div className={styles.left_block}>
          <div className={styles.logo_name}>
            <div>
              <img src={Logo} alt='/' />
            </div>
            <div>
              <img src={NameLogo} alt='/' />
            </div>
          </div>
          <h1 className='title'>Technology quickly and effectively</h1>
          <p className='desc'>Get a quote for your project with our company</p>
        </div>
        <div className={styles.right_block}>
          <div>
            <input type='email' placeholder='Your E-mail' />
          </div>
          <div className={styles.btn_send}>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
