import PropTypes from 'prop-types';
import { TestId } from './constants';
// import Button from '../Button';
import NavbarLogo from './NavbarLogo';
import NavbarNavs from './NavbarNavs';
import { Menu, Close } from '../../assets/index';
import './styles.css';
import { useState } from 'react';

export const Navbar = ({ dataTest }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className="navbar" data-testid={dataTest}>
      <NavbarLogo />
      <NavbarNavs showMenu={isToggle} />
      {/* <Button label="Request stipend" /> */}
      <div className="menu-icon" onClick={() => setIsToggle(!isToggle)}>
        <img src={isToggle ? Close : Menu} alt="menu-close" />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  dataTest: PropTypes.string
};

Navbar.defaultProps = {
  dataTest: TestId.DEFAULT_NAVBAR_TEST_ID
};
