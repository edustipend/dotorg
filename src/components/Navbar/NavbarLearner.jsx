import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../Button/Button';
import { SUPPORT_LEARNER_LINKS, TestId } from './constants';

const NavbarLearner = ({ showMenu, closeMenu, path }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  const isDonation = path === '/support-a-learner/donate';
  return (
    <>
      {!isDonation ? (
        <nav className="navbarNavs navAlt" data-testid={NAVBAR_LINKS_ID}>
          <div className="navContent">
            {SUPPORT_LEARNER_LINKS.map((link) => (
              <HashLink key={link.label} to={{ pathname: link.path, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
                {link.label}
              </HashLink>
            ))}
          </div>
          <HashLink to={{ pathname: '/support-a-learner/donate' }}>
            <Button label="Donate now" type={'secondary'} className="navBtn" />
          </HashLink>
        </nav>
      ) : null}
      {showMenu ? (
        <nav className="mobile-nav">
          {!isDonation ? (
            <div className="mobileNavContent">
              {SUPPORT_LEARNER_LINKS.map((link) => (
                <HashLink key={link.label} to={{ pathname: link.path, hash: link.hash }} onClick={() => closeMenu(!showMenu)}>
                  {link.label}
                </HashLink>
              ))}
            </div>
          ) : null}
          {isDonation ? (
            <HashLink to={{ pathname: '/support-a-learner' }}>
              <Button label="Support a learner" type={'secondary'} className="navBtn" onClick={() => closeMenu(!showMenu)} />
            </HashLink>
          ) : (
            <HashLink to={{ pathname: '/support-a-learner/donate' }}>
              <Button label="Donate now" type={'secondary'} className="navBtn" onClick={() => closeMenu(!showMenu)} />
            </HashLink>
          )}
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
  closeMenu: PropTypes.func,
  path: PropTypes.string
};
