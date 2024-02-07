import React from 'react';
import styles from './HeroSection.module.css';
import beneficiary from '../../../assets/aishabeneficiary.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quotes}>
        <img src={beneficiary} alt="beneficiary-image-and-quote" className={styles.benimage} />
      </div>
      <div className={styles.cta}>
        <Header size={'small'} className={styles.header}>
          Great futures are built with a little charity{' '}

        </Header>
        <Header size={'large'} className={styles.headerweb}>
          Great futures are built with a little charity{' '}

        </Header>
        <Text
          content={'Bridge the Educational Gap by providing resources to Transform Lives and Shape a Brighter Future for Learners Worldwide.'}
          className={styles.text}
        />
        <div className={styles.ctabtns}>
          <Button label={'Support A Learner'} size={'small'} type={'secondary'} />
          <Button label={'How much can I donate?'} size={'small'} type={'plain'} />
        </div>
      </div>
    </div>
  );
};
