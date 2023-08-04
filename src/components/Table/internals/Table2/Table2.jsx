import React from 'react';
import styles from './Table2.module.css';
import PropTypes from 'prop-types';

export const Table2 = ({ entries, tableHead }) => {
    return (
        <section className={styles.Main}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {tableHead?.map((itm, idx) => {
                            return <th key={idx} className={styles.head}>{itm}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {entries?.map((itm) => {
                        const { id, Stipend_Category, Application_Status, Date_of_submission, Time_of_submission, Action } = itm;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{Stipend_Category}</td>
                                <td>
                                    <span className={
                                        Application_Status === 'Approved' ?
                                            'approved bold_weight'
                                            : Application_Status === 'In review' ? 'in_view bold_weight'
                                                : Application_Status === 'Received (Under Review)' ? 'in_view bold_weight'
                                                    : Application_Status === 'Denied' ? 'denied bold_weight' : ''}

                                    >{Application_Status}</span>
                                </td>
                                <td>{Date_of_submission}</td>
                                <td>{Time_of_submission}</td>
                                <td>{Action}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section >
    );
};

Table2.propTypes = {
    entries: PropTypes.array,
    tableHead: PropTypes.array
};
Table2.defaultProps = {
    entries: [],
    tableHead: []
};
