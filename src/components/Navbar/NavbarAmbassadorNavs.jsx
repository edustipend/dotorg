import { NavHashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { NAVBAR_AMBASSADOR_LINKS, TestId } from './constants';
import './styles.css';
import { Button } from '../Button/Button';

const NavbarAmbassadorNavs = ({ showMenu, closeMenu }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {NAVBAR_AMBASSADOR_LINKS.map((link) => (
          <NavHashLink key={link.label} to={{ pathname: link.path, hash: link.hash }}>
            {link.label === 'Apply now' ? <Button label={link.label} type={'secondary'} /> : link.label}
          </NavHashLink>
        ))}
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          {NAVBAR_AMBASSADOR_LINKS.map((link) =>
            link.label !== 'Apply Now' ? (
              <NavHashLink key={link.label} to={{ pathname: link.path, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
                {link.label}
              </NavHashLink>
            ) : null
          )}
          <NavHashLink to={{ pathname: '/ambassador-program', hash: '#apply-now' }} onClick={() => closeMenu(!showMenu)}>
            <div className="mobile-nav-btn">
              <Button label={'Apply now'} type={'secondary'} />
            </div>
          </NavHashLink>
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
  closeMenu: PropTypes.func
};
