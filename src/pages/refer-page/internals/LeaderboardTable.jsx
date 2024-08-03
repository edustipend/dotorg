import { useCallback, useEffect, useState } from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';
import TableHead from '../../../components/Table/TableHead';
import referralPageCopy, { TestId } from '../constants';
import Pagination from '../../../components/Pagination/Pagination';
import { getData, REFERRAL_BY_AMOUNT, REFERRAL_BY_COUNT } from '../../../services/ApiClient';
import styles from './Leaderboard.module.css';
const { tableHeads, itemToRender, REFERRAL_COUNT } = referralPageCopy;

export const LeaderboardTable = ({ referralType }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [referralByAmount, setReferralByAmount] = useState([]);
  const [referralByCount, setReferralByCount] = useState([]);
  const startIndex = (currentPage - 1) * itemToRender;
  const endIndex = startIndex + itemToRender;
  const referrals = referralType === REFERRAL_COUNT ? referralByCount : referralByAmount;
  const leaderboard = referrals?.slice(startIndex, endIndex);
  const total = leaderboard?.length >= 20 ? 20 : leaderboard?.length;
  const totalPages = Math.ceil(total / itemToRender);
  const isMobile = window.innerWidth <= 768;
  const tableHeadings = isMobile ? tableHeads.mobile : tableHeads[referralType];

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const fetchLeaderboard = useCallback(async () => {
    const byAmount = await getData(REFERRAL_BY_AMOUNT);
    const byCount = await getData(REFERRAL_BY_COUNT);
    setReferralByAmount(byAmount?.data);
    setReferralByCount(byCount?.data);
  }, []);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  return (
    <div className={styles.tableContainer} data-testid={TestId.LEADERBOARD_TABLE}>
      <table className={styles.table}>
        <thead>
          {tableHeadings?.map((title, i) => (
            <TableHead className={i === 1 ? styles.leftAlign : ''} title={title} key={i} />
          ))}
        </thead>
        <tbody>
          {leaderboard?.map((item, i) => (
            <TableRow item={{ ...item, index: i + 1 }} key={i} />
          ))}
        </tbody>
        <tfoot>
          <td colSpan={'100%'} className={styles.paginationContainer}>
            <Pagination currentPage={currentPage} onPageChange={changePage} totalPages={totalPages} />
          </td>
        </tfoot>
      </table>
    </div>
  );
};

LeaderboardTable.propTypes = {
  donations: PropTypes.array,
  total: PropTypes.number,
  referralType: PropTypes.string
};
