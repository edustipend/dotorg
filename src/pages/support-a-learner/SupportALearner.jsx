import React from 'react';
import styles from './SupportALearner.module.css';
import DonationRange from '../../sections/SupportALearner/DonationRange';

export const SupportALearner = () => {
  return (
    <div className={styles.supportalearnercontainer}>
      <DonationRange />
    </div>
  );
};
