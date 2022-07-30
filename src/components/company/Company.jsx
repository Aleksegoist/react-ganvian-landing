import React from 'react';
import styles from './Company.module.css';
import Decoration_Company from '../../assets/decoration_company_left.png';
import People_Company from '../../assets/people_company.png';

const Company = () => {
  return (
    <div className={styles.company}>
      <div className={styles.image}>
        <img src={Decoration_Company} alt='/' />
      </div>
      <div>
        <h2 className='header'>
          Our <span>Company</span>
        </h2>
      </div>

      <div className={styles.company_text}>
        <div className={styles.people_image}>
          <img src={People_Company} alt='/' />
        </div>

        <div>
          <h1 className='title'>
            A company specializing in <span>application</span> and{' '}
            <span>website</span> development
          </h1>
          <p className='desc'>
            Canada’s best minds under one roof. The architects of a digital
            tomorrow, united under the banner of AppStudio.
          </p>
          <div className='btn'>
            <button>Our Company</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
