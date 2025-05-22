import React from 'react';
import './styles.css';
import Container from '../../components/Container';
import supportImage from '../../assets/sal-image-two.png';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { CTA } from './contants';

const SupportALearnerSection = () => {
  return (
    <div className="support-container" data-testid="support-container">
      <Container>
        <div className="support-wrapper">
          <div className="support-left">
            <img className="support-image" src={supportImage} alt="support" data-testid="support-image" />
          </div>
          <div className="support-right" data-testid="support-right">
            <Header className="support-header" dataTest="support-title" color="primary" size="small">
              Support a Learner
            </Header>
            <Text
              color="primary"
              content="Your support helps learners gain access to essential resources like laptops, course fees and data. With just a small donation, you can make a lifelong difference."
              className="support-subtext"
              dataTest="support-subtext"
            />
            <div className="support-ctas bigscreen" data-testid="support-ctas-big">
              <Link to={CTA.SUPPORT_A_LEARNER} target="_blank" rel="noopener noreferrer">
                <Button size="large" label="I want to support a learner" type="primary" className="support-cta" dataTest="support-cta" />
              </Link>
              <Link to={CTA.VIEW_IMPACT} target="_blank" rel="noopener noreferrer">
                <Button size="large" label="View our impact stories" type="dark" className="support-cta" dataTest="impact-cta" />
              </Link>
            </div>
            <div className="support-ctas mobile" data-testid="support-ctas-mobile">
              <Link to={CTA.SUPPORT_A_LEARNER} target="_blank" rel="noopener noreferrer">
                <Button size="small" label="I want to support a learner" type="primary" className="support-cta" dataTest="support-cta" />
              </Link>
              <Link to={CTA.VIEW_IMPACT} target="_blank" rel="noopener noreferrer">
                <Button size="small" label="View our impact stories" type="dark" className="support-cta" dataTest="impact-cta" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SupportALearnerSection;
