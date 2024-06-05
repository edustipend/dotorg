import { formatMoney } from '../../../utils/numberFormatter/formatMoney';
import styles from '../TransparencyDashboard.module.css';
import { TestId, donations } from '../../TransparencyDashboard/constants';
import PropTypes from 'prop-types';

export const DonationsFilter = ({ amountRaised, handleOptionChange }) => {
  return (
    <div className={styles.donationsFilter} data-testid={TestId.DONATIONS_FILTER_ID}>
      <div className={styles.filterTop}>
        <h1 className={styles.totalDonations}>{donations.title}</h1>
        <select className={styles.select} onChange={(e) => handleOptionChange(e)} data-testid={TestId.SELECT_OPTION}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
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
