import { NavHashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { NAVBAR_AMBASSADOR_LINKS, TestId } from './constants';

import './styles.css';

const NavbarAmbassadorNavs = ({ showMenu, closeMenuFunc }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {NAVBAR_AMBASSADOR_LINKS.map((link) => (
          <NavHashLink className={link.label === 'Apply now' ? 'nav-cta' : ''} key={link.label} to={{ pathname: link.path, hash: link.hash }}>
            {link.label}
          </NavHashLink>
        ))}
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          {NAVBAR_AMBASSADOR_LINKS.map((link) => (
            <NavHashLink key={link.label} to={{ pathname: link.path, hash: link.hash }} onClick={() => closeMenuFunc(!showMenu)}>
              {link.label}
            </NavHashLink>
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
  showMenu: PropTypes.bool,
  closeMenuFunc: PropTypes.func
};
