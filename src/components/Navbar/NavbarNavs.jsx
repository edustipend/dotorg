import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Button from '../Button';
import { BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import { useSelector } from 'react-redux';
import './styles.css';
import useHandleCTAClick from '../../hooks/useHandleCTAClick';
// import LoginModal from '../LoginModal';

const { NAVBAR_LINKS_ID } = TestId;
const NavbarNavs = ({ showMenu, closeMenu }) => {
  const { buttonLabel, handleCTAClick } = useHandleCTAClick();
  const { userId } = useSelector((state) => state.user);
  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        <div className="navContent">
          {NAVBAR_LINKS.map((link) => (
            <HashLink key={link.label} to={{ pathname: link.to, hash: link.hash }} className={userId && link.label === 'Login' ? 'hide' : ''}>
              {link.label}
            </HashLink>
          ))}
        </div>
        <div className="navAction">
          <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleCTAClick()} className="navBtn" />
        </div>
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <div className="mobile-links">
            {NAVBAR_LINKS.map((link) => (
              <HashLink
                key={link.label}
                to={{ pathname: link.to, hash: link.hash }}
                onClick={() => closeMenu(!showMenu)}
                className={userId && link.label === 'Login' ? 'hide' : ''}>
                {link.label}
              </HashLink>
            ))}
          </div>
          <div className="mobile-nav-btn">
            <Button
              label={buttonLabel}
              type={BUTTON_TYPE}
              onClick={() => {
                closeMenu(!showMenu);
                handleCTAClick();
              }}
              className="navBtn"
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
