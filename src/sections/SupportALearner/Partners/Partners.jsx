import React from 'react';
import Container from '../../../components/Container';
import styles from '../Partners/Partners.module.css';
import Header from '../../../components/Header';
import { TestId, Texts } from '../Partners/contants';

const images = [...Array(6)].map((_, index) => require(`../../../assets/partner${index + 1}.svg`));

const Partners = () => {
  return (
    <div className={styles.container} data-testid={TestId.WRAPPER}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrap}>
            <Header size={'large'} dataTest={TestId.HEAD_TEXT}>
              {Texts.HEADER}
            </Header>
            <p data-testid={TestId.DESCRIPTION}>
              {Texts.COLLABORATE}{' '}
              <span className={styles.collaborate} data-testid={TestId.STATS}>
                {Texts.STATS}
              </span>
            </p>
            <div className={styles.partners}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`partner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
