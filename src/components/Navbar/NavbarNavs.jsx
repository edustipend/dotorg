import PropTypes from 'prop-types';
import Button from '../Button';
import { BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import './styles.css';
import useHandleCTAClick from '../../hooks/useHandleCTAClick';
import { RenderLinks } from './RenderLinks';

const { NAVBAR_LINKS_ID } = TestId;

const NavbarNavs = ({ showMenu, closeMenu, path }) => {
  const { buttonLabel, handleCTAClick } = useHandleCTAClick();

  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        <div className="navContent">
          <RenderLinks showMenu={showMenu} closeMenu={closeMenu} links={NAVBAR_LINKS} path={path} />
        </div>
        <div className="navAction">
          <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleCTAClick()} className="navBtn" />
        </div>
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <div className="mobileNavContent">
            <RenderLinks showMenu={showMenu} closeMenu={closeMenu} links={NAVBAR_LINKS} path={path} />
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

NavbarNavs.propTypes = {
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func,
  path: PropTypes.string
};

export default NavbarNavs;
