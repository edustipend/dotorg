import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useMemo } from 'react';
import { logout } from '../../store/reducers/UserReducer';
import { useDispatch } from 'react-redux';

const ProtecteAuthRoute = ({ children }) => {
  const dispatch = useDispatch();
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
  Cookies.remove('eduTk');
  dispatch(logout());
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
