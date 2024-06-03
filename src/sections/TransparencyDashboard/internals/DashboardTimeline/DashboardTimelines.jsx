import { formatMoney } from '../../../../utils/numberFormatter/NumberFormatter';
import styles from './DashboardTimelines.module.css';

export const DashboardTimelines = () => {
  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.timelinesTitle}>Donations</h1>
      <table className={styles.table}>
        <thead>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.avatar}>OP</div>
              <span>Olamide</span>
            </td>
            <td>{formatMoney(50000)}</td>
            <td>Jan 4, 2024</td>
          </tr>
        </tbody>
        <tfoot>{/* Pagination */}</tfoot>
      </table>
    </div>
  );
};
