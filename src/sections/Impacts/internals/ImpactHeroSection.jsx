import React from 'react';
import styles from '../impacts.module.css';
import { Button } from '../../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import impactLeaderImg from '../../../assets/impactLeader.png';

import { HERO_TITLE, HERO_DESCRIPTION, BUTTON_LABEL, HERO_IMAGE_ALT, HERO_MESSAGES } from '../constants';

const ImpactHeroSection = () => {
  return (
    <header className={styles.heroHeader}>
      <div className={styles.heroHeaderInfo}>
        <h1 className={styles.heroHeaderTitle}>{HERO_TITLE}</h1>
        <p className={styles.heroHeaderDescription}>{HERO_DESCRIPTION}</p>

        <div className={styles.impactHeroBtn}>
          <NavLink target="_blank" to={HERO_MESSAGES.FormLink} className={styles.btnContainer}>
            <Button className={styles.button} label={BUTTON_LABEL} size="medium" type="secondary" />
          </NavLink>
        </div>
      </div>

      <div className={styles.impactHeroImage}>
        <img src={impactLeaderImg} alt={HERO_IMAGE_ALT} className={styles.impactHeroImg} />

        <div className={styles.impactYouDidIt}>{HERO_MESSAGES.COMPLETION}</div>

        <div className={styles.impactHeroCert}>{HERO_MESSAGES.CERTIFICATION}</div>
      </div>
    </header>
  );
};

export default ImpactHeroSection;
