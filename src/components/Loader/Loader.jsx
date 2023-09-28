import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';
import Primary from '../../assets/spinner-primary.svg';
import Secondary from '../../assets/spinner-secondary.svg';
import Neutral from '../../assets/spinner-neutral.svg';
import { TestId } from './constants';

const LoaderVariant = (variant) => {
  if (variant === 'primary') {
    return Primary;
  } else if (variant === 'secondary') {
    return Secondary;
  } else if (variant === 'neutral') {
    return Neutral;
  } else {
    return Neutral;
  }
};
export const Loader = ({ variant, size, ...props }) => {
  const spinner = LoaderVariant(variant);
  return <img data-testid={TestId.LOADER_ID} src={spinner} alt="loading-spinner" className={styles[size]} {...props} />;
};


Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'neutral'])
};

Loader.defaultProps = {
  size: 'medium',
  variant: 'primary'
};
