import React from 'react';
import Container from '../../../components/Container';
import styles from '../Partners/Partners.module.css';
import Header from '../../../components/Header';
import { Texts } from '../Partners/contants';

const images = [...Array(6)].map((_, index) => require(`../../../assets/partner${index + 1}.svg`));

const Partners = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrap}>
            <Header size={'large'}>{Texts.HEADER}</Header>
            <p>
              {Texts.COLLABORATE} <span className={styles.collaborate}>{Texts.STATS}</span>
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
