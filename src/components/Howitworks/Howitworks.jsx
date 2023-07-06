import React from 'react';
import './styles.css';
import { howitworks } from './constants';
import dots from '../../assets/dots.png';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      {/* Header */}
      <h1>How it Works</h1>

      {/* Sub Header */}
      <h2>The 3Rs: Request, Review, Receive</h2>

      {/* Header Text */}
      <p className="header-text">
        This describes the process for requesting support. Our goal is to help get you to A - our desired end result,{' '}
        <span className="header-text-span">which is to Achieve. </span>
        To achieve your learning goals.
      </p>

      {/* Request, Review, Receive - RRR */}
      <div className="Card-Main-Wrapper">
        {howitworks.map((item) => {
          return (
            <div key={item.id} className="Card-Wrapper">
              <div className="RRRR-Card">
                <div className="RRRR-SVG-header">
                  <img src={item.svg} alt="RRRR-SVG" />
                  <h2 className="RRRR-header">{item.header}</h2>
                </div>
                <p className="RRRR-headerText">{item.headerText}</p>
              </div>
              <div className="RRRR-Transparent-Card"></div>
            </div>
          );
        })}
      </div>

      {/* background dots design */}
      <img className="dots" src={dots} alt="dots background image" />
    </div>
  );
};

export default HowItWorks;
