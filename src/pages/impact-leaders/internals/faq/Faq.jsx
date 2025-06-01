import React from 'react';
import Container from '../../../../components/Container';
import Header from '../../../../components/Header';
import Text from '../../../../components/Text';
import styles from './Faq.module.css';
import { constant } from '../../constant';
import Accordion from '../../../../components/Accordion';
import BatchTag from '../../../../components/BatchTag/BatchTag';
import { question } from '../../../../assets';
const { faq } = constant;

const contantA = <span>{faq.ContentA}</span>;
const contantB = <span>{faq.ContentB}</span>;
const contantF = <span>{faq.ContentF}</span>;
const contantG = <span>{faq.ContentG}</span>;
const contantC = (
  <div>
    <p className={styles.title}>{faq.ContentC.title}</p>
    <div>
      {faq.ContentC.list.map((itm) => (
        <p key={itm}>{itm}</p>
      ))}
    </div>
  </div>
);

const contantD = (
  <div>
    <p className={styles.title}>{faq.ContentD.title}</p>
    <div>
      {faq.ContentD.list.map((itm) => (
        <p key={itm}>{itm}</p>
      ))}
    </div>
  </div>
);

const contantE = (
  <div>
    {faq.ContentE.list.map((itm) => (
      <p key={itm}>{itm}</p>
    ))}
  </div>
);

const list = [contantA, contantB, contantC, contantD, contantE, contantF, contantG];

export const Faq = () => {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.section}>
          <section className={styles.heading}>
            <BatchTag label="FAQ" iconSrc={question} />
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