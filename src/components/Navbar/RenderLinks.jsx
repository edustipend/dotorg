import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { userInteraction } from '../../utils/googleTagManager/googleTagManager';
import { tagEvents } from '../../utils/googleTagManager/tagEvents';
import './styles.css';
const { supportButton, donateNow, buttonCategory, donateBtnLabel } = tagEvents;

export const RenderLinks = ({ links, path, closeMenu, showMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState(path);

  const handleMouseEnter = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleClick = (linkPath) => {
    if (linkPath === '/support-a-learner/donate') {
      userInteraction(supportButton, buttonCategory, donateNow, donateBtnLabel);
    }
    setActiveLink(linkPath);
    handleMouseLeave();
    closeMenu(!showMenu);
  };

  return links.map((link) => (
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
            <span className={`navLink  ${path !== '/' && activeLink === link.hash ? 'activeLink' : ''}`}>{link.label}</span>
            <div className={` ${path !== '/' && activeLink === link.hash ? 'activeBar' : ''}`} />
          </div>
        </HashLink>
      )}
    </div>
  ));
};

RenderLinks.propTypes = {
  links: PropTypes.array,
  path: PropTypes.string,
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func
};