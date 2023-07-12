import { useState } from 'react';
import PropTypes from 'prop-types';
import { TestId } from './constants';
import NavbarLogo from './NavbarLogo';
import NavbarNavs from './NavbarNavs';
import { Menu, Close } from '../../assets/index';

import './styles.css';

export const Navbar = ({ dataTest, navLinksId }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className="navbar" data-testid={dataTest}>
      <NavbarLogo />
      <NavbarNavs showMenu={isToggle} testId={navLinksId} />
      <div className="menu-icon" onClick={() => setIsToggle(!isToggle)}>
        <img src={isToggle ? Close : Menu} alt="menu-close" />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  dataTest: PropTypes.string,
  NavLinks: PropTypes.string
};

Navbar.defaultProps = {
  dataTest: TestId.DEFAULT_NAVBAR_TEST_ID,
  navLinksId: TestId.NAVBAR_LINKS_ID
};
