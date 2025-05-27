import React from 'react';
import Container from '../../../../components/Container';
import Header from '../../../../components/Header';
import Text from '../../../../components/Text';
import styles from './Faq.module.css';
import { constant } from '../../constant';
import Accordion from '../../../../components/Accordion';

const { faq } = constant;
export const Faq = () => {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.section}>
          <section className={styles.heading}>
            <Header className={styles.header}>{faq.title}</Header>
            <Text className={styles.headingText} content={faq.subtitle} />
          </section>

          <section className={styles.faq}>
            {constant.faq.QA.map((itm) => {
              return (
                <div key={itm.question}>
                  <Accordion question={itm.question} answer={itm.answer} />
                </div>
              );
            })}
          </section>
        </section>
      </Container>
    </main>
  );
};
