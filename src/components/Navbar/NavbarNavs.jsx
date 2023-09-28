import PropTypes from 'prop-types';
import { NavHashLink } from 'react-router-hash-link';
import Button from '../Button';
import { BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import './styles.css';
import useHandleCTAClick from '../../hooks/useHandleCTAClick';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const { NAVBAR_LINKS_ID } = TestId;

const NavbarNavs = ({ showMenu, closeMenu }) => {
  const [navbarLinks, setNavbarLinks] = useState(NAVBAR_LINKS);
  const { buttonLabel, handleCTAClick } = useHandleCTAClick();
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    id ? setNavbarLinks(NAVBAR_LINKS.slice(0, 2)) : setNavbarLinks(NAVBAR_LINKS);
  }, [id, navbarLinks]);

  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {navbarLinks?.map((link) => (
          <NavHashLink key={link.label} to={{ pathname: link.to, hash: link.hash }}>
            {link.label}
          </NavHashLink>
          // <Link key={link.label} to={link.to}>
          //   {link.label}
          // </Link>
        ))}
        <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleCTAClick()} />
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          {navbarLinks?.map((link) => (
            <NavHashLink key={link.label} to={{ pathname: link.to, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
              {link.label}
            </NavHashLink>
          ))}
          <div className="mobile-nav-btn">
            <Button
              label={buttonLabel}
              type={BUTTON_TYPE}
              onClick={() => {
                closeMenu(!showMenu);
                handleCTAClick();
              }}
            />
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
