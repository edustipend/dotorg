import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarNavs from './NavbarNavs';
import NavbarAmbassadorNavs from './NavbarAmbassadorNavs';
import { Menu, Close, Profile, Logout } from '../../assets/index';

import './styles.css';

export const NavbarToShow = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { pathname } = useLocation();
  const isAmbassador = pathname === '/ambassador-program';
  const isRequestStipend = pathname === '/request-stipend';
  const isDashboard = pathname.includes('/dashboard');

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
      <img src={Profile} alt="profile" className="user-profile-img" />
      <div className="log-out">
        <img src={Logout} alt="logout dropdown" />
      </div>
    </div>
  ) : undefined;
};
