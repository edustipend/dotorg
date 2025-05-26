import React from 'react';
import Container from '../../../components/Container';
import styles from '../impacts.module.css';

import { responsibilities, impactResponsibilities } from '../constants';

const ImpactResponsibilities = () => {
  return (
    <Container>
      <section className={styles.impactResponsibilitiesSection}>
        <div className={styles.impactResponsibilitiesHeader}>
          <label className={styles.impactResponsibilitiesLabel}>Responsibilities</label>
          <h2 className={styles.impactResponsibilitiesTitle}> {impactResponsibilities.TITLE} </h2>
        </div>

        <div className={styles.impactResponsibilitiesCards}>
          {responsibilities.map(({ number, title, description }) => (
            <div className={styles.responsibilityCard} key={number}>
              <h2 className={styles.impactResponsibilitiesCardTitle}>{number}</h2>
              <div>
                <h3 className={styles.impactResponsibilitiesCardSubTitle}>{title}</h3>
                <p className={styles.impactResponsibilitiesCardDescription}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ImpactResponsibilities;
