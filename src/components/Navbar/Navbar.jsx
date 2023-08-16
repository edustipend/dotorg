import PropTypes from 'prop-types';
import { TestId } from './constants';
import NavbarLogo from './NavbarLogo';
import { NavbarToShow } from './NavbarToShow';

import './styles.css';

export const Navbar = ({ dataTest }) => {
  return (
    <header className="navbar" data-testid={dataTest}>
      <NavbarLogo />
      <NavbarToShow />
    </header>
  );
};

Navbar.propTypes = {
  dataTest: PropTypes.string
};

Navbar.defaultProps = {
  dataTest: TestId.DEFAULT_NAVBAR_TEST_ID
};
