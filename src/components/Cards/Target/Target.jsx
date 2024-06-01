import React from 'react';
import styles from './Target.module.css';
import PropTypes from 'prop-types';
import { Testid } from './constants';

const Target = ({ icon, value, category }) => {
  return (
    <div className={styles.target} data-testid={Testid.targetContainer}>
      <div className={styles.icon}>
        <img src={icon} alt={icon} data-testid={Testid.icon} />
      </div>
      <div className={styles.desc}>
        <h1 className={styles.value} data-testid={Testid.value}>
          {value}
        </h1>
        <p className={styles.category} data-testid={Testid.category}>
          {category}
        </p>
      </div>
    </div>
  );
};

export default Target;

Target.propTypes = {
  value: PropTypes.string,
  category: PropTypes.string,
  icon: PropTypes.string
};
