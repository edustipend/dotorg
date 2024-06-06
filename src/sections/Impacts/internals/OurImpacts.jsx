import React from 'react';
import styles from '../impacts.module.css';
import { TestId, Texts } from '../constants';
import Header from '../../../components/Header';
import Video from '../../../components/Video';

const OurImpacts = () => {
  return (
    <div className={styles.headerWrap}>
      <Header size={'large'} dataTest={TestId.HEAD_TEXT}>
        {Texts.HEADER}
      </Header>

      <p data-testid={TestId.SUB_HEADER_TEXT} className={styles.subheader}>
        {Texts.SUB_HEADER}
      </p>

      <Video src={Texts.VIDEO} isIFrame={true} />
    </div>
  );
};

export default OurImpacts;
