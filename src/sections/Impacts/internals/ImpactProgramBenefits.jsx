import React from 'react';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import styles from '../impacts.module.css';
import benefitVector from '../../../assets/benefit-vector.png';

import { benefits, programBenefits } from '../constants';
// import {}
const ImpactProgramBenefits = () => {
  return (
    <Container>
      <section className={styles.programBenefitSection}>
        <div className={styles.programBenefitHeader}>
          <label className={styles.programBenefitLabel}>Program Overview</label>
          <h2 className={styles.programBenefitsTitle}>{programBenefits.TITLE}</h2>
          <p className={styles.programBenefitDescription}> {programBenefits.DESCRIPTION} </p>
        </div>

        <div className={styles.programBenefitCards}>
          {benefits.map((benefit, index) => (
            <div className={styles.benefitCard} key={index}>
              <img src={benefitVector} alt="Benefit icon background" />
              <div className={styles.benefitCardInfos}>
                <h3>{`${benefit.icon} ${benefit.title}`}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.programBenefirtCTA}>
          <Button label="Join Now" type="secondary" />
        </div>
      </section>
    </Container>
  );
};

export default ImpactProgramBenefits;
