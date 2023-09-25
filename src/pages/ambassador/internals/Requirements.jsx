import RequirementsImage from '../../../assets/about_req.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';

export const Requirements = () => {
  return (
    <div className="about-main" id="requirements">
      <div className="about-main-child1 image-banner">
        <div className="">
          <img src={RequirementsImage} className="about-main-image" alt="young lady smiling and working on her computer" />
        </div>
      </div>
      <div className="about-main-child">
        <Header className="section-header" color="primary" size="small">
          Requirements
        </Header>
        <div className="section-header-underline color-primary">
          <div />
          <div />
        </div>
        <div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text className="page-subheader" content="Focus on their skill area with at least two years of experience and expertise." />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text
              className="page-subheader"
              content="A genuine passion for skills development and a strong belief in the organization's goals and values."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text
              className="page-subheader"
              content="    Ability to articulate the organization's message clearly to diverse audiences, including students, organizations, educators, parents, and the general public."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text
              className="page-subheader"
              content=" Should be comfortable speaking in public and advocating for the organization's goals and initiatives, whether in person or through digital channels."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text
              className="page-subheader"
              content="An active and engaging social media presence and the ability to leverage online platforms for outreach and advocacy."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <Text className="page-subheader" content="Prior experience as a brand ambassador or related field is a plus." />
          </div>
        </div>
      </div>
    </div>
  );
};
