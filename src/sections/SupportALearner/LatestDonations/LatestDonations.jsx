import React, { useState } from 'react';
import Container from '../../../components/Container';
import styles from '../LatestDonations/LatestDonations.module.css';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { ITEMS_PER_PAGE, Texts, donations } from './constants';

const LatestDonations = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(donations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDonations = donations.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const addPageNumber = (number) => {
      pageNumbers.push(
        <button key={number} onClick={() => changePage(number)} className={currentPage === number ? styles.currentPage : styles.otherPage}>
          {number}
        </button>
      );
    };

    const addEllipsis = () => {
      pageNumbers.push(
        <span key="ellipsis" className={styles.ellipsis}>
          ....
        </span>
      );
    };

    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      addPageNumber(i);
    }

    if (totalPages > 3) {
      addEllipsis();
    }

    if (totalPages > 3) {
      addPageNumber(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.headerContainer}>
          <Header size={'large'}>{Texts.HEADER}</Header>
          <Text content={Texts.SUB_HEADER} />
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

        <div className={styles.paginationWrap}>
          <div className={styles.pagination}>
            <button className={styles.Prev} disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
              {Texts.PREV_TEXT}
            </button>
            {renderPageNumbers()}
            <button className={styles.Next} disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
              {Texts.NEXT_TEXT}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestDonations;
