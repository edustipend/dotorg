import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentContainer.module.css';

export const ContentContainer = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

ContentContainer.propTypes = {
  children: PropTypes.node
};
