import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import Isaac from '../../../assets/issaac.png';
import Habby from '../../../assets/habby.png';
import Ruth from '../../../assets/ruthty.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import quoteU from '../../../assets/quoteup.png';
import quoteD from '../../../assets/quotedown.png';
import { NavHashLink } from 'react-router-hash-link';
import Container from '../../../components/Container';

export const HeroSection = () => {
  const quotesArray = [
    {
      content:
        "I didn't have sufficient data to pull through the duration of my course, but Edustipend came to my rescue. And now I made it to the final stage, where my team and I organized clean up program, and also provided character bins to curb plastic waste in our University( the project was achieved through grants from LEAP.",
      author: 'Isaac Etor',
      image: Isaac
    },
    {
      content:
        'Edustipend has been a constant support throughout my career journey, allowing me to apply for the stipend multiple times. During my UI/UX designer online program, I was fortunate to be a data beneficiary, enhancing my learning experience. Joining the Edustipend community facilitated connections with like-minded individuals, and monthly study tasks became a valuable part of my routine.',
      author: 'Sanusi Habeebat',
      image: Habby
    },
    {
      content:
        "The laptop stipend was a huge help to me during my final year at the university when I was working on my research project. The Bank of America Investment Banking virtual experience program on Forage provided me with a unique opportunity to gain practical knowledge about finance. Additionally, the ALX AI Career Essentials course I'm currently taking is equipping me with valuable skills to explore the exciting world of AI and be more productive in my career.",
      author: 'Ruth Ayobi',
      image: Ruth
    },
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
    <main  className={styles.bg}>
      <Container >
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
      </Container>
    </main> 
  );
};
