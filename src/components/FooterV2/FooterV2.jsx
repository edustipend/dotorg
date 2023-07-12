import React from 'react';
import styles from './FooterV2.module.css';
import { footerLinks, socialLinks } from './internals/constants';
import { Link } from 'react-router-dom';
import Container from '../Container/container';

const FooterV2 = () => {
  return (
    <footer>
      <div className={styles.contentWrapper}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.footerWrapper}>
              <div className={styles.topSection}>
                {footerLinks.map((itm) => {
                  const { id, links, head } = itm;
                  return (
                    <div key={id} className={styles.column}>
                      <span className={styles.head}>{head}</span>
                      <ul className={styles.linksContainer}>
                        {links.map((links) => {
                          const { id, link, text } = links;
                          return (
                            <li key={id}>
                              <Link to={link} className={styles.link}>
                                {text}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
                <div className={styles.socials}>
                  <span className={styles.head}>Follow Us</span>
                  <div className={styles.socialLinks}>
                    {socialLinks.map((socials) => {
                      const { id, icon, link, media } = socials;
                      return (
                        <Link key={id} to={link} className={styles.socialLink}>
                          <img src={icon} alt={media} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.bottomSection}>
                <span className={styles.rights}>All rights Reserved</span>
                <p className={styles.edustipend}>
                  <span>©</span>edustipend 2023
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};
export default FooterV2;