import React from 'react';
import { TestId } from './constants';
import Leaderboard from '../refer-page/internals';
import styles from './AtTwo.module.css';
import BeneficiaryTestimonies from '../../sections/SupportALearner/BeneficiaryTestimonies/BeneficiaryTestimonies';

export const AtTwo = () => {
  return (
    <main data-testid={TestId.AT_TWO} className={styles.main}>
      {/* 
        All the different sections go here
      */}
      <Leaderboard />
      <BeneficiaryTestimonies />
    </main>
  );
};
