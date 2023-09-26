// import BenefitsImage from '../../../assets/benefits.png';
import Header from '../../../components/Header';
// import Text from '../../../components/Text';
import data from '../../../assets/data.png';
import courses from '../../../assets/courses.png';
import impact from '../../../assets/impact.png';
import '../styles.css';
import Text from '../../../components/Text';

export const Benefits = () => {
  return (
    <div className="benefits-main" style={{ backgroundColor: 'white' }}>
      <div className="benefit-main-child">
        <div className="benefits-main-header">
          <Header className="section-header" color="primary" size="small">
            BENEFITS
          </Header>
          <div className="section-header-underline color-primary">
            <div />
            <div />
          </div>
        </div>

        <div className="benefits-container">
          <div className="benefits ">
            <div className="benefits-data-icon-div">
              <img src={data} alt="phone_icon" height="50px" width="50px" />
            </div>
            <Text className="data-stipend" content="DATA STIPEND" />
            <Text className="data-stipend-text" content="Monthly data subscription for the period of the fellowship." />
          </div>
          <div className="benefits-courses">
            <div className="benefits-courses-div">
              <img src={courses} alt="phone_icon" height="50px" width="50px" />
            </div>
            <Text className="data-stipend" content="LEADERSHIP COURSES" />
            <Text className="data-stipend-text" content="Access to courses to skill up on leadership." />
          </div>
          <div className="benefits-impact">
            <div className="benefits-impact-div">
              <img src={impact} alt="phone_icon" height="50px" width="50px" />
            </div>
            <Text className="data-stipend" content="IMPACT PROJECT SUPPORT" />
            <Text className="data-stipend-text" content="Support and resources to work on impact projects." />
          </div>
        </div>
      </div>
    </div>
  );
};
