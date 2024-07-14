import PropTypes from 'prop-types';
import { formatMoney } from '../../../utils/numberFormatter/formatMoney';
import { TestId, data } from '../constants';
import styles from '../TransparencyDashboard.module.css';

export const DonationsFilter = ({ amountRaised, handleOptionChange }) => {
  return (
    <div className={styles.donationsFilter} data-testid={TestId.DONATIONS_FILTER_ID}>
      <div className={styles.filterTop}>
        <h1 className={styles.totalDonations}>{data.title}</h1>
        <select className={styles.select} onChange={(e) => handleOptionChange(e)} data-testid={TestId.SELECT_OPTION} defaultValue={'thisWeek'}>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="allTime">All Time</option>
        </select>
      </div>
      <div>
        <h1 className={styles.donatedAmount} data-testid={TestId.AMOUNT_RAISED}>
          {formatMoney(amountRaised)}
        </h1>
      </div>
    </div>
  );
};

DonationsFilter.propTypes = {
  amountRaised: PropTypes.number,
  handleOptionChange: PropTypes.func
};
