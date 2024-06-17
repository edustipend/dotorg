import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';
import { Texts } from './constants';
import { Link } from 'react-router-dom';

const Pagination = ({ onPageChange, currentPage, showViewAll, totalPages, handleNextCall }) => {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
    if (pageNumber > currentPage && pageNumber % 3 === 0) {
      handleNextCall && handleNextCall();
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const addPageNumber = (number) => {
      pageNumbers.push(
        <button key={number} onClick={() => handlePageChange(number)} className={currentPage === number ? styles.currentPage : styles.otherPage}>
          {number}
        </button>
      );
    };

    const addEllipsis = (key) => {
      pageNumbers.push(
        <span key={key} className={styles.ellipsis}>
          ...
        </span>
      );
    };

    const leftSide = Math.max(1, currentPage - 1);
    const rightSide = Math.min(totalPages, currentPage + 1);

    if (leftSide > 1) {
      addPageNumber(1);
      if (leftSide > 2) {
        addEllipsis('left-ellipsis');
      }
    }

    for (let i = leftSide; i <= rightSide; i++) {
      addPageNumber(i);
    }

    if (rightSide < totalPages) {
      if (rightSide < totalPages - 1) {
        addEllipsis('right-ellipsis');
      }
      addPageNumber(totalPages);
    }

    return pageNumbers;
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    handlePageChange(nextPage);
  };

  return (
    <div className={styles.paginationWrap}>
      <div className={styles.pagination}>
        <button className={styles.Prev} disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          {Texts.PREV_TEXT}
        </button>
        {renderPageNumbers()}
        {showViewAll ? (
          <Link to={Texts.PATH}>
            <button className={styles.Next}>{Texts.VIEW_ALL_TEXT}</button>
          </Link>
        ) : (
          <button className={styles.Next} disabled={currentPage === totalPages} onClick={handleNext}>
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
  showViewAll: PropTypes.bool,
  totalPages: PropTypes.number.isRequired,
  handleNextCall: PropTypes.func
};

export default Pagination;
