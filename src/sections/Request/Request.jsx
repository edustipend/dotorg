import React from 'react';
import { Button } from '../../components/Button/Button';
import { title } from './internals/constants';
import Container from '../../components/Container/container';
import rocket from '../../assets/rocket emoji 3.svg';
import styles from './Request.module.css';
import clock from '../../assets/clock.png'
import blobLeft from '../../assets/blob-left.png'
import blobRight from '../../assets/blob-right.png'
import { testConstants } from './internals/constants';
const { componentTestId } = testConstants

export const Request = () => {
  return (
    <main data-testid={componentTestId} className={styles.main}>
      <Container>
        <div className={styles.requestContent}>
          <h2 data={title} className={styles.title}>{title}</h2>
          <Button label="Request Now" size='large' effect='secondary' />
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

export default Request;
