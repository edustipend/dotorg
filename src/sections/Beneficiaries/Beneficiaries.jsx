import React from 'react';
import './styles.css';
import Button from '../../components/Button/index';
import Container from '../../components/Container/container';
import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';

const Beneficiaries = () => {
  return (
    <section className="Beneficiaries">
      <Container>
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

          <div className="numbers-container">
            <div className="numbers">
              <div className="top-numbers">
                <div className="top-left-numbers">
                  <h3>5000+</h3>
                  <p>Applications</p>
                </div>
                <div className="top-right-numbers">
                  <h3>100+</h3>
                  <p>Beneficiaries</p>
                </div>
              </div>
              <div className="bottom-numbers">
                <div className="bottom-left-numbers">
                  <h3>7+</h3>
                  <p>Ambassadors</p>
                </div>
                <div className="bottom-right-numbers">
                  <h3>2k+</h3>
                  <p>Happy Learners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="view-numbers-btn">
            <Button primary={true} size="large" label={'View the numbers'} effect="primary" />
          </div>
        </div>

        <div className="Beneficiaries-bigscreen-container">
          <div className="Beneficiaries-bigscreen-container-left">
            <div className="left-texts-bigscreen">
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

            <div className="numbers-container-bigscreen">
              <div className="numbers-bigscreen">
                <div className="top-numbers-bigscreen">
                  <div className="top-left-numbers-bigscreen">
                    <h3>5000+</h3>
                    <p>Applications</p>
                  </div>
                  <div className="top-right-numbers-bigscreen">
                    <h3>100+</h3>
                    <p>Beneficiaries</p>
                  </div>
                </div>
                <div className="bottom-numbers-bigscreen">
                  <div className="bottom-left-numbers-bigscreen">
                    <h3>7+</h3>
                    <p>Ambassadors</p>
                  </div>
                  <div className="bottom-right-numbers-bigscreen">
                    <h3>2k+</h3>
                    <p>Happy Learners</p>
                  </div>
                </div>
              </div>
            </div>

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
