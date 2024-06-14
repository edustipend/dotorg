import React, { useCallback, useEffect, useState } from 'react';
import Container from '../../../components/Container';
import styles from '../LatestDonations/LatestDonations.module.css';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { theCurrentPageNumber, TestId, Texts, itemsPerPage } from './constants';
import emoji from '../../../assets/donation.png';
import Pagination from '../../../components/Pagination/Pagination';
import { getData } from '../../../services/ApiClient';
import { getInitials } from '../../TransparencyDashboard/internals/DashboardTimeline/TableRow';

const LatestDonations = () => {
  const [currentPage, setCurrentPage] = useState(theCurrentPageNumber);
  const [currentDonations, setCurrentDonations] = useState([]);
  const [total, setTotal] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const fetchTransactions = useCallback(async () => {
    const timeline = await getData(`donate/timeline`);
    const timelines = timeline?.data?.donations?.map((donation) => ({
      id: donation._id,
      name: getInitials(donation?.donor?.name),
      backer: donation?.donor?.name,
      when: new Date(donation?.createdAt).toUTCString(),
      amount: donation?.transaction?.amount,
      cause: 'Edustipend'
    }));

    setCurrentDonations(timelines);

    const totalDonations = timelines.length;
    setTotal(totalDonations > 18 ? 3 : Math.ceil(totalDonations / itemsPerPage));
  }, [setCurrentDonations]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  if (currentDonations.length < 6) return null;

  return (
    <div className={styles.container} data-testid={TestId.WRAPPER}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrap}>
            <Header size={'large'} dataTest={TestId.HEAD_TEXT}>
              {Texts.HEADER}
            </Header>
            <img src={emoji} alt="emoji" data-testid={TestId.IMAGE} />
          </div>
          <Text dataTest={TestId.SUB_HEADER} content={Texts.SUB_HEADER} />
        </div>
        <div className={styles.donations}>
          {currentDonations?.slice(startIndex, endIndex).map((donation) => (
            <div key={donation.id} className={styles.donation}>
              <div className={styles.name}>
                <p>{donation.name}</p>
              </div>
              <div className={styles.donatedetails}>
                <p className={styles.backer}>{donation.backer}</p>
                <p className={styles.when}>{donation.when}</p>
                <p className={styles.donated}>
                  {Texts.DONATE_TEXT} <span className={styles.amount}>{donation.amount}</span> to {donation.cause}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Pagination currentPage={currentPage} onPageChange={changePage} showViewAll={true} totalPages={total} handleNextCall={() => {}} />
      </Container>
    </div>
  );
};

export default LatestDonations;
