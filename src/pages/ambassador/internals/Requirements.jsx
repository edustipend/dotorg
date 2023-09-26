// import RequirementsImage from '../../../assets/about_req.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';

export const Requirements = () => {
  return (
    <div className="requirement-main" id="requirements">
      <div className="about-main-child">
        <Header className="req-section-header" size="small">
          <span style={{ color: '#5801FF', textTransform: "uppercase" }}> Requirements</span>
        </Header>
        <div className="requirement-main-child">
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text className="requirement-header-text" content="Focus on their skill area with at least two years of experience and expertise." />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text
              className="requirement-header-text"
              content="A genuine passion for skills development and a strong belief in the organization's goals and values."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text
              className="requirement-header-text"
              content="Ability to articulate the organization's message clearly to diverse audiences, including students, organizations, educators, parents, and the general public."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text
              className="requirement-header-text"
              content=" Should be comfortable speaking in public and advocating for the organization's goals and initiatives, whether in person or through digital channels."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text
              className="requirement-header-text"
              content="An active and engaging social media presence and the ability to leverage online platforms for outreach and advocacy."
            />
          </div>
          <div className="bullet-wrapper">
            <div className="bullet bullet-accent">
              <div className="bullet-check bullet-accent" />
            </div>
            <Text className="requirement-header-text" content="Prior experience as a brand ambassador or related field is a plus." />
          </div>
        </div>
      </div>
    </div>
  );
};
