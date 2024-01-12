import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { checkTokenExp } from '../../utils/checkTokenExp';
import { jwtDecode } from 'jwt-decode';
import { logout } from '../../store/reducers/UserReducer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const token = Cookies.get('eduTk');
  console.log(token);
  if (token) {
    const decoded = jwtDecode(token);
    const isTokenInvalid = checkTokenExp(decoded.exp);
    console.log(isTokenInvalid);
    if (isTokenInvalid) {
      Cookies.removeItem('eduTk');
      dispatch(logout());
      return <Navigate to="/login" />;
    }
  } else {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

// eslint-disable-next-line react/prop-types
function Navigate({ to }) {
  const nav = useNavigate();

  useEffect(() => {
    nav(to);
  }, [nav, to]);
  return null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node
};
