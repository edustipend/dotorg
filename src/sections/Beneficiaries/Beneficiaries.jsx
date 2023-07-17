import React from 'react';
import './styles.css';
import Button from '../../components/Button/index';
import Container from '../../components/Container';
import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';
import NumbersGrid from './Internals/NumbersGrid';

const Beneficiaries = () => {
  return (
    <section className="beneficiaries">
      <Container>
        {/* Mobile */}
        <div className="beneficiaries-container">
          <div className="texts-and-images">
            <div className="left-texts">
              <Header className="Beneficiaries-header" color="primary" size="small">
                Our Beneficiaries so far
              </Header>

              <Header size="small" subheader color="primary">
                <h3 className="Beneficiaries-subheader">Our Beneficiaries</h3>
              </Header>

              <Text
                color="primary"
                content="We analysed the applications by gender, age, and state of origin, and we saw the following:"
                className="Beneficiaries-text"
              />
            </div>

            <div className="right-images">
              <div className="top-images">
                <div className="image1" data-testid="image1"></div>
                <div className="image2" data-testid="image2"></div>
              </div>

              <div className="bottom-images">
                <div className="image3" data-testid="image3"></div>
                <div className="image4" data-testid="image4"></div>
              </div>
            </div>
          </div>

          <NumbersGrid />

          <div className="view-numbers-btn">
            <Button primary={true} size="large" label={'View the numbers'} effect="primary" />
          </div>
        </div>

        {/* Bigger Screen */}
        <div className="beneficiaries-bigscreen-container">
          <div className="beneficiaries-bigscreen-container-left">
            <div className="left-texts-bigscreen">
              <Header  color="primary" size="small">
               <h2 className="Beneficiaries-header-bigscreen"> Our Beneficiaries so far</h2>
              </Header>

              <Header  subheader={true} size="small" color="primary">
                <h3 className="Beneficiaries-subheader-bigscreen">Our Beneficiaries</h3>
              </Header>

              <Text
                color="primary"
                content="We analysed the applications by gender, age, and state of origin, and we saw the following:"
                className="Beneficiaries-text-bigscreen"
              />
            </div>

            <NumbersGrid />

            <div className="view-numbers-btn">
              <Button primary={true} size="large" label={'View the numbers'} effect="primary" />
            </div>
          </div>

          <div className="beneficiaries-bigscreen-container-right">
            <div className="top-images">
              <div className="image1"></div>
              <div className="image2"></div>
            </div>

            <div className="bottom-images">
              <div className="image3"></div>
              <div className="image4"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Beneficiaries;
