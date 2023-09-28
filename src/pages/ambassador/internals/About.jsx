import AboutTheProgamImage from '../../../assets/about_req.png';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';
import { NavHashLink } from 'react-router-hash-link';
import Button from '../../../components/Button';

export const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-main-header">
        <Header className="section-header" color="primary" size="medium">
          ABOUT THE AMBASSADOR PROGRAM
        </Header>
        <div className="section-header-underline color-primary">
          <div />
          <div />
        </div>
      </div>
      <div className="about-main-main-child">
        <div className="about-main-child1 image-banner">
          <div className="about-main-image-div">
            <img src={AboutTheProgamImage} className="about-main-image" alt="young lady smiling and working on her computer" />
          </div>
        </div>
        <div className="about-main-child">
          <div className="about-main-child-header">
            <Header className="section-header" color="primary" size="small">
              ABOUT THE AMBASSADOR PROGRAM
            </Header>
            <div className="section-header-underline color-primary">
              <div />
              <div />
            </div>
          </div>
          <div>
            <Text
              className="about-header-text"
              content=" The Edustipend Ambassador program is a partnership program between Edustipend and Leaders who are looking to create an impact in their communities."
            />
            <p className="about-header-text">
              We are looking for <span className="color-accent">5 persons (past beneficiaries or otherwise)</span> who can serve as Ambassadors for
              Edustipend. <b>These persons will serve as Ambassadors for Edustipend for three months from October 1st to December 31st, 2023.</b>
            </p>

            <Text
              className="about-header-text"
              content=" We will work closely with each ambassador to understand their story, their learning goals and how much progress they&lsquo;ve made through the support of Edustipend."
            />
            <Text
              className="about-header-text"
              content=" Together, we will figure out how best to share your learnings and skills in a way that can impact others and our community with a global audience. They will play a vital role in representing and promoting the organization's mission and values."
            />
          </div>

          <div className="top-cta-container">
            <NavHashLink
              to={{
                pathname: '/ambassador-program',
                hash: '#apply-now'
              }}>
              <Button label={'Become an Ambassador'} type="secondary" />
            </NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
};
