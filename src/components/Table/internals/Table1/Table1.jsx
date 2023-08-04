import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Table1.module.css';
import arrowleft from '../../../../assets/arrow-left.svg';
import arrowright from '../../../../assets/arrow-right.svg';

export const Table1 = ({ entries, tableHead }) => {
    const [entry, setEntry] = useState(0);
    const currentEntry = entries[entry];
    const status = currentEntry.Application_Status

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
                        <td className={`${styles.role} ${styles.roleAlt}`}>
                            {currentEntry && currentEntry.Stipend_Category}
                        </td>
                    </tr>
                    <tr>
                        <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[2]}</td>
                        <td className={`${styles.role} ${styles.roleAlt}`}>
                            <span className={status === 'Approved' ?
                                'approved bold_weight'
                                : status === 'In review' ? 'in_view bold_weight'
                                    : status === 'Received (Under Review)' ? 'in_view bold_weight'
                                        : status === 'Denied' ? 'denied bold_weight' : ''}>
                                {currentEntry && currentEntry.Application_Status}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[3]}</td>
                        <td className={`${styles.role} ${styles.roleAlt}`}>
                            {currentEntry && currentEntry.Date_of_submission}
                        </td>
                    </tr>
                    <tr>
                        <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[4]}</td>
                        <td className={`${styles.role} ${styles.roleAlt}`}>
                            {currentEntry && currentEntry.Time_of_submission}
                        </td>
                    </tr>
                    <tr>
                        <td className={`${styles.head} ${styles.headAlt}`}>{tableHead[5]}</td>
                        <td className={`${styles.role} ${styles.roleAlt}`}>
                            {currentEntry && currentEntry.Action}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Table1.propTypes = {
    entries: PropTypes.array,
    tableHead: PropTypes.array
};
Table1.defaultProps = {
    entries: [],
    tableHead: []
};
