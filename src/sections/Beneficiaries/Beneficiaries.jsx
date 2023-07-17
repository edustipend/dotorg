import React from 'react';
import './styles.css';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Text from '../../components/Text';
import NumbersGrid from './Internals/NumbersGrid';

export const Beneficiaries = () => {
  return (
    <section className="beneficiaries">
      <Container>
        {/* Mobile */}
        <div className="beneficiaries-container">
          <div className="texts-and-images">
            <div className="left-texts">
              <div className="beneficiaries-header-div">
                <Header className="v2-section-header" color="primary" size="medium">
                  Our Beneficiaries so far
                </Header>
              </div>

              <div className="beneficiaries-subheader-div">
                <Header className="v2-section-subheader" color="primary" size="small">
                  Our Beneficiaries
                </Header>
              </div>

              <div className="beneficiaries-text-div">
                <Text
                  color="primary"
                  content="We analysed the applications by gender, age, and state of origin, and we saw the following:"
                  className="beneficiaries-text"
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
        <div className="beneficiaries-bigscreen-container">
          <div className="beneficiaries-bigscreen-container-left">
            <div className="left-texts-bigscreen">
              <div className="beneficiaries-header-bigscreen">
                <Header className="v2-section-header" color="primary" size="medium">
                  Our Beneficiaries so far
                </Header>
              </div>

              <div className="beneficiaries-subheader-bigscreen">
                <Header className="v2-section-subheader" color="primary" size="small" subheader>
                  Our Beneficiaries
                </Header>
              </div>

              <div className="beneficiaries-text-div">
                <Text
                  color="primary"
                  content="We analysed the applications by gender, age, and state of origin, and we saw the following:"
                  className="beneficiaries-text"
                />
              </div>
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
