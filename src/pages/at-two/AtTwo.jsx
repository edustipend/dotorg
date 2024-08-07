import React from 'react';
import { TestId } from './constants';
import AtTwoHero from '../../sections/AtTwo/AtTwoHero/AtTwoHero';
import styles from './AtTwo.module.css';

function AtTwo() {
  return (
    <main data-testid={TestId.AT_TWO} className={styles.main}>
      <AtTwoHero />
    </main>
  );
}

export default AtTwo;
