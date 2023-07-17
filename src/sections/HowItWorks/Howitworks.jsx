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
        <Header size="small" color="secondary">
          <h2 className="how-it-works-header">How It Works</h2>
        </Header>

        <Header  subheader color="secondary">
         <h3 className="how-it-works-subheader"> The 3Rs: Request, Review, Receive</h3>
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
