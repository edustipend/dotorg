import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { NAVBAR_AMBASSADOR_LINKS, TestId } from './constants';
import './styles.css';
import { Button } from '../Button/Button';

const NavbarAmbassadorNavs = ({ showMenu, closeMenu }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  return (
    <>
      <nav className="navbarNavs navAlt" data-testid={NAVBAR_LINKS_ID}>
        <div className="navContent">
          {NAVBAR_AMBASSADOR_LINKS.map((link) => (
            <HashLink key={link.label} to={{ pathname: link.path, hash: link.hash }}>
              {link.label}
            </HashLink>
          ))}
        </div>
        <HashLink to={{ pathname: '/ambassador-program', hash: '#apply-now' }}>
          <Button label="Apply now" type={'secondary'} className="navBtn" />
        </HashLink>
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <div className='mobile-links'>
            {NAVBAR_AMBASSADOR_LINKS.map((link) => (
              <HashLink key={link.label} to={{ pathname: link.path, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
                {link.label}
              </HashLink>
            ))}
          </div>
          <HashLink to={{ pathname: '/ambassador-program', hash: '#apply-now' }}>
            <Button label="Apply now" type={'secondary'} className="navBtn" onClick={() => closeMenu(!showMenu)} />
          </HashLink>
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
