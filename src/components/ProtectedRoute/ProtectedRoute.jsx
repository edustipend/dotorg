import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const ProtectedRoute = ({ element, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  element: PropTypes.node,
  isAuthenticated: PropTypes.bool.isRequired
};

ProtectedRoute.defaultProps = {
  isAuthenticated: false
};
