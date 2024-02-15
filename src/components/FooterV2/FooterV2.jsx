import React from 'react';
import styles from './FooterV2.module.css';
import { footerLinks, socialLinks } from './internals/constants';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { TestConstants } from './internals/constants';
import logo from '../../assets/edustipend-logo.png'
const { Component_testid, Links_testid } = TestConstants

export const FooterV2 = () => {
  return (
    <footer data-testid={Component_testid}>
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
                            <li key={id} data-testid={Links_testid}>
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
                        <a key={id} href={link} rel="noreferrer" target="_blank" className={styles.socialLink}>
                          <img src={icon} alt={media} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className={styles.bottomSection}>
                <div className={styles.hr} />
                <div className={styles.allRights}>
                  <Link to='/' className={styles.logoSection}>
                    <div className={styles.logoContainer}>
                      <img src={logo} alt="edustipend-logo" className={styles.logo} />
                    </div>
                    <span className={styles.logoText}>edustipend</span>
                  </Link>
                  <div className={styles.rightsContainer}>
                    <span className={styles.rights}>All rights Reserved</span>
                    <p className={styles.edustipend}>
                      <span>©</span>edustipend 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};