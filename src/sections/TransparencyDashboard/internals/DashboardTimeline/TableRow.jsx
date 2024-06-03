import PropTypes from 'prop-types';
import { formatMoney } from '../../../../utils/numberFormatter/NumberFormatter';
import styles from './DashboardTimelines.module.css';

const getInitials = (name) => {
  const names = name?.split(' ');
  const inits = names.map((name) => name.charAt(0));

  return inits.join('');
};
const TableRow = ({ item }) => {
  return (
    <tr>
      <td>
        <div className={styles.avatar}>{getInitials(item?.name)}</div>
        <span>{item?.name}</span>
      </td>
      <td className={styles.amount}>{formatMoney(item?.amount)}</td>
      <td className={styles.date}>{item?.date}</td>
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
