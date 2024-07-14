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
import NavbarLearner from './NavbarLearner';
import { routesConstant } from '../../routesConstant';
const { AMBASSADOR_PROGRAM, LOGIN, DASHBOARD, APPLICATION, SUPPORT_A_LEARNER, REPORTS, ABOUT_US, TRANSPARENCY_DASHBOARD, IMPACTS, DONATE_NOW } =
  routesConstant;

export const NavbarToShow = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAmbassador = pathname === AMBASSADOR_PROGRAM;
  const isRequestStipend = pathname === APPLICATION;
  const isLogin = pathname === LOGIN;
  const isDashboard = pathname === DASHBOARD;
  const isSupportALearner = [SUPPORT_A_LEARNER, REPORTS, ABOUT_US, TRANSPARENCY_DASHBOARD, IMPACTS, DONATE_NOW].includes(pathname);

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
    toast.success(response?.message);
    setDropDown((prev) => !prev);
    dispatch(logout());
    navigate('/login');
  };

  const showNav = () => !isDashboard && !isRequestStipend && !isLogin;

  return showNav() ? (
    <>
      {isAmbassador ? (
        <NavbarAmbassadorNavs showMenu={isToggle} closeMenu={setIsToggle} />
      ) : isSupportALearner ? (
        <NavbarLearner showMenu={isToggle} closeMenu={setIsToggle} path={pathname} />
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
