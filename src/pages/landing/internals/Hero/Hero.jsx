import Container from '../../../../components/Container/container';
import Button from '../../../../components/Button';
import { Link } from 'react-router-dom';
import { Hero1, Hero2, Hero3, Hero4, Svg1, Svg2, Svg3, Svg4, Svg5, ArrowDown } from '../../../../assets/index';

import './styles.css';
import { useEffect, useState } from 'react';

const stipends = ['stipend', 'laptop', 'data', 'fees'];
const Hero = () => {
  const [currentStipend, setcurrentStipend] = useState(0);
  const [stipendClass, setStipendClass] = useState('#5801ff');

  const nextStipend = () => {
    setcurrentStipend(currentStipend === stipends.length - 1 ? 0 : (prev) => prev + 1);
  };
  const nextStipendColor = () => {
    setStipendClass(
      currentStipend === 0
        ? '#5801ff'
        : currentStipend === 1
        ? '#FD5A33' //orange for laptop
        : currentStipend === 2
        ? '#08B7B7' // blue for data
        : currentStipend === 3
        ? '#FFB600' //yellow for fees
        : 'black'
    );
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      nextStipend();
      nextStipendColor();
      if (currentStipend > stipends.length - 1) {
        setcurrentStipend(0);
      }
    }, 1000);
    // const stipendClassName =
    //   currentStipend === 0
    //     ? '#5801ff'
    //     : currentStipend === 1
    //     ? '#FD5A33' //orange for laptop
    //     : currentStipend === 2
    //     ? '#08B7B7' // blue for data
    //     : currentStipend === 3
    //     ? '#FFB600' //yellow for fees
    //     : 'black';

    // console.log(stipendClass);
    // console.log(stipendClassName);

    return () => {
      clearInterval(timeInterval);
    };
  }, [currentStipend]);
  return (
    <section className="hero">
      <Container>
        <div className="top-section">
          <h1>
            In need of some{' '}
            <span
              style={{
                color: { stipendClass }
              }}>
              {stipends[currentStipend]}
            </span>{' '}
            to support your learning?
          </h1>
          <div className="boost-container">
            <p>Give your learning goals a BOOST</p>
            <img src={Svg1} alt="svg" />
          </div>
          <div className="btn-container">
            <Button label="Request stipend" />
          </div>
          <img src={Svg5} alt="svg" className="left" />
          <img src={Svg4} alt="svg" className="right" />
        </div>
        <img src={Svg3} alt="svg" className="left2" />
        <img src={Svg2} alt="svg" className="right2" />
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
          <Link to="#how-it-works">
            <div className="btn-down">
              <img src={ArrowDown} alt="arrowdown" />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
