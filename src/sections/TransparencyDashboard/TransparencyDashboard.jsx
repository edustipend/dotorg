import { paths, data as resData } from './constants';
import Container from '../../components/Container';
import { useCallback, useEffect, useState } from 'react';
import styles from './TransparencyDashboard.module.css';
import { DonationsFilter, Goals } from './internals';
import BreadCrumbs from '../../components/BreadCrumbs';
// import { getData } from '../../services/ApiClient';

const TransparencyDashboard = () => {
  const [data, setData] = useState('');

  const fetchTransactions = useCallback(() => {
    //   const res = getData('');
    const res = {
      data: resData
    };
    setData(res?.data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className={styles.contatiner}>
      <Container>
        <BreadCrumbs paths={paths} />
        <DonationsFilter />
        <Goals data={data} />
      </Container>
    </div>
  );
};

export default TransparencyDashboard;
