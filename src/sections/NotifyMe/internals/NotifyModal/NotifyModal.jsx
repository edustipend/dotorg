import React from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../../../../context/ModalContext';
import { useContext } from 'react';

export const NotifyModal = ({ children, className }) => {
  const { notifyPopModal } = useContext(ModalContext);

  return (
    <div className={notifyPopModal ? `modal_modal ${className}` : 'hideModal_hideModal'}>
      <div className="animate_modal_modal">{children}</div>
    </div>
  );
};

NotifyModal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

NotifyModal.defaultProps = {
  className: ''
};
