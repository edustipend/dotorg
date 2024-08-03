import PropTypes from 'prop-types';
import { getInitials } from '../../../utils/getInitials';
import { formatMoney } from '../../../utils/numberFormatter/formatMoney';
import styles from './Leaderboard.module.css';

const TableRow = ({ item }) => {
  return (
    <tr>
      <td>{item?.index}</td>
      <td className={styles.leftAlign}>
        <div className={styles.avatar}>{getInitials(item?.referrer)}</div>
        <span>{item?.referrer}</span>
      </td>
      <td>{item?.count || formatMoney(item?.totalAmount)}</td>
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  item: PropTypes.shape({
    index: PropTypes.number,
    referrer: PropTypes.string,
    count: PropTypes.number,
    totalAmount: PropTypes.number
  })
};
