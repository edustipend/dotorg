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
        <div className="header-div">
          <Header className="v2-section-header" color="secondary" size="medium">
            How it Works
          </Header>
        </div>

        <div className="subheader-div">
          <Header className="v2-section-subheader" color="secondary" size="small">
            The 3Rs & 1A
          </Header>
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
