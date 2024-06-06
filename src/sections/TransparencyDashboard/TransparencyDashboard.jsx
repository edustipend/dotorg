import { TestId, paths, data as resData } from './constants';
import Container from '../../components/Container';
import { useCallback, useEffect, useState } from 'react';
import { DashboardTimelines, DonationsFilter, Goals } from './internals';
import BreadCrumbs from '../../components/BreadCrumbs';
// import { getData } from '../../services/ApiClient';

import styles from './TransparencyDashboard.module.css';

export const TransparencyDashboard = () => {
  const [target, setTarget] = useState('daily');
  const [data, setData] = useState('');
  const [amountRaised, setAmountRaised] = useState({});
  const handleOptionChange = (e) => {
    const target = e.target.value;
    setTarget(target);
  };
  const fetchTransactions = useCallback(() => {
    //   const res = getData('');
    const res = {
      data: resData
    };
    setData(res?.data);

    setAmountRaised(res.data[target]);
  }, [target]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <div className={styles.container} data-testid={TestId.TRANSPARENCY_DASHBOARD_ID}>
      <Container>
        <BreadCrumbs paths={paths} />
        <div className={styles.topSection}>
          <DonationsFilter amountRaised={amountRaised} handleOptionChange={handleOptionChange} />
          <Goals data={data} />
        </div>
        <DashboardTimelines donations={data.donations} />
      </Container>
    </div>
  );
};
