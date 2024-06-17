import React from 'react';
import styles from './DonationQuotation.module.css';
import PropTypes from 'prop-types';
import { constant } from './constants';

const { dataArr, invalidAmount, gratitude } = constant;

export const DonationQuotation = ({ amount }) => {
  const parseAmount = (amount) => {
    if (typeof amount === 'string') {
      amount = amount.replace(/,/g, '');
    }
    return Number(amount);
  };

  let feedback;
  const parsedAmount = parseAmount(amount);

  /**
   * Render a feedback message on what the donated amount can cover
   *
   * Only render a category if the potential donation can cover at least 1 unit of that category
   * Thank the donor if the potential donation can't cover at least 1 unit of any category
   */
  if (typeof parsedAmount === 'number') {
    if (parsedAmount >= 10000) {
      feedback = (
        <div className={styles.feedback}>
          {dataArr.map((itm, idx) => {
            const { text, textAlt, category, cost } = itm;
            const units = Math.floor(parsedAmount / cost);
            if (units >= 1) {
              return (
                <p className={styles.cover} key={idx}>
                  ₦{amount} {category === 'laptop' && units > 1 ? textAlt : text} for {category !== 'laptop' ? 'about ' : ''} {units}
                  {units > 1 ? ' learners' : ' learner'} {idx !== dataArr.length - 1 ? 'OR' : ''}
                </p>
              );
            }
            return null;
          })}
        </div>
      );
    } else if (parsedAmount < 1000) {
      feedback = <p>{invalidAmount}</p>;
    } else if (parsedAmount < 10000) {
      feedback = <p className={styles.invalidAmount}>{gratitude}</p>;
    } else {
      feedback = '';
    }
  }
  return <main className={styles.main}>{feedback}</main>;
};

DonationQuotation.propTypes = {
  amount: PropTypes.number
};
