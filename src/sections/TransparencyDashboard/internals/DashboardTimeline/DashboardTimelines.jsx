import TableRow from './TableRow';
import TableHead from './TableHead';
import { donations, tableHeads, title } from './constants';

import styles from './DashboardTimelines.module.css';

export const DashboardTimelines = () => {
  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.timelinesTitle}>{title}</h1>
      <table className={styles.table}>
        <thead>
          {tableHeads.map((title) => (
            <TableHead title={title} key={title} />
          ))}
        </thead>
        <tbody>
          {donations.map((item, i) => (
            <TableRow item={item} key={i} />
          ))}
        </tbody>
        <tfoot>{/* Pagination */}</tfoot>
      </table>
    </div>
  );
};
