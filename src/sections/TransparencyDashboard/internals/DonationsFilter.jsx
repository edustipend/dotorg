import PropTypes from 'prop-types';
import { formatMoney } from '../../../utils/numberFormatter/formatMoney';
import { TestId, data } from '../constants';
import { CURRENCY_OPTIONS, DATE_RANGE_OPTIONS } from './DashboardTimeline/constants';
import styles from '../TransparencyDashboard.module.css';

export const DonationsFilter = ({ amountRaised, handleOptionChange }) => {
  return (
    <div className={styles.donationsFilter} data-testid={TestId.DONATIONS_FILTER_ID}>
      <div className={styles.filterTop}>
        <h1 className={styles.totalDonations}>{data.title}</h1>
        <div className={styles.selectContainer}>
          <select className={styles.select} onChange={(e) => handleOptionChange(e, 'currency')} defaultValue="NGN">
            {CURRENCY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            className={styles.select}
            onChange={(e) => handleOptionChange(e, 'date')}
            data-testid={TestId.SELECT_OPTION}
            defaultValue="thisWeek">
            {DATE_RANGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
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
