import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MobileTable.module.css';
import arrowleft from '../../../../assets/arrow-left.svg';
import arrowright from '../../../../assets/arrow-right.svg';
import { applicationStatus } from '../constants';
const { APPROVED, IN_VIEW, RECEIVED, DENIED } = applicationStatus;

<<<<<<< HEAD
export const MobileTable = ({ entries, tableHead, oneClickApply }) => {
=======
export const MobileTable = ({ entries, tableHead }) => {
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
  const [entry, setEntry] = useState(0);
  const currentEntry = entries[entry];
  const status = currentEntry.Application_Status;

  const handleArrowLeft = () => {
    setEntry((prev) => prev - 1);
  };
  const handleArrowRight = () => {
    setEntry((prev) => prev + 1);
  };
  return (
    <div className={styles.Main}>
      <table className={styles.mobileTable}>
        <thead>
          <tr>
            <th className={styles.head}>{tableHead[0]}</th>
            <th className={styles.row}>
              <div className={styles.entryNav}>
                <button
                  disabled={entry === 0 ? true : false}
                  className={entry === 0 ? `${styles.disabled} ${styles.arrowContainer}` : `${styles.arrowContainer}`}
<<<<<<< HEAD
                  onClick={handleArrowLeft}>
=======
                  onClick={handleArrowLeft}
                >
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
                  <img src={arrowleft} alt="arrowleft" className={styles.arrow_img} />
                </button>
                <span className={styles.id}>{currentEntry && currentEntry.id}</span>
                <button
                  disabled={entry + 1 === entries.length ? true : false}
                  className={entry + 1 === entries.length ? `${styles.disabled} ${styles.arrowContainer}` : `${styles.arrowContainer}`}
<<<<<<< HEAD
                  onClick={handleArrowRight}>
=======
                  onClick={handleArrowRight}
                >
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
                  <img src={arrowright} alt="arrowright" className={styles.arrow_img} />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[1]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{currentEntry && currentEntry.Stipend_Category}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[2]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>
              <span
                className={
                  status === `${APPROVED}`
                    ? 'approved bold_weight'
                    : status === `${IN_VIEW}`
                    ? 'in_view bold_weight'
                    : status === `${RECEIVED}`
                    ? 'in_view bold_weight'
                    : status === `${DENIED}`
                    ? 'denied bold_weight'
                    : ''
<<<<<<< HEAD
                }>
=======
                }
              >
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
                {currentEntry && currentEntry.Application_Status}
              </span>
            </td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[3]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{currentEntry && currentEntry.Date_of_submission}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[4]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{currentEntry && currentEntry.Time_of_submission}</td>
          </tr>
<<<<<<< HEAD
          {tableHead[5] && (
            <tr>
              <td className={`${styles.head} ${styles.headAlt} ${styles.row1}`}>{tableHead[5]}</td>
              <td className={`${styles.row} ${styles.rowAlt} ${styles.row2}`}>
                <button className={styles.btn} onClick={() => oneClickApply(currentEntry.id)}>
                  {currentEntry && currentEntry.Action}
                </button>
              </td>
            </tr>
          )}
=======
          <tr>
            <td className={`${styles.head} ${styles.headAlt} ${styles.row1}`}>{tableHead[5]}</td>
            <td className={`${styles.row} ${styles.rowAlt} ${styles.row2}`}>{currentEntry && currentEntry.Action}</td>
          </tr>
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
        </tbody>
      </table>
    </div>
  );
};

MobileTable.propTypes = {
  entries: PropTypes.array,
<<<<<<< HEAD
  tableHead: PropTypes.array,
  oneClickApply: PropTypes.func
=======
  tableHead: PropTypes.array
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
};
MobileTable.defaultProps = {
  entries: [],
  tableHead: []
};
