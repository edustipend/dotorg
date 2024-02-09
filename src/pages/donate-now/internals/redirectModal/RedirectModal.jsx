import React from 'react';
import styles from './RedirectModal.module.css';
import Loader from '../../../../components/Loader';

export const RedirectModal = () => {
  const wait = 'Please wait while we redirect you to the payment system';
  return (
    <main className={styles.main}>
      <Loader size="medium" />
      <p className={styles.info}>{wait}</p>
    </main>
  );
};
