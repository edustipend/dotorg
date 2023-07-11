import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from '../Button';
import { links } from './constants';

import './styles.css';

const HeaderNav = ({ showMenu }) => {
  return (
    <>
      <nav className="headerNav">
        {links.map((link) => (
          <NavLink
            key={link.label}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            to={link.to}
            style={link.label === 'Support A Learner' ? { color: '#FEBD1C' } : {}}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <>
        {showMenu ? (
          <nav className="mobile-nav" style={{ transform: 'translateX(0)' }}>
            {links.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                to={link.to}
                style={link.label === 'Support A Learner' ? { color: '#72FFFF' } : {}}>
                {link.label}
              </NavLink>
            ))}
            <div className="mobile-nav-btn">
              <Button label="Request stipend" />
            </div>
          </nav>
        ) : (
          <nav className="mobile-nav" style={{ transform: 'translateX(-100vw)' }} />
        )}
      </>
    </>
  );
};

export default HeaderNav;

HeaderNav.propTypes = {
  showMenu: PropTypes.bool
};
