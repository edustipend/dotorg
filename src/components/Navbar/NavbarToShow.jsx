import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarNavs from './NavbarNavs';
import NavbarAmbassadorNavs from './NavbarAmbassadorNavs';
import { Menu, Close, Logout } from '../../assets/index';
import './styles.css';
import Text from '../Text';
import { storeUser } from '../../store/reducers/UserReducer';
import { initialState } from '../../store/reducers/UserReducer/UserReducer';

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

  const handleLogout = () => {
    dispatch(storeUser(initialState));
    navigate('/login');
  };

  return !isDashboard && !isRequestStipend && !isLogin ? (
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
        <img src={Logout} alt="logout dropdown" className="log-out" onClick={() => setDropDown((prev) => !prev)} />

        {dropDown && (
          <button className="drop-down" onClick={handleLogout}>
            Log out
          </button>
        )}
      </div>
    </div>
  ) : null;
};
