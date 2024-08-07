import React from 'react';
import Header from '../../../components/Header';
import { ImpactLabels, TestId, beneficiaries, totalAmount } from '../constants';
import styles from '../impacts.module.css';
import ImpactNumber from '../../../components/ImpactNumbers';
import { NavHashLink } from 'react-router-hash-link';
import Button from '../../../components/Button';
import { formatMoney } from '../../../utils/numberFormatter/formatMoney';

const Overview = () => {
  const getTotalDisbursedAmount = () => {
    return formatMoney(totalAmount ?? 0);
  };

  return (
    <div className={styles.OverviewWrap}>
      <Header size="medium" dataTest={TestId.OVERVIEW_TEXT} className={styles.overviewheader}>
        {ImpactLabels.OVERVIEW}
      </Header>

      <div className={styles.ImpactNumbersWrap}>
        <ImpactNumber amount={beneficiaries} label={ImpactLabels.BENEFICIARIES} />
        <ImpactNumber amount="36" label={ImpactLabels.STATES_REACHED} />
        <ImpactNumber amount="5+" label={ImpactLabels.COMMUNITY_PARTNERSHIPS} />
        <ImpactNumber amount={getTotalDisbursedAmount()} label={ImpactLabels.TOTAL_DISBURSED} />
      </div>

      <div className={styles.ImpactBtn}>
        <NavHashLink
          to={{
            pathname: ImpactLabels.REPORTS_PATH
          }}
        >
          <Button label={ImpactLabels.VIEW_REPORT_BUTTON_LABEL} size="medium" type="secondary" />
        </NavHashLink>
      </div>
    </div>
  );
};

export default Overview;
