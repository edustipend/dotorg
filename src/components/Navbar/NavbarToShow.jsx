import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarNavs from './NavbarNavs';
import NavbarAmbassadorNavs from './NavbarAmbassadorNavs';
import { Menu, Close } from '../../assets/index';

import './styles.css';
import Text from '../Text';
import { useSelector } from 'react-redux';

export const NavbarToShow = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { pathname } = useLocation();
  const isAmbassador = pathname === '/ambassador-program';
  const isRequestStipend = pathname === '/application';
  const isDashboard = pathname.includes('/dashboard');

  const { name } = useSelector((state) => state.user);
  const [first, last] = name.split(' ');
  const firstN = first[0];
  const lastN = last[0];

  return !isDashboard && !isRequestStipend ? (
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

      {/* <div className="log-out-container">
        <img src={Logout} alt="logout dropdown" className="log-out" onClick={() => setDropDown((prev) => !prev)} />

        {dropDown && <button className="drop-down">Log out</button>}
      </div> */}
    </div>
  ) : null;
};
