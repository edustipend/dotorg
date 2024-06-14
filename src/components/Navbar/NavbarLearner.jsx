import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../Button/Button';
import { SUPPORT_LEARNER_LINKS, TestId } from './constants';
import { userInteraction } from '../../utils/googleTagManager/googleTagManager';
import { tagEvents } from '../../utils/googleTagManager/tagEvents';
const { supportButton, donateNow, buttonCategory, donateBtnLabel } = tagEvents;

const NavbarLearner = ({ showMenu, closeMenu }) => {
  const { NAVBAR_LINKS_ID } = TestId;

  const handleMenuClick = (path) => {
    closeMenu(!showMenu);
    if (path === '/support-a-learner/donate') {
      userInteraction(supportButton, buttonCategory, donateNow, donateBtnLabel);
    }
  };

  return (
    <>
      <nav className="navbarNavs navAlt" data-testid={NAVBAR_LINKS_ID}>
        <div className="navContent">
          {SUPPORT_LEARNER_LINKS.map((link) => (
            <HashLink key={link.label} to={{ pathname: link.path, hash: link.hash }} onClick={() => handleMenuClick(link.path)}>
              {link.label}
            </HashLink>
          ))}
        </div>
        <HashLink className={'donate-now'} to={{ pathname: '/support-a-learner/donate' }}>
          <Button label="Donate now" type={'secondary'} className="navBtn" />
        </HashLink>
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <div className="mobileNavContent">
            {SUPPORT_LEARNER_LINKS.map((link) => (
              <HashLink key={link.label} to={{ pathname: link.path, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
                {link.label}
              </HashLink>
            ))}
          </div>
          <HashLink
            to={{ pathname: '/support-a-learner/donate' }}
            onClick={() => userInteraction(supportButton, buttonCategory, donateNow, donateBtnLabel)}>
            <Button label="Donate now" type={'secondary'} className="navBtn" onClick={() => closeMenu(!showMenu)} />
          </HashLink>
        </nav>
      ) : (
        <nav className="mobile-nav out" />
      )}
    </>
  );
};

export default NavbarLearner;

NavbarLearner.propTypes = {
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func
};
