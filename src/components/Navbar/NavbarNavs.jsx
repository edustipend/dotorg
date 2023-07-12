import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from '../Button';
import { links } from './constants';

import './styles.css';

const HeaderNav = ({ showMenu }) => {
  return (
    <>
      <nav className="navbarNavs">
        {links.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
        <Button label="Request stipend" />
      </nav>

      {showMenu ? (
        <nav className="mobile-nav" style={{ transform: 'translateX(0)' }}>
          {links.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-btn">
            <Button label="Request stipend" />
          </div>
        </nav>
      ) : (
        <nav className="mobile-nav" style={{ transform: 'translateX(-100vw)' }} />
      )}
    </>
  );
};

export default HeaderNav;

HeaderNav.propTypes = {
  showMenu: PropTypes.bool
};
