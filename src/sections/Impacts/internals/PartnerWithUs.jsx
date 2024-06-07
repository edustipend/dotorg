import React from 'react';
import styles from '../impacts.module.css';
import { TestId, Texts } from '../constants';
import Header from '../../../components/Header';
import { NavHashLink } from 'react-router-hash-link';
import Button from '../../../components/Button';

const PartnerWithUs = () => {
  return (
    <div className={styles.partnerWrap}>
      <div className={styles.bgContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.partnerText}>
          <Header size={'large'} dataTest={TestId.PARTNER_HEAD_TEXT}>
            {Texts.PARTNER_HEADER}
          </Header>

          <p data-testid={TestId.PARTNER_SUB_HEADER_TEXT} className={styles.partnersubheader}>
            {Texts.PARTNER_SUB_HEADER}
          </p>

          <div className={styles.cta}>
            <NavHashLink
              to={{
                pathname: '/support-a-learner/donate'
              }}>
              <Button label={'Support a Learner'} size={'large'} type={'secondary'} />
            </NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
