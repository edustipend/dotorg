import { useEffect, useState, useCallback } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { Hero1, Hero2, Hero3, Hero4, Svg1, Svg2, Svg3, Svg4, Svg5, ArrowDown } from '../../assets/index';
import { stipends, stipendsColors, ButtonLabelCopy, BUTTON_TYPE, APP_WINDOW_CLOSED_BANNER_TEXT, TestId } from './constants';
import './styles.css';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { getCurrentStipend } from './utils';
import { isApplicationWindowClosed } from '../../utils';

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

  const isWindowClosed = isApplicationWindowClosed();

  return (
    <section className="hero" data-testid={TestId.DEFAULT_HERO_TEST_ID}>
      {isWindowClosed ? (
        <Banner dataTest={TestId.BANNER_TEST_ID} type="alert">
          {APP_WINDOW_CLOSED_BANNER_TEXT}
        </Banner>
      ) : (
        <></>
      )}
      <Container>
        <div className="top-section">
          <Header>
            In need of {getCurrentStipend(currentStipend)}{' '}
            <span
              style={{
                color: stipendsColors[currentStipend]
              }}
            >
              {stipends[currentStipend]}
            </span>{' '}
            for your learning?
          </Header>
          <div className="boost-container">
            <Text content="Give your learning goals a BOOST" />
            <img src={Svg1} alt="boost icon" />
          </div>
          <div className="btn-container">
            <Button label={isWindowClosed ? ButtonLabelCopy.WINDOW_CLOSED : ButtonLabelCopy.WINDOW_OPEN} type={BUTTON_TYPE} />
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
          <NavHashLink to={{ pathname: '/', query: { v2: 'true' }, hash: '#how-it-works' }}>
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
