import React from 'react';
import './styles.css';
import Container from '../../components/Container';
import RRRRCard from './internals/RRRRCard';
import Header from '../../components/Header';
import { Howitworks } from './constants';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="how-it-works-container">
      <Container>
        <Header className="how-it-works-header" color="secondary" size="small">
          How It Works
        </Header>

        <Header className="how-it-works-subheader" subheader size="small" color="secondary">
          The 3Rs: Request, Review, Receive
        </Header>

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
