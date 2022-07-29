import React from 'react';
import styles from './Company.module.css';
import Decoration_left from '../../assets/decoration_company_left.png';
import People_company from '../../assets/people_company.png';

const Company = () => {
  return (
    <div className={styles.company}>
      <div className={styles.title}>
        <h1>
          Our <span>Company</span>
        </h1>
        <div className={styles.left_layer}>
          <img src={Decoration_left} alt='/' />
        </div>
      </div>

      <div className={styles.company_text_image}>
        <div className={styles.image_people}>
          <img src={People_company} alt='/' />
        </div>

        <div className={styles.company_text}>
          <h1>
            A company specializing in <span>application</span> and
            <span> website</span> development
          </h1>

          <div className={styles.company_desc}>
            <p>
              Canada’s best minds under one roof. The architects of a digital
              tomorrow, united under the banner of AppStudio.
            </p>
          </div>

          <div className={styles.company_btn}>
            <button>Our Company</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
