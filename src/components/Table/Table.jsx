import React, { useState } from 'react';
import { tableHead } from './internals/constants';
import styles from './Table.module.css';
import PropTypes from 'prop-types';
import arrowleft from '../../../src/assets/arrow-left.svg';
import arrowright from '../../../src/assets/arrow-right.svg';

export const Table = ({ entries }) => {
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.head}>{tableHead[0]}</th>
            <th className={styles.role}>
              <div className={styles.entryNav}>
                <button
                  disabled={entry === 0 ? true : false}
                  className={entry === 0 ? `${styles.disabled} ${styles.arrowContainer}` : `${styles.arrowContainer}`}
                  onClick={handleArrowLeft}
                >
                  <img src={arrowleft} alt="arrowleft" className={styles.arrow_img} />
                </button>
                <span className={styles.id}>{currentEntry && currentEntry.id}</span>
                <button
                  disabled={entry + 1 === entries.length ? true : false}
                  className={entry + 1 === entries.length ? `${styles.disabled} ${styles.arrowContainer}` : `${styles.arrowContainer}`}
                  onClick={handleArrowRight}
                >
                  <img src={arrowright} alt="arrowright" className={styles.arrow_img} />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[1]}</td>
            <td className={`${styles.role} ${styles.roleAlt}`}>{currentEntry && currentEntry.Stipend_Category}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[2]}</td>
            <td className={`${styles.role} ${styles.roleAlt}`}>{currentEntry && currentEntry.Application_Status}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[3]}</td>
            <td className={`${styles.role} ${styles.roleAlt}`}>{currentEntry && currentEntry.Date_of_submission}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[4]}</td>
            <td className={`${styles.role} ${styles.roleAlt}`}>{currentEntry && currentEntry.Time_of_submission}</td>
          </tr>
          <tr>
            <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[5]}</td>
            <td className={`${styles.role} ${styles.roleAlt}`}>{currentEntry && currentEntry.Action}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  entries: PropTypes.array
};
Table.defaultProps = {
  entries: []
};
