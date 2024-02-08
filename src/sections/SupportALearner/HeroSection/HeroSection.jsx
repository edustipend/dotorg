import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import beneficiary from '../../../assets/aishabeneficiary.png';
import beneficiary2 from '../../../assets/ade.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import quoteU from '../../../assets/quoteup.png';
import quoteD from '../../../assets/quotedown.png';
import { NavHashLink } from 'react-router-hash-link';
// import Container from '../../../components/Container';

export const HeroSection = () => {
  const quotesArray = [
    {
      content:
        "I didn't have sufficient data to pull through the duration of my course, but Edustipend came to my rescue. And now I made it to the final stage, where my team and I organized clean up program, and also provided character bins to curb plastic waste in our University( the project was achieved through grants from LEAP.",
      author: 'Aisha Daodu',
      image: beneficiary
    },
    {
      content:
        'I faced a scarcity of data for my project, but Edustipend saved the day. Now, as we reach the end, my team and I are leading a campus-wide cleanup effort, distributing character bins to combat plastic pollution. This success was made possible through grants from LEAP.',
      author: 'Nelson Mandela',
      image: beneficiary2
    },
    {
      content:
        'I lacked ample resources to sustain my course, but Edustipend stepped in. Now, at the culmination, my group and I spearheaded a campus cleanup initiative, deploying character bins to combat plastic pollution. This endeavor was made possible by grants from LEAP.',
      author: 'Martin Luther King Jr.',
      image: beneficiary
    },
    {
      content:
        'Resources were scarce for my endeavor, yet Edustipend came to my aid. Now, at the final stage, my team and I orchestrated a campus cleanup, providing character bins to tackle plastic waste. This achievement was made possible through grants from LEAP.',
      author: 'Albert Schweitzer',
      image: beneficiary2
    }
  ];

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
    // <Container>
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
    // </Container>
  );
};
