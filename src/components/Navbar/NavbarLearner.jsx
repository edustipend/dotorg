import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../Button/Button';
import { SUPPORT_LEARNER_LINKS, TestId } from './constants';

const NavbarLearner = ({ showMenu, closeMenu, path }) => {
  const { NAVBAR_LINKS_ID } = TestId;
  const isDonation = path === '/support-a-learner/donate';
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState(path);

  const handleMouseEnter = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleClick = (linkPath) => {
    setActiveLink(linkPath);
    handleMouseLeave();
    closeMenu(!showMenu);
  };

  const renderLinks = () => {
    return SUPPORT_LEARNER_LINKS.map((link) => (
      <div
        key={link.label}
        onMouseEnter={() => handleMouseEnter(link.label)}
        onMouseLeave={handleMouseLeave}
        className={`navItem ${activeDropdown === link.label ? 'active' : ''}`}>
        {link.links ? (
          <>
            <div className="navCont">
              <span className={`navLabel ${link.links.some((sublink) => sublink.path === activeLink) ? 'activeLink' : ''}`}>
                {link.label}
                <img src={link.icon} alt="down" className="dropdownIcon" />
              </span>
              <div className={` ${link.links.some((sublink) => sublink.path === activeLink) ? 'activeBar' : ''}`} />
            </div>
            <div className={`dropdownMenu ${activeDropdown === link.label ? 'visible' : ''}`}>
              {link.links.map((sublink) =>
                sublink.label === 'Contact Us' ? (
                  <a
                    key={sublink.label}
                    href={sublink.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`dropdownItem ${activeLink === sublink.path ? 'activeLink' : ''}`}>
                    {sublink.label}
                  </a>
                ) : (
                  <HashLink
                    key={sublink.label}
                    to={{ pathname: sublink.path, hash: sublink.hash }}
                    className={`dropdownItem ${activeLink === sublink.path ? 'activeLink' : ''}`}
                    onClick={() => handleClick(sublink.path)}>
                    {sublink.label}
                  </HashLink>
                )
              )}
            </div>
          </>
        ) : (
          <HashLink to={{ pathname: link.path, hash: link.hash }} onClick={() => handleClick(link.hash)}>
            <div className="navCont">
              <span className={`navLink  ${activeLink === link.hash ? 'activeLink' : ''}`}>{link.label}</span>
              <div className={` ${activeLink === link.hash ? 'activeBar' : ''}`} />
            </div>
          </HashLink>
        )}
      </div>
    ));
  };

  return (
    <>
      {!isDonation ? (
        <nav className="navbarNavs navAlt" data-testid={NAVBAR_LINKS_ID}>
          <div className="navContent">{renderLinks()}</div>
          <HashLink to={{ pathname: '/support-a-learner/donate' }}>
            <Button label="Donate now" type="secondary" className="navBtn" />
          </HashLink>
        </nav>
      ) : null}
      {showMenu ? (
        <nav className="mobile-nav">
          {!isDonation ? <div className="mobileNavContent">{renderLinks()}</div> : null}
          {isDonation ? (
            <HashLink to={{ pathname: '/support-a-learner' }}>
              <Button label="Support a learner" type="secondary" className="navBtn" onClick={() => closeMenu(!showMenu)} />
            </HashLink>
          ) : (
            <HashLink to={{ pathname: '/support-a-learner/donate' }}>
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
