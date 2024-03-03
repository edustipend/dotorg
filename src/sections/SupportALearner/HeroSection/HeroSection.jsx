import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import quoteU from '../../../assets/quoteup.png';
import quoteD from '../../../assets/quotedown.png';
import { NavHashLink } from 'react-router-hash-link';
import Container from '../../../components/Container';
import { Texts, quotesArray } from './contants';

export const HeroSection = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotesArray.length);
      setAnimationKey((prevKey) => prevKey + 1);
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = quotesArray[currentQuoteIndex];

  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.container}>
          <div className={styles.quotes} key={animationKey}>
            <div className={styles.benimagediv}>
              <img src={currentQuote.image} alt="beneficiary-quote" className={styles.benimage} />
            </div>
            <div className={styles.quotecont}>
              <div className={styles.quot}>
                <img src={quoteU} alt="quote-icon" className="quoteU" style={{ alignSelf: 'flex-start' }} />
                <Text data-testid="quote-content" content={currentQuote.content} className={styles.quote} />
                <img src={quoteD} alt="quote-icon" className="quoteD" style={{ alignSelf: 'flex-end' }} />
              </div>
              <div className={styles.benwhen}>
                <div className={styles.ben}>
                  <Text content={currentQuote.author} className={styles.benName} />
                </div>
                <div className={styles.ben}>
                  <Text content={currentQuote.when} className={styles.when} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cta}>
            <Header size={'small'} className={styles.header}>
              {Texts.SMALL_HEADER_TEXT}
            </Header>
            <Header size={'large'} className={styles.headerweb}>
              {Texts.LARGE_HEADER_TEXT}
            </Header>
            <Text content={Texts.CONTENT} className={styles.text} />
            <div className={styles.ctabtns}>
              <NavHashLink
                to={{
                  pathname: '/support-a-learner/donate'
                }}>
                <Button label={Texts.SUPPORT_TEXT} size={'medium'} type={'secondary'} />
              </NavHashLink>

              <NavHashLink
                to={{
                  pathname: '/support-a-learner',
                  hash: '#how-much-can-I-donate'
                }}>
                <Button label={Texts.DONATE_TEXT} size={'medium'} type={'plain'} />
              </NavHashLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
