import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';
import { Texts } from './constants';
import { donations } from '../../sections/SupportALearner/LatestDonations/donations.mock';
import { Link } from 'react-router-dom';

const Pagination = ({ onPageChange, currentPage, itemsPerPage, showViewAll, noOfPages }) => {
  const totalPages = Math.ceil(noOfPages ? noOfPages : donations.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const addPageNumber = (number) => {
      pageNumbers.push(
        <button key={number} onClick={() => onPageChange(number)} className={currentPage === number ? styles.currentPage : styles.otherPage}>
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

    const maxPagesToShow = Math.min(noOfPages || 3, totalPages);

    for (let i = 1; i <= maxPagesToShow; i++) {
      addPageNumber(i);
    }

    if (totalPages > maxPagesToShow) {
      addEllipsis();
      addPageNumber(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className={styles.paginationWrap}>
      <div className={styles.pagination}>
        <button className={styles.Prev} disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          {Texts.PREV_TEXT}
        </button>
        {renderPageNumbers()}
        {showViewAll ? (
          <Link to={Texts.PATH}>
            <button className={styles.Next}>{Texts.VIEW_ALL_TEXT}</button>
          </Link>
        ) : (
          <button className={styles.Next} disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
            {Texts.NEXT_TEXT}
          </button>
        )}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  showViewAll: PropTypes.bool,
  noOfPages: PropTypes.number
};

export default Pagination;
