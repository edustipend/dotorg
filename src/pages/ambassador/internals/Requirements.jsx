import RequirementsImage from '../../../assets/requirements.jpeg';
import Header from '../../../components/Header';
import '../styles.css';

export const Requirements = () => {
  return (
    <div className="about-main" id="about">
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
          {/* <h3 className="page-subheader">Here are some benefits to expect:</h3> */}
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>

            <h3 className="page-subheader">Focus on their skill area with at least two years of experience and expertise.</h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">A genuine passion for skills development and a strong belief in the organization's goals and values.</h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">
              Ability to articulate the organization's message clearly to diverse audiences, including students, organizations, educators, parents,
              and the general public.
            </h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">
              Should be comfortable speaking in public and advocating for the organization's goals and initiatives, whether in person or through
              digital channels.
            </h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">
              An active and engaging social media presence and the ability to leverage online platforms for outreach and advocacy.
            </h3>
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-primary">
              <div className="bullet-check bullet-primary" />
            </div>
            <h3 className="page-subheader">Prior experience as a brand ambassador or related field is a plus.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
