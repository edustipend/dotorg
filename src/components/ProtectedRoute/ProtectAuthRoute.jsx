import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useMemo } from 'react';

const ProtecteAuthRoute = ({ children }) => {
  const checkToken = useMemo(() => {
    const token = Cookies.get('eduTk');
    try {
      if (token) {
        const decoded = jwtDecode(token);
        return decoded;
      }
    } catch (error) {
      // do nothing
    }
    return false;
  }, []);

  const validateToken = useMemo(() => {
    const token = checkToken;
    return token?.exp && token.exp > Date.now() / 1000;
  }, [checkToken]);

  if (validateToken) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtecteAuthRoute;

ProtecteAuthRoute.propTypes = {
  children: PropTypes.node,
  alt: PropTypes.bool
};

ProtecteAuthRoute.defaultProps = {
  children: null,
  alt: true
};
