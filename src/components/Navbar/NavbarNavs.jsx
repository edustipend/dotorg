import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ButtonLabelCopy, BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import { isApplicationWindowClosed } from '../../utils';
import './styles.css';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

const { NAVBAR_LINKS_ID } = TestId;
const isWindowClosed = isApplicationWindowClosed();
const buttonLabel = isWindowClosed ? ButtonLabelCopy.WINDOW_CLOSED : ButtonLabelCopy.WINDOW_OPEN;

const handleOnclick = (action) => {
  if (isWindowClosed) {
    action();
  }
};

const NavbarNavs = ({ showMenu, closeMenu }) => {
  const { handlePopModal } = useContext(ModalContext);
  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        {NAVBAR_LINKS.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
        <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleOnclick(handlePopModal)} />
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          {NAVBAR_LINKS.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => closeMenu(!showMenu)}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-btn">
            <Button
              label={buttonLabel}
              type={BUTTON_TYPE}
              onClick={() => {
                closeMenu(!showMenu);
                handleOnclick(handlePopModal);
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
