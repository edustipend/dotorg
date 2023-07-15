import React from 'react';
import './styles.css';
import Button from '../../components/Button/index';
import Container from '../../components/Container/container';
import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';
import NumbersGrid from './Internals/NumbersGrid';

const Beneficiaries = () => {
  return (
    <section className="Beneficiaries">
      <Container>
        {/* Mobile */}
        <div className="Beneficiaries-container">
          <div className="texts-and-images">
            <div className="left-texts">
              <div className="Beneficiaries-header-div">
                <Header text="Our Beneficiaries so far" color="primary" />
              </div>

              <div className="Beneficiaries-subheader-div">
                <Header subheader={true} text="Our Beneficiaries" color="primary" />
              </div>

              <div className="Beneficiaries-text-div">
                <Text
                  color="primary"
                  content="We analysed the applications by gender, age, and state of origin, and we saw the following:"
                  className="Beneficiaries-text"
                />
              </div>
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
        <div className="Beneficiaries-bigscreen-container">
          <div className="Beneficiaries-bigscreen-container-left">
            <div className="left-texts-bigscreen">
              <div className="Beneficiaries-header-bigscreen">
                <Header text="Our Beneficiaries so far" color="primary" />
              </div>

              <div className="Beneficiaries-subheader-bigscreen">
                <Header subheader={true} text="Our Beneficiaries" color="primary" />
              </div>

              <div className="Beneficiaries-text-div">
                <Text
                  color="primary"
                  content="We analysed the applications by gender, age, and state of origin, and we saw the following:"
                  className="Beneficiaries-text"
                />
              </div>
            </div>

            <NumbersGrid />

            <div className="view-numbers-btn">
              <Button primary={true} size="large" label={'View the numbers'} effect="primary" />
            </div>
          </div>

          <div className="Beneficiaries-bigscreen-container-right">
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
