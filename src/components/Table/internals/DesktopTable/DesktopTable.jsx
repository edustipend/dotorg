import { getFormattedDate, getFormattedTime } from '../../../../utils/dateTimeUtils/dateTimeUtil';
import styles from './DesktopTable.module.css';
import PropTypes from 'prop-types';
// import { applicationStatus } from '../constants';
// const { APPROVED, IN_VIEW, RECEIVED, DENIED } = applicationStatus;

export const DesktopTable = ({ entries, tableHead, oneClickApply }) => {
  const status = 'Received';
  const lastItem = entries?.length - 1;
  return (
    <section className={styles.Main}>
      <table className={styles.desktopTable}>
        <thead>
          <tr>
            {tableHead?.map((itm, idx) => {
              return (
                <th key={idx} className={styles.head}>
                  {itm}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {entries?.map((itm, idx) => {
            return (
              <tr key={idx}>
                <td className={idx === lastItem ? `${styles.firstColumn}` : undefined}>{1}</td>
                <td>{itm?.stipendCategory.toUpperCase()}</td>
                <td>
                  <span
                    className={
                      // Application_Status === `${APPROVED}`
                      //   ? 'approved bold_weight'
                      //   : Application_Status === `${IN_VIEW}`
                      //     ? 'in_view bold_weight'
                      //     : Application_Status === `${RECEIVED}`
                      //       ? 'in_view bold_weight'
                      //       : Application_Status === `${DENIED}`
                      //         ? 'denied bold_weight'
                      //         : ''
                      'Received'
                    }
                  >
                    {status}
                  </span>
                </td>
                <td>{getFormattedDate(itm?.createdAt)}</td>
                <td>{getFormattedTime(itm?.createdAt)}</td>
                {tableHead[5] && (
                  <td className={idx === lastItem ? `${styles.lastColumn}` : undefined}>
                    <button className={styles.btn} onClick={() => oneClickApply(idx + 1)}>
                      {itm?.Action}
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

DesktopTable.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array,
  oneClickApply: PropTypes.func
};
DesktopTable.defaultProps = {
  entries: [],
  tableHead: []
};
