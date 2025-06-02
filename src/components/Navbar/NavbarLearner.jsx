import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../Button/Button';
import { SUPPORT_LEARNER_LINKS, TestId } from './constants';
import { userInteraction } from '../../utils/googleTagManager/googleTagManager';
import { tagEvents } from '../../utils/googleTagManager/tagEvents';
import { RenderLinks } from './RenderLinks';
const { supportButton, donateNow, buttonCategory, donateBtnLabel } = tagEvents;

const NavbarLearner = ({ showMenu, closeMenu, path }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  const isDonation = path === '/support-a-learner/donate';

  return (
    <>
      {!isDonation ? (
        <nav className="navbarNavs navAlt" data-testid={NAVBAR_LINKS_ID}>
          <div className="navContent">
            <RenderLinks showMenu={showMenu} closeMenu={closeMenu} path={path} links={SUPPORT_LEARNER_LINKS} />
          </div>
          <HashLink to={{ pathname: '/support-a-learner/donate' }}>
            <Button label="Donate now" type="secondary" className="navBtn" />
          </HashLink>
        </nav>
      ) : null}
      {showMenu ? (
        <nav className="mobile-nav">
          {!isDonation ? (
            <div className="mobileNavContent">
              <RenderLinks showMenu={showMenu} closeMenu={closeMenu} path={path} links={SUPPORT_LEARNER_LINKS} />
            </div>
          ) : null}
          {isDonation ? (
            <HashLink to={{ pathname: '/support-a-learner' }}>
              <Button label="Support a learner" type="secondary" className="navBtn" onClick={() => closeMenu(!showMenu)} />
            </HashLink>
          ) : (
            <HashLink
              to={{ pathname: '/support-a-learner/donate' }}
              onClick={() => userInteraction(supportButton, buttonCategory, donateNow, donateBtnLabel)}>
              <Button label="Donate now" type="secondary" className="navBtn" onClick={() => closeMenu(!showMenu)} />
            </HashLink>
          )}
        </nav>
      ) : (
        <nav className="mobile-nav out" />
      )}
    </>
  );
};

NavbarLearner.propTypes = {
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func,
  path: PropTypes.string
};

export default NavbarLearner;
