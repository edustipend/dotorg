import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarNavs from './NavbarNavs';
import NavbarAmbassadorNavs from './NavbarAmbassadorNavs';
import { Menu, Close } from '../../assets/index';

import './styles.css';

export const NavbarToShow = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { pathname } = useLocation();
  const isAmbassador = pathname === '/ambassador-program';
  const isRequestStipend = pathname === '/request-stipend';
  return (
    !isRequestStipend && (
      <>
        {isAmbassador ? (
          <NavbarAmbassadorNavs showMenu={isToggle} closeMenuFunc={setIsToggle} />
        ) : (
          <NavbarNavs showMenu={isToggle} closeMenuFunc={setIsToggle} />
        )}
        <div className="menu-icon" onClick={() => setIsToggle(!isToggle)}>
          <img src={isToggle ? Close : Menu} alt="menu-close" />
        </div>
      </>
    )
  );
};
