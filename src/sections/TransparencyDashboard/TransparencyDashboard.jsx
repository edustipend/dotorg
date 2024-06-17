import { TestId, paths, resData } from './constants';
import Container from '../../components/Container';
import { useCallback, useEffect, useState } from 'react';
import { DashboardTimelines, DonationsFilter, Goals } from './internals';
import BreadCrumbs from '../../components/BreadCrumbs';
import { getData } from '../../services/ApiClient';
import { getStartDate } from '../../utils/dateTimeUtils/dateTimeUtil';
import styles from './TransparencyDashboard.module.css';

export const TransparencyDashboard = () => {
  const [frequency, setFrequency] = useState('weekly');
  const [data, setData] = useState(resData);
  const [nextCall, setNextCall] = useState('');
  const [date, setDate] = useState({
    startDate: getStartDate('weekly').toISOString().split('T')[0],
    endDate: getStartDate('tommorow').toISOString().split('T')[0]
  });
  const handleOptionChange = (e) => {
    const frequency = e.target.value;
    setFrequency(frequency);
  };

  const fetchTransactions = useCallback(async () => {
    const overview = await getData('donate/overview');
    const timeline = await getData(`donate/timeline?${nextCall || ''}`);
    const range = await getData(`donate/range?startDate=${date.startDate}&endDate=${date.endDate}`);

    const timelines = timeline?.data?.donations?.map((donation) => ({
      id: donation._id,
      name: donation?.donor?.name,
      amount: donation?.transaction?.amount,
      date: donation?.createdAt
    }));

    setData((prevData) => ({
      ...prevData,
      total: overview?.data?.donationCount || prevData.total,
      contributors: overview?.data?.uniqueDonorsCount || prevData.contributors,
      raised: overview?.data?.totalAmount || prevData.raised,
      completed: Math.round((overview?.data?.totalAmount / prevData.goal) * 100),
      donations: [...prevData.donations, ...(timelines || [])],
      amountRaised: range?.data?.totalAmount,
      next: `?start=${timeline?.data?.next}` || prevData.next
    }));
  }, [date.endDate, date.startDate, nextCall]);

  useEffect(() => {
    const calculatedStartDate = getStartDate(frequency);

    setDate((prev) => ({
      ...prev,
      startDate: calculatedStartDate.toISOString().split('T')[0]
    }));

    fetchTransactions();
  }, [fetchTransactions, frequency]);

  return (
    <div className={styles.container} data-testid={TestId.TRANSPARENCY_DASHBOARD_ID}>
      <Container>
        <BreadCrumbs paths={paths} />
        <div className={styles.topSection}>
          <DonationsFilter amountRaised={data?.amountRaised} handleOptionChange={handleOptionChange} />
          <Goals data={data} />
        </div>
        <DashboardTimelines donations={data?.donations} total={data?.total} next={data?.next} setNextCall={setNextCall} />
      </Container>
    </div>
  );
};
