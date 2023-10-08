import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MobileTable.module.css';
import arrowleft from '../../../../assets/arrow-left.svg';
import arrowright from '../../../../assets/arrow-right.svg';
import { getFormattedDate, getFormattedTime } from '../../../../utils/dateTimeUtils/dateTimeUtil';
import { Action } from '../constants';
import { applicationStatus } from '../constants';
const { APPROVED, IN_VIEW, DENIED } = applicationStatus;

export const MobileTable = ({ entries, tableHead, oneClickApply }) => {
  const [entry, setEntry] = useState(0);
  const currentEntry = entries[entry];

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
                  onClick={handleArrowLeft}>
                  <img src={arrowleft} alt="arrowleft" className={styles.arrow_img} />
                </button>
                <span className={styles.id}>{entry + 1}</span>
                <button
                  disabled={entry + 1 === entries.length ? true : false}
                  className={entry + 1 === entries.length ? `${styles.disabled} ${styles.arrowContainer}` : `${styles.arrowContainer}`}
                  onClick={handleArrowRight}>
                  <img src={arrowright} alt="arrowright" className={styles.arrow_img} />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[1]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{currentEntry && currentEntry.stipendCategory?.toUpperCase()}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[2]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>
              <span
                className={currentEntry?.isApproved ? 'approved bold_weight' : currentEntry?.isDenied ? 'denied bold_weight' : 'in_view bold_weight'}>
                {currentEntry?.isApproved ? APPROVED : currentEntry?.isDenied ? DENIED : IN_VIEW}
              </span>
            </td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[3]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{getFormattedDate(currentEntry?.createdAt)}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[4]}</td>
            <td className={`${styles.row} ${styles.rowAlt}`}>{getFormattedTime(currentEntry?.createdAt)}</td>
          </tr>
          {tableHead[5] && (
            <tr>
              <td className={`${styles.head} ${styles.headAlt} ${styles.row1}`}>{tableHead[5]}</td>
              <td className={`${styles.row} ${styles.rowAlt} ${styles.row2}`}>
                <button className={styles.btn} onClick={() => oneClickApply()}>
                  {currentEntry && Action}
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

MobileTable.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array,
  oneClickApply: PropTypes.func
};
MobileTable.defaultProps = {
  entries: [],
  tableHead: []
};
