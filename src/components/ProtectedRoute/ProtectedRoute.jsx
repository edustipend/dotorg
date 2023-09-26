import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const nav = useNavigate();
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    !id && nav('/login');
  }, [id, nav]);

  return children;
};

export default ProtectedRoute;
