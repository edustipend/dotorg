import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ children, className }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className={`modal_modal hig ${className}`}>
      <div className="animate_modal_modal">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.defaultProps = {
  className: '',
  rendered: false
};
