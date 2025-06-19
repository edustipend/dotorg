import React from 'react';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import styles from '../impacts.module.css';
import benefitVector from '../../../assets/benefit-vector.png';
import { NavLink } from 'react-router-dom';
import { benefits, programBenefits, BUTTON_LABEL } from '../constants';
import BatchTag from '../../../components/BatchTag/BatchTag';
import { activity } from '../../../assets';

const ImpactProgramBenefits = () => {
  return (
    <Container>
      <section className={styles.programBenefitSection}>
        <div className={styles.programBenefitHeader}>
          <label className={styles.programBenefitLabel}>
            <BatchTag label="Program Benefits" iconSrc={activity} />
          </label>
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
          <NavLink target="_blank" to={programBenefits.FormLink} className={styles.btnContainer}>
            <Button className={styles.button} label={BUTTON_LABEL} size="medium" type="secondary" />
          </NavLink>
        </div>
      </section>
    </Container>
  );
};

export default ImpactProgramBenefits;
