import React from 'react';
import styles from '../Reports.module.css';
import { TestId } from '../constants';

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.pagination} data-testid={TestId.PAGINATION_CONTAINER}>
      {pageNumbers.map((page) => (
        <button key={page} className={page === currentPage ? styles.active : ''} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
