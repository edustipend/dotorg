import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../assets/favicon.png';
import './styles.css';
import { useLocation } from 'react-router-dom';

export const Footer = (props) => {
  const { pathname } = useLocation();
  const isDashboard = pathname === '/dashboard';
  const isDonation = pathname === '/donation';

  if (isDonation || isDashboard) {
    return;
  }
  return (
    !isDashboard && (
      <footer className="footer-wrapper ">
        <div className="footer-container">
          <div className="footer-top">
            <div>
              <p style={{ fontWeight: 600 }}>CONTACT</p>
              <Link className="footer-link" to="/ambassador-program">
                Become an Ambassador
              </Link>
              <Link className="footer-link" to="/ambassador-program">
                Eligbility
              </Link>
              <Link className="footer-link" to="/">
                Home
              </Link>
            </div>

            <div>
              <p style={{ fontWeight: 600 }}>FOLLOW US</p>
              <div className="footer-social-icons">
                <a href="https://www.facebook.com/edustipend" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon fb-icon"></div>
                </a>
                <a href="https://www.instagram.com/edustipend" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon ig-icon"></div>
                </a>
                <a href="https://www.twitter.com/edustipend" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon tw-icon"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-icons-container footer-copyright">
            <div className="footer-icon">
              <Link to={{ pathname: '/', version: props.version }}>
                <img src={Logo} height="32" alt="edustipend-logo" aria-label="Edustipend Logo" />
                <p className="logo-text white">edustipend</p>
              </Link>
            </div>
            <div>
              <p className="paragraph-xs secondary" style={{ fontSize: '.9rem' }}>
                &copy; 2023 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

Footer.propTypes = {
  version: PropTypes.string
};

Footer.defaultProps = {
  version: ''
};
