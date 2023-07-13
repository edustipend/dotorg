import { useEffect, useState, useCallback } from 'react';
import Container from '../../components/Container/container';
import Button from '../../components/Button';
import { NavHashLink } from 'react-router-hash-link';
import { Hero1, Hero2, Hero3, Hero4, Svg1, Svg2, Svg3, Svg4, Svg5, ArrowDown } from '../../assets/index';
import { stipends, stipendsColors, buttonLabel, secondaryEffect } from './constants';

import './styles.css';

const Hero = () => {
  const [currentStipend, setCurrentStipend] = useState(0);

  const nextStipend = useCallback(() => {
    setCurrentStipend((prev) => (prev === stipends.length - 1 ? 0 : prev + 1));
  }, [setCurrentStipend]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      nextStipend();
      if (currentStipend > stipends.length - 1) {
        setCurrentStipend(0);
      }
    }, 2000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [currentStipend, nextStipend]);
  return (
    <section className="hero">
      <Container>
        <div className="top-section">
          <h1>
            In need of {stipends[currentStipend] === 'laptop' ? 'a' : 'some'}{' '}
            <span
              style={{
                color: stipendsColors[currentStipend]
              }}
            >
              {stipends[currentStipend]}
            </span>{' '}
            to support your learning?
          </h1>
          <div className="boost-container">
            <p>Give your learning goals a BOOST</p>
            <img src={Svg1} alt="boost icon" />
          </div>
          <div className="btn-container">
            <Button label={buttonLabel} effect={secondaryEffect} />
          </div>
          <img src={Svg5} alt="icon" className="left" />
          <img src={Svg4} alt="icon" className="right" />
        </div>
        <img src={Svg3} alt="icon" className="left2" />
        <img src={Svg2} alt="icon" className="right2" />
        <div className="down-section">
          <div className="img1">
            <img src={Hero1} alt="student" />
          </div>
          <div className="img2">
            <img src={Hero2} alt="student" />
          </div>
          <div className="img2">
            <img src={Hero3} alt="student" />
          </div>
          <div className="img1">
            <img src={Hero4} alt="student" />
          </div>
          <NavHashLink to={{ pathname: '/', hash: '#how-it-works' }}>
            <div className="btn-down">
              <img src={ArrowDown} alt="arrowdown" />
            </div>
          </NavHashLink>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
