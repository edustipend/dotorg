import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from '../Button';
import { buttonLabel, NAVBAR_LINKS, TestId } from './constants';

import './styles.css';

const NavbarNavs = ({ showMenu }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {NAVBAR_LINKS.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
        <Button label={buttonLabel} />
      </nav>

      {showMenu ? (
        <nav className="mobile-nav" style={{ transform: 'translateX(0)' }}>
          {NAVBAR_LINKS.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-btn">
            <Button label={buttonLabel} />
          </div>
        </nav>
      ) : (
        <nav className="mobile-nav" style={{ transform: 'translateX(-100vw)' }} />
      )}
    </>
  );
};

export default NavbarNavs;

NavbarNavs.propTypes = {
  showMenu: PropTypes.bool
};
