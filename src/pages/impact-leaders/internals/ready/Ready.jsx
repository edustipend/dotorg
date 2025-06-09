import React from 'react';
import Header from '../../../../components/Header';
import Text from '../../../../components/Text';
import { ready } from '../../../../assets/impactL';
import Container from '../../../../components/Container';
import styles from './Ready.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../../../components/Button';
import { constant } from '../../constant';

export const Ready = () => {
  return (
    <main className={styles.main} style={{ backgroundImage: `url(${ready})` }}>
      <div className={styles.overlay}></div>
      <section className={styles.contentContainer}>
        <Container>
          <div className={styles.content}>
            <Header className={styles.header}>Ready to Lead & Make an Impact?</Header>
            <Text className={styles.headingText} content={constant.ReadyText} />
            <NavLink target="_blank" to={constant.FormLink} className={styles.btnContainer}>
              <Button className={styles.button} label="Join Now" size="medium" type="secondary" />
            </NavLink>
          </div>
        </Container>
      </section>
    </main>
  );
};
