/* eslint-disable react-hooks/exhaustive-deps */
import { TestId, isCampaignActive, paths, resData } from './constants';
import Container from '../../components/Container';
import { useEffect, useState } from 'react';
import { DashboardTimelines, DonationsFilter, Goals } from './internals';
import BreadCrumbs from '../../components/BreadCrumbs';
import { DONATION, getData } from '../../services/ApiClient';
import { getStartDate } from '../../utils/dateTimeUtils/dateTimeUtil';
import styles from './TransparencyDashboard.module.css';

export const TransparencyDashboard = () => {
  const [frequency, setFrequency] = useState('thisWeek');
  const [currency, setCurrency] = useState('NGN');
  const [data, setData] = useState(resData);
  const [nextCall, setNextCall] = useState('');
  const [date, setDate] = useState({
    startDate: getStartDate('thisWeek'),
    endDate: getStartDate('tommorow').toISOString()
  });

  const handleOptionChange = async (e, type) => {
    const value = e.target.value;

    if (type === 'currency') {
      setCurrency(value);
      console.log(currency);
      return;
    }

    setFrequency(value);

    const calculatedStartDate = getStartDate(value);
    const calculatedEndDate = /^\d{4}$/.test(value) ? new Date(`${Number(value) + 1}-01-01`) : getStartDate('tommorow');

    const newDate = {
      startDate: calculatedStartDate.toISOString(),
      endDate: calculatedEndDate.toISOString()
    };

    setDate(newDate);

    if (value !== 'allTime') {
      const params = `?startDate=${newDate.startDate}&endDate=${newDate.endDate}`;
      const range = await getData(`${DONATION}/range${params}`);

      setData((prevData) => ({
        ...prevData,
        amountRaised: range?.data?.totalAmount
      }));
    } else {
      const range = await getData(`${DONATION}/range`);
      setData((prevData) => ({
        ...prevData,
        amountRaised: range?.data?.totalAmount
      }));
    }
  };

  const fetchOverview = async () => {
    const overview = await getData(`${DONATION}/overview`);
    setData((prevData) => ({
      ...prevData,
      total: overview?.data?.donationCount || prevData.total,
      contributors: overview?.data?.uniqueDonorsCount || prevData.contributors,
      raised: overview?.data?.totalAmount || prevData.raised,
      completed: Math.round((overview?.data?.totalAmount / prevData.goal) * 100)
    }));
  };

  const fetchTimeline = async () => {
    const timeline = await getData(`${DONATION}/timeline?${nextCall || ''}`);
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
      donations: uniqueDonations,
      next: `start=${timeline?.data?.next}` || prevData.next
    }));
  };

  const fetchRange = async () => {
    if (!frequency) return;
    if (frequency !== 'allTime' && (!date?.startDate || !date?.endDate)) return;
    const params = frequency === 'allTime' ? '' : `?startDate=${date?.startDate}&endDate=${date?.endDate}`;
    const range = await getData(`${DONATION}/range${params}`);

    setData((prevData) => ({
      ...prevData,
      amountRaised: range?.data?.totalAmount
    }));
  };

  useEffect(() => {
    const calculatedStartDate = getStartDate(frequency);
    const calculatedEndDate = /^\d{4}$/.test(frequency) ? new Date(`${Number(frequency) + 1}-01-01`) : getStartDate('tommorow');

    setDate({
      startDate: calculatedStartDate.toISOString(),
      endDate: calculatedEndDate.toISOString()
    });
  }, [frequency]);

  useEffect(() => {
    fetchOverview();
  }, []);

  useEffect(() => {
    fetchTimeline();
  }, [nextCall]);

  useEffect(() => {
    fetchRange();
  }, [frequency, date]);

  return (
    <div className={styles.container} data-testid={TestId.TRANSPARENCY_DASHBOARD_ID}>
      <Container>
        <BreadCrumbs paths={paths} />
        <div className={styles.topSection}>
          <DonationsFilter amountRaised={data?.amountRaised} handleOptionChange={handleOptionChange} />
          <Goals data={data} isCampaignActive={isCampaignActive} />
        </div>
        <DashboardTimelines donations={data?.donations} total={data?.total} next={data?.next} setNextCall={setNextCall} />
      </Container>
    </div>
  );
};
