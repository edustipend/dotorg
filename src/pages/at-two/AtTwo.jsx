import React from 'react';
import { TestId } from './constants';
import AtTwoHero from '../../sections/AtTwo/AtTwoHero/AtTwoHero';
import Leaderboard from '../refer-page/internals';
import styles from './AtTwo.module.css';
import BeneficiaryTestimonies from '../../sections/SupportALearner/BeneficiaryTestimonies/BeneficiaryTestimonies';

function AtTwo() {
  return (
    <main data-testid={TestId.AT_TWO} className={styles.main}>
      <AtTwoHero />

      <Leaderboard />
      <BeneficiaryTestimonies />
    </main>
  );
}

export default AtTwo;
