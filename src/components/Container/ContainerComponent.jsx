import React from 'react';
import styles from './container.module.css';
import PropTypes from 'prop-types';

export const Container = ({ children = null, alternate = false, className = '' }) => {
  return <div className={`${alternate ? `${styles.container} ${styles.containerAlt}` : `${styles.container}`} ${className}`}>{children}</div>;
};

Container.propTypes = {
  alternate: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
