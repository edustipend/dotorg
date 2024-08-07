import React from 'react';
import { TestId } from './constants';

import styles from './AtTwo.module.css';
import BeneficiaryTestimonies from '../../sections/SupportALearner/BeneficiaryTestimonies/BeneficiaryTestimonies';
import Leaderboard from '../refer-page/internals';
import AtTwoHero from '../../sections/AtTwo/AtTwoHero/AtTwoHero';

export const AtTwo = () => {
  return (
    <main data-testid={TestId.AT_TWO} className={styles.main}>
      {/* 
        All the different sections go here
      */}
      <AtTwoHero />
      <Leaderboard />
      <BeneficiaryTestimonies />
    </main>
  );
};
