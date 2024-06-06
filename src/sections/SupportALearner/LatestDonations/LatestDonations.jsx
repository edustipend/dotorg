import React, { useState } from 'react';
import Container from '../../../components/Container';
import styles from '../LatestDonations/LatestDonations.module.css';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { theCurrentPageNumber, itemsPerPage, TestId, Texts } from './constants';
import { donations } from './donations.mock';
import emoji from '../../../assets/donation.png';
import Pagination from '../../../components/Pagination/Pagination';

const LatestDonations = () => {
  const [currentPage, setCurrentPage] = useState(theCurrentPageNumber);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDonations = donations.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
  };

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
          {currentDonations.map((donation) => (
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
        <Pagination currentPage={currentPage} onPageChange={changePage} showViewAll={true} totalPages={3} />
      </Container>
    </div>
  );
};

export default LatestDonations;
