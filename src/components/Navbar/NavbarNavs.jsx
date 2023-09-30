import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Button from '../Button';
import { BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import './styles.css';
import useHandleCTAClick from '../../hooks/useHandleCTAClick';

const { NAVBAR_LINKS_ID } = TestId;

const NavbarNavs = ({ showMenu, closeMenu }) => {
  const { buttonLabel, handleCTAClick } = useHandleCTAClick();

  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {NAVBAR_LINKS.map((link) => (
          <HashLink key={link.label} to={{ pathname: link.to, hash: link.hash }}>
            {link.label}
          </HashLink>
          // <Link key={link.label} to={link.to}>
          //   {link.label}
          // </Link>
        ))}
        <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleCTAClick()} />
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          {NAVBAR_LINKS.map((link) => (
            <HashLink key={link.label} to={{ pathname: link.to, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
              {link.label}
            </HashLink>
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
