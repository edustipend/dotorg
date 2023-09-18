import BenefitsImage from '../../../assets/benefits.png';
import Header from '../../../components/Header';
import '../styles.css';

export const Benefits = () => {
  return (
    <div className="about-main" style={{ backgroundColor: 'lightblue' }}>
      <div className="about-main-child image-banner">
        <div className="">
          <img src={BenefitsImage} className="about-main-image" alt="young man smiling and working on a laptop" />
        </div>
      </div>
      <div className="about-main-child">
        <Header className="section-header" color="primary" size="small">
          Benefits
        </Header>
        <div className="section-header-underline color-primary">
          <div />
          <div />
        </div>
        <div>
          <h3 className="page-subheader">Being an Edustipend Ambassador just got more interesting. Here are some benefits to expect:</h3>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">Monthly data subscription for the period of the fellowship.</h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">Access to courses to skill up and on leadership.</h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">Support and resources to work on impact projects.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
