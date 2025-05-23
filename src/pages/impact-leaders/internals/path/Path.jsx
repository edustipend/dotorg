import React from 'react';
import styles from './Path.module.css';
import Container from '../../../../components/Container';
import Header from '../../../../components/Header';
import Text from '../../../../components/Text';
import { constant } from '../../constant';
import { check } from '../../../../assets/impactL';
import Button from '../../../../components/Button';

const { title, subtitle, apply, pitch, fellow } = constant;
export const Path = () => {
  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.content}>
          <section className={styles.heading}>
            <Header className={styles.header}>{title}</Header>
            <Text className={styles.headingText} content={subtitle} />
          </section>
          <section className={styles.list}>
            {''}
            <section className={styles.apply}>
              <div className={styles.applyImg}>
                <img src={apply.image} alt="apply-img" />
              </div>
              <div className={styles.applyContent}>
                <p className={styles.applyTitle}>{apply.title}</p>
                <p className={styles.applyText}>{apply.text}</p>

                <div className={styles.listContent}>
                  <p className={styles.canApply}>WHO CAN APPLY?</p>

                  <ul className={styles.listItems}>
                    {apply.applicants.map((item) => {
                      return (
                        <div key={item} className={styles.items}>
                          <img src={check} alt="check" />
                          <p className={styles.listItem}>{item}</p>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
            {''}
            <section className={styles.apply}>
              <div className={styles.applyContent}>
                <p className={styles.applyTitle}>{pitch.title}</p>
                <p className={styles.applyText}>{pitch.text}</p>

                <div className={styles.listContent}>
                  <p className={styles.canApply}>EVALUTION CRITERIA</p>

                  <ul className={styles.listItems}>
                    {pitch.evaluation.map((item) => {
                      return (
                        <div key={item} className={styles.items}>
                          <img src={check} alt="check" />
                          <div className={styles.groupList}>
                            <p className={styles.listItemBold}>
                              {item.title} - <span className={styles.listItem}>{item.text}</span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={styles.applyImg}>
                <img style={{ borderRadius: '24px' }} src={pitch.image} alt="apply-img" />
              </div>
            </section>
            {''}
            <section className={`${styles.apply} ${styles.applyAlt}`}>
              <div className={styles.applyImg}>
                <img style={{ borderRadius: '24px' }} src={fellow.image} alt="apply-img" />
              </div>
              <div className={styles.applyContent}>
                <p className={styles.applyTitle}>{fellow.title}</p>
                <p className={styles.applyText}>{fellow.text}</p>
                <div className={styles.btnContainer}>
                  <Button className={styles.button} label="Join Now" size="medium" type="secondary" />
                </div>
              </div>
            </section>
          </section>
        </section>
      </Container>
    </main>
  );
};
