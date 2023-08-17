import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';
import Primary from '../../assets/spinner-primary.svg';
import Secondary from '../../assets/spinner-secondary.svg';

const LoaderVariant = (variant) => {
  if (variant === 'primary') {
    return Primary;
  } else if (variant === 'secondary') {
    return Secondary;
  } else {
    return Primary
  }
};
export const Loader = ({ variant, size, ...props }) => {
  const spinner = LoaderVariant(variant);
  return <img src={spinner} alt="loading-spinner" className={styles[size]} {...props} />;
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary'])
};

Loader.defaultProps = {
  size: 'medium',
  variant: 'primary'
};
