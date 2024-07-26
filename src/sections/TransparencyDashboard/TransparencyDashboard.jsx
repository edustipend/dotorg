import { TestId, paths, resData } from './constants';
import Container from '../../components/Container';
import { useCallback, useEffect, useState } from 'react';
import { DashboardTimelines, DonationsFilter, Goals } from './internals';
import BreadCrumbs from '../../components/BreadCrumbs';
import { DONATION, getData } from '../../services/ApiClient';
import { getStartDate } from '../../utils/dateTimeUtils/dateTimeUtil';
import styles from './TransparencyDashboard.module.css';

export const TransparencyDashboard = () => {
  const [frequency, setFrequency] = useState('thisWeek');
  const [data, setData] = useState(resData);
  const [nextCall, setNextCall] = useState('');
  const [date, setDate] = useState({
    startDate: getStartDate('thisWeek'),
    endDate: getStartDate('tommorow').toISOString()
  });
  const handleOptionChange = (e) => {
    const frequency = e.target.value;
    setFrequency(frequency);
  };

  const fetchTransactions = useCallback(async () => {
    const params = frequency === 'allTime' ? '' : `?startDate=${date.startDate}T00:00:00&endDate=${date.endDate}`;
    const overview = await getData(`${DONATION}/overview`);
    const timeline = await getData(`${DONATION}/timeline?${nextCall || ''}`);
    const range = await getData(`${DONATION}/range${params}`);

    const newDonations = timeline?.data?.donations?.map((donation) => ({
      id: donation._id,
      name: donation?.donor?.name,
      amount: donation?.transaction?.amount,
      date: donation?.createdAt
    }));
    const uniqueDonations = Array.from(new Set([...data.donations, ...(newDonations || [])].map((donation) => donation.id))).map((id) => {
      return [...data.donations, ...(newDonations || [])].find((donation) => donation.id === id);
    });

    setData((prevData) => ({
      ...prevData,
      total: overview?.data?.donationCount || prevData.total,
      contributors: overview?.data?.uniqueDonorsCount || prevData.contributors,
      raised: overview?.data?.totalAmount || prevData.raised,
      completed: Math.round((overview?.data?.totalAmount / prevData.goal) * 100),
      donations: uniqueDonations,
      amountRaised: range?.data?.totalAmount,
      next: `start=${timeline?.data?.next}` || prevData.next
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.endDate, date.startDate, frequency, nextCall]);

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
