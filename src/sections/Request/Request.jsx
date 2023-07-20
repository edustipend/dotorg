import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import rocket from '../../assets/rocket emoji 3.svg';
import styles from './Request.module.css';
import clock from '../../assets/clock.png';
import blobLeft from '../../assets/blob-left.png';
import blobRight from '../../assets/blob-right.png';
import { TestId, REQUEST_SECTION_HEADER } from './constants';
import Header from '../../components/Header';

export const Request = () => {
  return (
    <main data-testid={TestId.REQUEST_SECTION} className={styles.main}>
      <Container>
        <div className={styles.requestContent}>
          <Header dataTest={TestId.REQUEST_SECTION_HEADER} className={`v2-section-header ${styles.title}`}>
            {REQUEST_SECTION_HEADER}
          </Header>
          <Button label="Request Now" size="large" effect="secondary" />
          <img src={rocket} alt="rocket_emoji" className={styles.rocket} />
        </div>
      </Container>
      <div>
        <img src={clock} alt="clock" className={styles.clockImg} />
      </div>
      <img src={blobLeft} alt="blobLeft" className={`${styles.blob} ${styles.blobLeft}`} />
      <img src={blobRight} alt="blobRight" className={`${styles.blob} ${styles.blobRight}`} />
    </main>
  );
};
