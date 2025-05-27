import React from 'react';
import Header from '../../../../components/Header';
import Text from '../../../../components/Text';
import { ready } from '../../../../assets/impactL';
import Container from '../../../../components/Container';
import styles from './Ready.module.css';
import Button from '../../../../components/Button';

export const Ready = () => {
  return (
    <main className={styles.main} style={{ backgroundImage: `url(${ready})` }}>
      <div className={styles.overlay}></div>
      <section className={styles.contentContainer}>
        <Container>
          <div className={styles.content}>
            <Header className={styles.header}>Ready to Lead & Make an Impact?</Header>
            <Text
              className={styles.headingText}
              content="Apply now, unlock funding, and join a network of passionate changemakers shaping the future!"
            />
            <div className={styles.btnContainer}>
              <Button className={styles.button} label="Join Now" size="medium" type="secondary" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
