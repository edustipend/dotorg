import React from 'react';
import Header from '../../../components/Header';
import { TestId, Texts } from '../constants';
import styles from '../impacts.module.css';
import ImpactNumber from '../../../components/ImpactNumbers';
import { NavHashLink } from 'react-router-hash-link';
import Button from '../../../components/Button';

const Overview = () => {
  return (
    <div className={styles.OverviewWrap}>
      <Header size={'medium'} dataTest={TestId.OVERVIEW_TEXT} className={styles.overviewheader}>
        {Texts.OVERVIEW}
      </Header>

      <div className={styles.ImpactNumbersWrap}>
        <ImpactNumber amount="₦238,700" label="TOTAL DISBURSED" />
        <ImpactNumber amount="400" label="BENEFICIARIES" />
        <ImpactNumber amount="₦238,700" label="TOTAL DISBURSED" />
        <ImpactNumber amount="400" label="BENEFICIARIES" />
        <ImpactNumber amount="₦238,700" label="TOTAL DISBURSED" />
        <ImpactNumber amount="400" label="BENEFICIARIES" />
      </div>

      <div className={styles.ImpactBtn}>
        <NavHashLink
          to={{
            pathname: Texts.PATH
          }}>
          <Button label={'View Impact Report'} size={'medium'} type={'secondary'} />
        </NavHashLink>
      </div>
    </div>
  );
};

export default Overview;
