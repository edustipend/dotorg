import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import { buttonLabel, secondaryEffect, NAVBAR_LINKS, TestId } from './constants';
import './styles.css';

const { NAVBAR_LINKS_ID } = TestId;

const NavbarNavs = ({ showMenu, closeMenu }) => {
  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {NAVBAR_LINKS.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
        <Button label={buttonLabel} effect={secondaryEffect} />
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          {NAVBAR_LINKS.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => closeMenu(!showMenu)}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-btn">
            <Button label={buttonLabel} effect={secondaryEffect} />
          </div>
        </nav>
      ) : (
        <nav className="mobile-nav out" />
      )}
    </>
  );
};

export default NavbarNavs;

NavbarNavs.propTypes = {
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func
};
