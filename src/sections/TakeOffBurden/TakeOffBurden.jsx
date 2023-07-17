import React from 'react';
import './styles.css';
import arrow from '../../assets/burdenarrow.png';
import { Button } from '../../components/Button/Button';
import Container from '../../components/Container';
import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';

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
            <img data-testid="burdenarrow" className="burdenarrow" src={arrow} alt="arrow" />

            <div className="takeoffburden-header-div">
              <Header className="takeoffburden-header" size="small" color="secondary">Take the burden off yourself.</Header>
            </div>

            <div className="takeoffburden-text-div">
              <Text content="Request for learning support and give your learning curve a boost" className="takeoffburden-text" />
            </div>

            <div className="request-stipend-btn-div">
              <Button effect="secondary" label="Request Stipend" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TakeOffBurden;
