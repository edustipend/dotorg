import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { NAVBAR_AMBASSADOR_LINKS, TestId } from './constants';

import './styles.css';

const NavbarAmbassadorNavs = ({ showMenu }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {NAVBAR_AMBASSADOR_LINKS.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          {NAVBAR_AMBASSADOR_LINKS.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="mobile-nav out" />
      )}
    </>
  );
};

export default NavbarAmbassadorNavs;

NavbarAmbassadorNavs.propTypes = {
  showMenu: PropTypes.bool
};
