import React from 'react';
import styles from '../impacts.module.css';
import { TestId, ImpactLabels } from '../constants';
import Header from '../../../components/Header';
import Video from '../../../components/Video';

const OurImpacts = () => {
  return (
    <div className={styles.headerWrap}>
      <Header size={'large'} dataTest={TestId.HEAD_TEXT}>
        {ImpactLabels.HEADER}
      </Header>
      <p data-testid={TestId.SUB_HEADER_TEXT} className={styles.subheader}>
        {ImpactLabels.SUB_HEADER}
      </p>
      <Video src={ImpactLabels.VIDEO} isIFrame={true} />
    </div>
  );
};

export default OurImpacts;
