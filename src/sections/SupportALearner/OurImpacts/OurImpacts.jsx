import React, { useState, useEffect, useRef } from 'react';
import { scroller } from 'react-scroll';
import { Our_Impact } from '../../../assets';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import styles from './OurImpacts.module.css';
import { btnLabels, description, headText, numbers, subText } from './constants';
import { Link } from 'react-router-dom';
import { AnimatedNumber } from './AnimatedNumber';

const OurImpacts = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        sectionRef.current &&
        sectionRef.current.getBoundingClientRect().top < window.innerHeight &&
        sectionRef.current.getBoundingClientRect().bottom > 0
      ) {
        setAnimatedNumbers(true);
      } else {
        setAnimatedNumbers(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (animatedNumbers) {
      scroller.scrollTo('our-impacts', {
        duration: 2000,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [animatedNumbers]);

  return (
    <main className={styles.wrapper}>
      <Container>
        <div className={styles.headerContainer}>
          <h1>{headText}</h1>
        </div>
        <img src={Our_Impact} alt="our impact" className={styles.image} />
        <div className={styles.contentWrapper} ref={sectionRef}>
          <div className={styles.description}>
            <h1>{description}</h1>
            <p>{subText}</p>
          </div>
          <div className={styles.numbers}>
            <div className={styles.left}>
              <div className={styles.box}>
                <h2>{animatedNumbers ? <AnimatedNumber value={numbers[0].value} /> : numbers[0].value}</h2>
                <p>{numbers[0].label}</p>
              </div>
              <div className={styles.box}>
                <h2>{animatedNumbers ? <AnimatedNumber value={numbers[2].value} /> : numbers[2].value}</h2>
                <p>{numbers[2].label}</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.box}>
                <h2>
                  {animatedNumbers ? (
                    <AnimatedNumber value={numbers[1].value} money />
                  ) : (
                    new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN'
                    }).format(numbers[1].value)
                  )}
                </h2>
                <p>{numbers[1].label}</p>
              </div>
              <div className={styles.box}>
                <h2>
                  {animatedNumbers ? (
                    <>
                      <AnimatedNumber value={numbers[3].value} />
                      {'+'}
                    </>
                  ) : (
                    <>{`${numbers[3].value}+`}</>
                  )}
                </h2>
                <p>{numbers[3].label}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link to="/impact">
            <Button label={btnLabels.view} type="plain" className={styles.viewBtn} />
          </Link>
          <Link to="support-a-learner/donate">
            <Button label={btnLabels.support} type="secondary" />
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default OurImpacts;
