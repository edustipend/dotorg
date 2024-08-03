import PropTypes from 'prop-types';
import styles from './DashboardTimelines.module.css';
import { formatMoney } from '../../../../utils/numberFormatter/formatMoney';
import { formatDate } from '../../../../utils/dateTimeUtils/dateTimeUtil';
import { getInitials } from '../../../../utils/getInitials';

const TableRow = ({ item }) => {
  return (
    <tr>
      <td>
        <div className={styles.avatar}>{getInitials(item?.name)}</div>
        <span>{item?.name}</span>
      </td>
      <td className={styles.amount}>{formatMoney(item?.amount)}</td>
      <td className={styles.date}>{formatDate(item?.date)}</td>
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  item: {
    name: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string
  }
};
