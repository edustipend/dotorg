import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import useHandleCTAClick from '../../hooks/useHandleCTAClick';
import { RenderLinks } from './RenderLinks';
import { routesConstant } from '../../routesConstant';
import { content } from '../../sections/Communities/Hero/constants';

import './styles.css';

const { NAVBAR_LINKS_ID } = TestId;

const CommunityButton = () => (
  <Link to={content.linkUrl} target={content.linkTarget}>
    <Button type={BUTTON_TYPE} label={content.btnLabel} className="navBtn" />
  </Link>
);

const NavbarNavs = ({ showMenu, closeMenu, path }) => {
  const { buttonLabel, handleCTAClick } = useHandleCTAClick();
  const isCommunity = path === routesConstant.COMMUNITIES;
  const links = isCommunity ? NAVBAR_LINKS.slice(0, -1) : NAVBAR_LINKS;

  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        <div className="navContent">
          <RenderLinks showMenu={showMenu} closeMenu={closeMenu} links={links} path={path} />
        </div>
        <div className="navAction">
          {isCommunity ? <CommunityButton /> : <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleCTAClick()} className="navBtn" />}
        </div>
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <div className="mobileNavContent">
            <RenderLinks showMenu={showMenu} closeMenu={closeMenu} links={links} path={path} />
          </div>
          <div className="mobile-nav-btn">
            {isCommunity ? (
              <CommunityButton />
            ) : (
              <Button
                label={buttonLabel}
                type={BUTTON_TYPE}
                onClick={() => {
                  closeMenu(!showMenu);
                  handleCTAClick();
                }}
                className="navBtn"
              />
            )}
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
