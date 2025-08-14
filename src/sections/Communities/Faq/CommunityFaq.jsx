import React from 'react';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from './CommunityFaq.module.css';
import Accordion from '../../../components/Accordion';
import { constant } from './constant';
const { faq } = constant;

const contantA = <span>{faq.ContentA}</span>;
const contantB = <span>{faq.ContentB}</span>;
const contantC = <span>{faq.ContentC}</span>;
const contantF = <span>{faq.ContentF}</span>;
const contantG = <span>{faq.ContentG}</span>;
const contantD = (
  <div>
    <p className={styles.title}>{faq.ContentD.title}</p>
    <div>
      {faq?.ContentD?.list.map((itm) => (
        <p key={itm}>{itm}</p>
      ))}
    </div>
    <p className={styles.footerContent}>{faq?.ContentD.footer}</p>
  </div>
);

const contantE = (
  <div>
    <p className={styles.title}>{faq.ContentE.title}</p>
    <div>
      {faq.ContentE.list.map((itm) => (
        <p key={itm}>{itm}</p>
      ))}
    </div>
  </div>
);

const list = [contantA, contantB, contantC, contantD, contantE, contantF, contantG];

const CommunityFaq = () => {
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
                  <Accordion title={itm.question} content={list[itm.content]} />
                </div>
              );
            })}
          </section>
        </section>
      </Container>
    </main>
  );
};

export default CommunityFaq;
