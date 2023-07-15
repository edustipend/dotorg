import React from 'react';
import './styles.css';
import Container from '../../components/Container/container';
import RRRRCard from './internals/RRRRCard';
import { Header } from '../../components/Header/Header';
import { Howitworks } from './constants';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="how-it-works-container">
      <Container>
        <div className="header-div">
          <Header text="How it Works" color="secondary" />
        </div>

        <div className="subheader-div">
          <Header subheader={true} text="The 3Rs: Request, Review, Receive" color="secondary" />
        </div>

        {/* Request, Review, Receive - RRR */}
        <div className="card-main-wrapper">
          {Howitworks.map((item) => {
            return <RRRRCard key={item.id} item={item} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
