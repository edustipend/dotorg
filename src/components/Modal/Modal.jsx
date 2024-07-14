import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import PropTypes from 'prop-types';

export const Modal = ({ children, className, datatest }) => {
  const { isActive } = useContext(ModalContext) || {};

  return (
    <div data-testid={datatest} className={isActive ? `modal_modal modal_content ${className}` : 'hideModal_hideModal'}>
      <div className="animate_modal_modal">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  datatest: PropTypes.string
};

Modal.defaultProps = {
  className: '',
  rendered: false,
  datatest: ''
};
