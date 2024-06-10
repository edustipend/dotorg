import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../components/ImpactNumbers/ImpactNumber.module.css';

const ImpactNumber = ({ amount, label }) => {
  return (
    <div className={styles.ImpactNumbers}>
      <h2>{amount}</h2>
      <p>{label}</p>
    </div>
  );
};

ImpactNumber.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired
};

export default ImpactNumber;
