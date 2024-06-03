import { formatMoney } from '../../../utils/numberFormatter/NumberFormatter';
import styles from '../TransparencyDashboard.module.css';
import { donations } from '../../TransparencyDashboard/constants';

export const DonationsFilter = () => {
  return (
    <div className={styles.donationsFilter}>
      <div className={styles.filterTop}>
        <h1 className={styles.totalDonations}>{donations.title}</h1>
        <select className={styles.select}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div>
        <h1 className={styles.donatedAmount}>{formatMoney(donations.raised)}</h1>
      </div>
    </div>
  );
};
