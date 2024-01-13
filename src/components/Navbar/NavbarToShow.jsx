import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarNavs from './NavbarNavs';
import NavbarAmbassadorNavs from './NavbarAmbassadorNavs';
import { Menu, Close, Logout } from '../../assets/index';
import './styles.css';
import Text from '../Text';
import { logout } from '../../store/reducers/UserReducer';
import { LOGOUT, authorizedPost } from '../../services/ApiClient';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

export const NavbarToShow = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAmbassador = pathname === '/ambassador-program';
  const isRequestStipend = pathname === '/application';
  const isLogin = pathname.includes('/login');
  const isDashboard = pathname.includes('/dashboard');

  const storeData = useSelector((state) => state?.user);
  let firstN = '';
  let lastN = '';

  if (storeData && storeData.name) {
    const [first, last] = storeData.name.split(' ');
    firstN = first ? first[0] : '';
    lastN = last ? last[0] : '';
  }

  const handleLogout = async () => {
    const response = await authorizedPost(LOGOUT, {
      userId: storeData.userId
    });
    Cookies.remove('eduTk');
    navigate(0);
    setDropDown((prev) => !prev);
    toast.success(response.message);
    setTimeout(() => {
      dispatch(logout());
    }, 2000);
  };

  const showNav = () => !isDashboard && !isRequestStipend && !isLogin;

  return showNav() ? (
    <>
      {isAmbassador ? (
        <NavbarAmbassadorNavs showMenu={isToggle} closeMenu={setIsToggle} />
      ) : (
        <NavbarNavs showMenu={isToggle} closeMenu={setIsToggle} />
      )}
      <div className="menu-icon" onClick={() => setIsToggle(!isToggle)}>
        <img src={isToggle ? Close : Menu} alt="menu-close" />
      </div>
    </>
  ) : isDashboard ? (
    <div className="user-profile">
      <div className="user-initials">
        <Text content={firstN + lastN} className={'user-name'} />
      </div>

      <div className="log-out-container">
        <div className="log-out" onClick={() => setDropDown((prev) => !prev)}>
          <img src={Logout} alt="logout dropdown" />
        </div>

        {dropDown && (
          <button className="drop-down" onClick={handleLogout}>
            Log out
          </button>
        )}
      </div>
    </div>
  ) : null;
};
