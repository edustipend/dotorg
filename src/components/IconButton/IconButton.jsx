import React from 'react';
import PropTypes from 'prop-types';

export const IconButton = ({ children, className, onClick, dataTest }) => {
  return (
    <button data-testid={dataTest} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  onClick: PropTypes.func
};
