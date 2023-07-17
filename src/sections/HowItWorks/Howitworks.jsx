import React from 'react';
import './styles.css';
import Container from '../../components/Container';
import RRRRCard from './internals/RRRRCard';
import { Header } from '../../components/Header/Header';
import { Howitworks } from './constants';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="how-it-works-container">
      <Container>
        <Header className="how-it-works-header" size="small" color="secondary">
          How It Works
        </Header>

        <Header className="how-it-works-subheader" subheader color="secondary">
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
