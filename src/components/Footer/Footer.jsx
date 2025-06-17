import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { footerLinks } from './constants';
import { HashLink } from 'react-router-hash-link';
import './styles.css';

export const Footer = ({ version = '' }) => {
  const { pathname } = useLocation();
  const isDashboard = pathname === '/dashboard';
  const isDonation = pathname === '/donation';

  if (isDonation || isDashboard) {
    return;
  }

  return (
    <footer className="footer-wrapper ">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <p className="footer-link-title">{footerLinks.programmes.title}</p>

            {footerLinks.programmes.links.map((link, i) => (
              <Link key={i} className="footer-link" to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>

          <div>
            <p className="footer-link-title">{footerLinks.resources.title}</p>

            {footerLinks.resources.links.map((link, i) => (
              <Link key={i} className="footer-link" to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>

          <div>
            <p className="footer-link-title">{footerLinks.company.title}</p>

            {footerLinks.company.links.map((link, i) => (
              <HashLink key={i} className="footer-link" to={{ pathname: link.path, hash: link.hash }}>
                {link.title}
              </HashLink>
            ))}
          </div>

          <div>
            <div>
              <p className="footer-link-title">{footerLinks.contact.title}</p>

              {footerLinks.contact.links.map((link, i) => (
                <a className="footer-link" key={i} href={link.path} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={link.title} /> <span> {link.title}</span>
                </a>
              ))}
            </div>

            <div>
              <p className="footer-link-title">{footerLinks.social.title}</p>

              <div className="footer-social-icons">
                {footerLinks.social.links.map((link, i) => (
                  <a key={i} href={link.path} target="_blank" rel="noopener noreferrer">
                    <div className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-icons-container footer-copyright">
          <div className="footer-icon">
            <Link to={{ pathname: footerLinks.footer.logo.path, version }}>
              <img src={footerLinks.footer.logo.icon} height="32" alt={footerLinks.footer.logo.title} aria-label={footerLinks.footer.logo.title} />
              <p className="logo-text white">{footerLinks.footer.logo.title}</p>
            </Link>
          </div>

          <div>
            <p className="footer-copy">{footerLinks.footer.copyright}</p>
          </div>

          <div className="footer-terms">
            {footerLinks.footer.terms.map((link, i) => (
              <Link key={i} to={link.path} className="footer-terms-link">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  version: PropTypes.string
};
