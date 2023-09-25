import BenefitsImage from '../../../assets/benefits.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';

export const Benefits = () => {
  return (
    <div className="top-main" style={{ backgroundColor: 'lightblue' }}>
      <div className="top-main-child">
        <Header className="section-header" color="primary" size="small">
          Benefits
        </Header>
        <div className="section-header-underline color-primary">
          <div />
          <div />
        </div>
        <div>
          <Text className="page-subheader" content="Being an Edustipend Ambassador just got more interesting. Here are some benefits to expect:" />
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text className="page-subheader" content="Monthly data subscription for the period of the fellowship." />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text className="page-subheader" content="Access to courses to skill up and on leadership." />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text className="page-subheader" content="Support and resources to work on impact projects." />
          </div>
        </div>
      </div>
      <div className="top-main-child image-banner">
        <img src={BenefitsImage} className="about-main-image" alt="young man smiling and working on a laptop" />
      </div>
    </div>
  );
};
