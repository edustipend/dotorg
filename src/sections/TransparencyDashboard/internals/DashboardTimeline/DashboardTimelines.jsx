import TableRow from './TableRow';
import TableHead from './TableHead';
import { itemToRender, tableHeads, title } from './constants';
import Pagination from '../../../../components/Pagination/Pagination';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardTimelines.module.css';
import { TestId } from '../../constants';

export const DashboardTimelines = ({ donations, total, next, setNextCall }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(total / itemToRender);
  const startIndex = (currentPage - 1) * itemToRender;
  const endIndex = startIndex + itemToRender;
  const currentDonations = donations?.slice(startIndex, endIndex);
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const handleNextCall = () => {
    setNextCall(next);
  };

  return (
    <div className={styles.tableContainer} data-testid={TestId.TABLE_ID}>
      <h1 className={styles.timelinesTitle}>{title}</h1>
      <table className={styles.table}>
        <thead>
          {tableHeads.map((title, i) => (
            <TableHead title={title} key={i} />
          ))}
        </thead>
        <tbody>
          {currentDonations?.map((item, i) => (
            <TableRow item={item} key={i} />
          ))}
        </tbody>
        <tfoot>
          <td colSpan={'100%'} className={styles.paginationContainer}>
            <Pagination currentPage={currentPage} onPageChange={changePage} totalPages={totalPages} handleNextCall={handleNextCall} />
          </td>
        </tfoot>
      </table>
    </div>
  );
};

DashboardTimelines.propTypes = {
  donations: PropTypes.array,
  total: PropTypes.number,
  next: PropTypes.string,
  setNextCall: PropTypes.func
};
