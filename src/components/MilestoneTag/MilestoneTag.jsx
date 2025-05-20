import React from 'react';
import PropTypes from 'prop-types';
import styles from './MilestoneTag.module.css';

const MilestoneTag = ({ message, iconSrc, altText = '', className = '' }) => {
  const combinedClassName = [styles.container, className].join(' ').trim();

  return (
    <div className={combinedClassName}>
      {iconSrc && <img src={iconSrc} alt={altText} className={styles.icon} />}
      <p className={styles.message}>{message}</p>
    </div>
  );
};

MilestoneTag.propTypes = {
  message: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string
};

export default MilestoneTag;
