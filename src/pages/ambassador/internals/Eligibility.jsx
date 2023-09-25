import EligibilityImage from '../../../assets/eligibility.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';

export const Eligibility = () => {
  return (
    <div className="top-main eligibilty" style={{ backgroundColor: 'paleturquoise' }} id="eligibility">
      <div className="top-main-child">
        <Header className="section-header" color="primary" size="small">
          Eligibility
        </Header>

        <div className="section-header-underline color-accent">
          <div />
          <div />
        </div>
        <div>
          <Text
            className="page-subheader"
            content=" The application is open to past beneficiaries of the Edustipend Monthly stipend and any candidate who can show the following:"
          />
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text className="page-subheader" content="Commitment to constant learning and growth." />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text className="page-subheader" content="Demonstrates a desire to impact others." />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text className="page-subheader" content="Able to commit at least 5 - 10 hours a week for the duration of the program" />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text className="page-subheader" content="Willingness to work on an impact project." />
          </div>
        </div>
      </div>
      <div className="top-main-child image-banner">
        <img src={EligibilityImage} className="about-main-image" alt="many young people" />
      </div>
    </div>
  );
};
