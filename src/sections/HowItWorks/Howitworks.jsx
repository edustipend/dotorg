import React from 'react';
import './styles.css';
import request from '../../assets/req.svg';
import review from '../../assets/review.png';
import receive from '../../assets/receive.png';
import achieve from '../../assets/achieve.png';
import Container from '../../components/Container/container';
import RRRRCard from './internals/RRRRCard';
import { Header } from '../../components/Header/Header';

const HowItWorks = () => {
  const howitworks = [
    {
      id: '1',
      svg: request,
      header: 'Request',
      headerText:
        'Complete the Request form (see below) stating what type of support you need with proof of why you need the support. The request form will be made open from the 1st - 8th of every month.'
    },
    {
      id: '2',
      svg: review,
      header: 'Review',
      headerText:
        'Each request will be reviewed by the team and by sponsors for authenticity and genuine need among other criteria. Some request types may have longer review times than others.'
    },
    {
      id: '3',
      svg: receive,
      header: 'Receive',
      headerText:
        'Once your request is approved, you will be notified accordingly and the Edustipend team will disburse the support requested. While in some cases actual cash will be disbursed, in some other cases we will disburse the specific need not cash.'
    },
    {
      id: '4',
      svg: achieve,
      header: 'Achieve',
      headerText:
        "Our hope is that with this support, you can go on to achieve your dreams. Because that's all we really want - we want you to be the best version of yourself, we are rooting for you!"
    }
  ];

  return (
    <div id="" className="how-it-works-container">
      <Container>
        <div className="header-div">
          <Header text="How it Works" color="secondary" />
        </div>

        <div className="subheader-div">
          <Header subheader={true} text="The 3Rs: Request, Review, Receive" color="secondary" />
        </div>

        {/* Request, Review, Receive - RRR */}
        <div className="Card-Main-Wrapper">
          {howitworks.map((item) => {
            return <RRRRCard key={item.id} item={item} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
