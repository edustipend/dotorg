import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Button from '../Button';
import { BUTTON_TYPE, NAVBAR_LINKS, TestId } from './constants';
import './styles.css';
import useHandleCTAClick from '../../hooks/useHandleCTAClick';
// import LoginModal from '../LoginModal';

const { NAVBAR_LINKS_ID } = TestId;

const NavbarNavs = ({ showMenu, closeMenu }) => {
  const { buttonLabel, handleCTAClick } = useHandleCTAClick();
  const isDevelopment = process.env.NODE_ENV === 'development';

  const checkLocation = (path) => {
    const isSupportALearner = path === NAVBAR_LINKS[0].to;
    return isSupportALearner;
  };

  return (
    <>
      <nav className="navbarNavs" data-testid={NAVBAR_LINKS_ID}>
        <div className="navContent">
          {NAVBAR_LINKS.map((link) => {
            const supportALearnerInDev = checkLocation(link.to);
            return (
              <HashLink
                key={link.label}
                to={{ pathname: link.to, hash: link.hash }}
                id={link.to === '/support-a-learner' && 'support-a-learner'}
                className={link.to === '/ambassador-program' && 'donate-now'}>
                {supportALearnerInDev && isDevelopment ? link.label : !supportALearnerInDev ? link.label : null}
              </HashLink>
            );
          })}
        </div>
        <div className="navAction">
          <Button label={buttonLabel} type={BUTTON_TYPE} onClick={() => handleCTAClick()} className="navBtn" />
        </div>
      </nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <div className="mobile-links">
            {NAVBAR_LINKS.map((link) => {
              const supportALearnerInDev = checkLocation(link.to);
              return (
                <HashLink
                  key={link.label}
                  to={{ pathname: link.to, hash: link.hash }}
                  id={link.to === '/support-a-learner' && 'support-a-learner'}
                  onClick={() => closeMenu(!showMenu)}>
                  {supportALearnerInDev && isDevelopment ? link.label : !supportALearnerInDev ? link.label : null}
                </HashLink>
              );
            })}
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
  closeMenu: PropTypes.func
};

export default NavbarNavs;
