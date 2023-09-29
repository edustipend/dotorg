import { NavHashLink } from 'react-router-hash-link';
import EligibilityImage from '../../../assets/youngwoman.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';
import { Requirements } from './Requirements';
import Button from '../../../components/Button';

export const Eligibility = () => {
  return (
    <div className="top-main eligibilty" style={{ backgroundColor: 'white' }} id="eligibility">
      <div className="top-main-eligibility">
        <div className="top-main-eligibility-child">
          <Requirements />
          <div className="top-main-child-eligibility">
            <Header className="section-header eligibility" size="small">
              <span style={{ color: '#5801FF', textTransform: 'uppercase' }}>Eligibility</span>
            </Header>
            <div>
              <Text
                className="eligibility-header-text"
                content=" The application is open to past beneficiaries of the Edustipend Monthly stipend and any candidate who can show the following:"
              />
              <div className="bullet-wrapper">
                <div className="bullet bullet-accent">
                  <div className="bullet-check bullet-accent" />
                </div>
                <Text className="eligibility-header-list" content="Commitment to constant learning and growth." />
              </div>
              <div className="bullet-wrapper">
                <div className="bullet bullet-accent">
                  <div className="bullet-check bullet-accent" />
                </div>
                <Text className="eligibility-header-list" content="Demonstrates a desire to impact others." />
              </div>
              <div className="bullet-wrapper">
                <div className="bullet bullet-accent">
                  <div className="bullet-check bullet-accent" />
                </div>
                <Text className="eligibility-header-list" content="Able to commit at least 5 - 10 hours a week for the duration of the program" />
              </div>
              <div className="bullet-wrapper">
                <div className="bullet bullet-accent">
                  <div className="bullet-check bullet-accent" />
                </div>
                <Text className="eligibility-header-list" content="Willingness to work on an impact project." />
              </div>
            </div>
          </div>
        </div>
        <div className="eligibility-image top-main-eligibility-child">
          <img src={EligibilityImage} className="eligibility-main-image" alt="many young people" />
          <div className="btn-NavHashLink">
            <NavHashLink
              to={{
                pathname: '/ambassador-program',
                hash: '#apply-now'
              }}>
              <Button label={'Apply Now'} type="secondary" />
            </NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
};
