import PropTypes from 'prop-types';

export const UseModal = ({ children, className, datatest, isActive }) => {
  if (!isActive) {
    return;
  }
  return (
    <div datatest={datatest} className={`modal_modal modal_content ${className}`}>
      <div className="animate_modal_modal">{children}</div>
    </div>
  );
};

UseModal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  datatest: PropTypes.string,
  isActive: PropTypes.bool
};

UseModal.defaultProps = {
  className: '',
  rendered: false,
  datatest: '',
  isActive: false
};
