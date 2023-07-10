import React from 'react';
import './styles.css';
import arrow from '../../assets/burdenarrow.png';
import Button from '../Button';
import Container from '../Container/container';


const TakeOffBurden = () => {
  return (
    <div className="takeoffburden-container" data-testid="takeoffburden-container">
      <Container>
        <div className="takeoffburden-Wrapper">
          <div className="takeoffburdenleft">
            <div className="takeoffburden-Card" data-testid="takeoffburden-Card"></div>
            <div className="takeoffburden-Transparent-Card" data-testid="takeoffburden-transparent-Card"></div>
          </div>

          <div className="takeoffburdenright">
            <h2>Take the burden off yourself.</h2>
            <p>Request for learning support and give your learning curve a boost</p>
            <img data-testid="burdenarrow" className="burdenarrow" src={arrow} alt="arrow" />

            <div className="request-stipend-btn-div">
              <Button className="request-stipend-btn" backgroundColor={'#FEBD1C'} label={'Request Stipend'} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TakeOffBurden;
