import React from 'react';
import PropTypes from 'prop-types';
import styles from './BatchTag.module.css';

const BatchTag = ({ label, iconSrc, variant = 'default', className = '' }) => {
  const combinedClassName = [styles.batchTag, styles[variant] || '', className].join(' ').trim();

  return (
    <span className={combinedClassName}>
      {iconSrc && <img src={iconSrc} alt="" className={styles.icon} aria-hidden="true" />}
      {label}
    </span>
  );
};

BatchTag.propTypes = {
  label: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error']),
  className: PropTypes.string
};

export default BatchTag;
