import EligibilityImage from '../../../assets/eligibility.png';
import '../styles.css';

export const Eligibility = () => {
  return (
    <div className="top-main" style={{ backgroundColor: 'paleturquoise' }} id="eligibility">
      <div className="top-main-child">
        <h2 className="section-header">Eligibility</h2>
        <div className="section-header-underline color-accent">
          <div />
          <div />
        </div>
        <div>
          <h3 className="page-subheader">
            The appliation is open to past beneficiaries of Edustipend monthly stipend and any candidate who can show the following:{' '}
          </h3>

          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <h3 className="page-subheader">Commitment to constant learning and growth.</h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <h3 className="page-subheader">Demonstrates a desire to impact others.</h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <h3 className="page-subheader">Willingness to work on an impact project.</h3>
          </div>
        </div>
      </div>
      <div className="top-main-child image-banner">
        <div className="ambassador-image-wrapper">
          <img src={EligibilityImage} className="ambassador-image" alt="many young people" />
        </div>
      </div>
    </div>
  );
};
