import React from 'react';
import { TestId } from './constants';
import AtTwoHero from '../../sections/AtTwo/AtTwoHero/AtTwoHero';
import HowToWin from '../../sections/AtTwo/HowToWin';
import Leaderboard from '../refer-page/internals';
import BeneficiaryTestimonies from '../../sections/SupportALearner/BeneficiaryTestimonies/BeneficiaryTestimonies';
import styles from './AtTwo.module.css';

export const AtTwo = () => {
  return (
    <main data-testid={TestId.AT_TWO} className={styles.main}>
      <AtTwoHero />
      <HowToWin />
      <Leaderboard />
      <BeneficiaryTestimonies />
    </main>
  );
};
