import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../../context/ModalContext';
import styles from './Modal.module.css';
import { useContext } from 'react';

export const Modal = ({ children, className }) => {
  const { popModal } = useContext(ModalContext);

  useEffect(() => {
    document.body.style.overflow = popModal ? 'hidden' : 'scroll';
  }, [popModal]);

  return (
    <div className={popModal ? `${styles.modal} ${className}` : `${styles.hideModal}`}>
      <div className={styles.animate}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.defaultProps = {
  className: ''
};
