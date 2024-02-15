import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import quoteU from '../../../assets/quoteup.png';
import quoteD from '../../../assets/quotedown.png';
import { NavHashLink } from 'react-router-hash-link';
import Container from '../../../components/Container';
import { quotesArray } from './contants';

export const HeroSection = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotesArray.length);
      setAnimationKey((prevKey) => prevKey + 1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = quotesArray[currentQuoteIndex];

  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.container}>
          <div className={styles.quotes} key={animationKey} style={{ animation: `${styles.fadeIn} 0.5s ease-in-out` }}>
            <div className={styles.benimagediv}>
              <img src={currentQuote.image} alt="beneficiary-image-and-quote" className={styles.benimage} />
            </div>
            <div className={styles.quotecont} style={{ animation: `${styles.fade} 0.5s ease-in` }}>
              <div className={styles.quot}>
                <img src={quoteU} alt="quote-icon" className="quoteU" style={{ alignSelf: 'flex-start' }} />
                <Text content={currentQuote.content} className={styles.quote} />
                <img src={quoteD} alt="quote-icon" className="quoteD" style={{ alignSelf: 'flex-end' }} />
              </div>
              <div className={styles.ben}>
                <Text content={currentQuote.author} className={styles.benName} />
              </div>
              <div className={styles.ben}>
                <Text content={currentQuote.when} className={styles.when} />
              </div>
            </div>
          </div>
          <div className={styles.cta}>
            <Header size={'small'} className={styles.header}>
              Great futures are built with a little charity{' '}
            </Header>
            <Header size={'large'} className={styles.headerweb}>
              Great futures are built with a little charity{' '}
            </Header>
            <Text
              content={'Bridge the Educational Gap by providing resources to Transform Lives and Shape a Brighter Future for Learners Worldwide.'}
              className={styles.text}
            />
            <div className={styles.ctabtns}>
              <NavHashLink
                to={{
                  pathname: '/support-a-learner/donate'
                }}>
                <Button label={'Support a Learner'} size={'small'} type={'secondary'} />
              </NavHashLink>

              <NavHashLink
                to={{
                  pathname: '/support-a-learner',
                  hash: '#how-much-can-I-donate'
                }}>
                <Button label={'How much can I donate?'} size={'small'} type={'plain'} />
              </NavHashLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
