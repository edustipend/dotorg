import styles from './DesktopTable.module.css';
import PropTypes from 'prop-types';
import { applicationStatus } from '../constants';
const { APPROVED, IN_VIEW, RECEIVED, DENIED } = applicationStatus;

export const DesktopTable = ({ entries, tableHead, oneClickApply }) => {
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
            const { id, Stipend_Category, Application_Status, Date_of_submission, Time_of_submission, Action } = itm;
            return (
              <tr key={id}>
                <td className={idx === lastItem ? `${styles.firstColumn}` : undefined}>{id}</td>
                <td>{Stipend_Category}</td>
                <td>
                  <span
                    className={
                      Application_Status === `${APPROVED}`
                        ? 'approved bold_weight'
                        : Application_Status === `${IN_VIEW}`
                        ? 'in_view bold_weight'
                        : Application_Status === `${RECEIVED}`
                        ? 'in_view bold_weight'
                        : Application_Status === `${DENIED}`
                        ? 'denied bold_weight'
                        : ''
                    }
                  >
                    {Application_Status}
                  </span>
                </td>
                <td>{Date_of_submission}</td>
                <td>{Time_of_submission}</td>
                {tableHead[5] && (
                  <td className={idx === lastItem ? `${styles.lastColumn}` : undefined}>
                    <button className={styles.btn} onClick={() => oneClickApply(idx + 1)}>
                      {Action}
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
