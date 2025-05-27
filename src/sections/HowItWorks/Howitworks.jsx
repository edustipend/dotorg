import React from 'react';
import './styles.css';
import Container from '../../components/Container';
import RRRRCard from './internals/RRRRCard';
import Header from '../../components/Header';
import { Howitworks, Text } from './constants';
import { Accordion } from '../../components/Accordion/Accordion';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="how-it-works-container">
      <Container>
        <Header className="v2-section-header ta-center" color="secondary" size="small">
          {Text.HEADER_TEXT}
        </Header>

        <Header className="v2-section-subheader ta-center" subheader size="small" color="secondary">
          {Text.SUBHEADER_TEXT}
        </Header>

        <Accordion title='hello' content={<h1>ade</h1>}/>

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
