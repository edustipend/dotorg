import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Button from '../Button';
import { BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import './styles.css';
import useHandleCTAClick from '../../hooks/useHandleCTAClick';
// import LoginModal from '../LoginModal';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

const { NAVBAR_LINKS_ID } = TestId;

const NavbarNavs = ({ showMenu, closeMenu }) => {
  const { buttonLabel, handleCTAClick, id } = useHandleCTAClick();
  const { handleLoginModal } = useContext(ModalContext);

  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        <div className="navContent">
          {NAVBAR_LINKS.map((link) => (
            <HashLink key={link.label} to={{ pathname: link.to, hash: link.hash }}>
              {link.label}
            </HashLink>
          ))}
        </div>
        <div className="navAction">
          {!id ? (
            <Button
              label="Login"
              type="secondary"
              className="navBtn"
              onClick={() => {
                closeMenu(!showMenu);
                handleLoginModal((prev) => !prev);
              }}
            />
          ) : null}
          <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleCTAClick()} className="navBtn" />
        </div>
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <div className="mobile-links">
            {NAVBAR_LINKS.map((link) => (
              <HashLink key={link.label} to={{ pathname: link.to, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
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
            {!id ? (
              <Button
                label="Login"
                type="secondary"
                className="navBtn"
                onClick={() => {
                  closeMenu(!showMenu);
                  handleLoginModal((prev) => !prev);
                }}
              />
            ) : null}
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
