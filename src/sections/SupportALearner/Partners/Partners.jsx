import React from 'react';
import Container from '../../../components/Container';
import styles from '../Partners/Partners.module.css';
import Header from '../../../components/Header';
import { TestId, Texts } from '../Partners/contants';
import { useLocation } from 'react-router-dom';
import { routesConstant } from '../../../routesConstant';

const images = [...Array(6)].map((_, index) => require(`../../../assets/partner${index + 1}.svg`));
const duplicatedImages = [...images, ...images, ...images];

const Partners = () => {
  const { pathname } = useLocation();
  const isCommunities = pathname === routesConstant.COMMUNITIES;

  return (
    <div className={styles.container} data-testid={TestId.WRAPPER}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrap}>
            <Header size={'large'} dataTest={TestId.HEAD_TEXT}>
              {isCommunities ? Texts.COMMUNITIES_HEADER : Texts.HEADER}
            </Header>
            <p data-testid={TestId.DESCRIPTION}>
              {Texts.COLLABORATE}{' '}
              <span className={styles.collaborate} data-testid={TestId.STATS}>
                {Texts.STATS}
              </span>
            </p>
            <div className={styles.partners}>
              <div className={styles.partnersTrack}>
                {duplicatedImages.map((image, index) => (
                  <div key={index} className={styles.partnerItem}>
                    <img src={image || '/placeholder.svg'} alt={`partner ${(index % images.length) + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
