import React from 'react';
import Container from '../../../components/Container';
import styles from '../impacts.module.css';
import benefitVector from '../../../assets/benefit-vector.png';
import Button from '../../../components/Button';

const ImpactProgramBenefits = () => {
  return (
    <section className={styles.programBenefitSection}>
      <Container>
        <div className={styles.programBenefitHeader}>
          <label className={styles.programBenefitHeader}>Program Overview</label>
          <h2 className={styles.programBenefitsTitle}>Why Join the Impact Leaders Program?</h2>
          <p className={styles.programBenefitDescription}>This is more than a program; it’s a launchpad for changemakers like you!</p>
        </div>

        <div className={styles.programBenefitCards}>
          <div className={styles.benefitCard}>
            <img src={benefitVector} alt="Benefit Vector" />

            <div className={styles.benefitCardInfos}>
              <h3>💰 N500,000 Grant</h3>
              <p>Kickstart your project with the funding you need to make real impact—no strings attached, just purpose and execution.</p>
            </div>
          </div>

          <div className={styles.benefitCard}>
            <img src={benefitVector} alt="Benefit Vector" />

            <div className={styles.benefitCardInfos}>
              <h3>💻 Laptop Reward</h3>
              <p>Complete the program successfully and receive a brand-new laptop to power your work and future projects.</p>
            </div>
          </div>

          <div className={styles.benefitCard}>
            <img src={benefitVector} alt="Benefit Vector" />

            <div className={styles.benefitCardInfos}>
              <h3>🌍 Visibility & Recognition</h3>
              <p>Get your work seen! Enjoy media exposure, speaking opportunities, and recognition as a rising changemaker.</p>
            </div>
          </div>

          <div className={styles.benefitCard}>
            <img src={benefitVector} alt="Benefit Vector" />

            <div className={styles.benefitCardInfos}>
              <h3>🚀 Level Up Your Leadership Skills</h3>
              <p>Gain hands-on experience, expert mentorship, and the confidence to lead bold, community-driven initiatives.</p>
            </div>
          </div>
        </div>

        <div className={styles.programBenefirtCTA}>
          <Button label="Join Now" type="secondary" />
        </div>
      </Container>
    </section>
  );
};

export default ImpactProgramBenefits;
