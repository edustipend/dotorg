import React from 'react';
import styles from '../impacts.module.css';
import { TestId, Texts } from '../constants';
import Header from '../../../components/Header';

const OurImpacts = () => {
  return (
    <div className={styles.headerWrap}>
      <Header size={'large'} dataTest={TestId.HEAD_TEXT}>
        {Texts.HEADER}
      </Header>

      <p data-testid={TestId.SUB_HEADER_TEXT} className={styles.subheader}>
        {Texts.SUB_HEADER}{' '}
      </p>

      <div className={styles.videoContainer}>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/8OQ0vLPRcqs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"></iframe>
      </div>
    </div>
  );
};

export default OurImpacts;
