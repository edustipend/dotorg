import { donations, paths, data as resData } from './constants';
import Container from '../../components/Container';
import { useCallback, useEffect, useState } from 'react';
import styles from './TransparencyDashboard.module.css';
import { DonationsFilter, Goals } from './internals';
import BreadCrumbs from '../../components/BreadCrumbs';
// import { getData } from '../../services/ApiClient';

const TransparencyDashboard = () => {
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
  }, []);
  const fetchAmountRaised = useCallback(() => {
    //  const res = getData(`donations?amountRaised=${target}`);
    setAmountRaised(donations[target]);
  }, [target]);

  useEffect(() => {
    fetchTransactions();
    fetchAmountRaised();
  }, [fetchAmountRaised, fetchTransactions]);

  return (
    <div className={styles.contatiner}>
      <Container>
        <BreadCrumbs paths={paths} />
        <DonationsFilter amountRaised={amountRaised} handleOptionChange={handleOptionChange} />
        <Goals data={data} />
      </Container>
    </div>
  );
};

export default TransparencyDashboard;
