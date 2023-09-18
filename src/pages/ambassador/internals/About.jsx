import AboutTheProgamImage from '../../../assets/about_the_program.png';
import Header from '../../../components/Header';
import '../styles.css';

export const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-main-child1 image-banner">
        <div className="">
          <img src={AboutTheProgamImage} className="about-main-image" alt="young lady smiling and working on her computer" />
        </div>
      </div>
      <div className="about-main-child">
        <Header className="section-header" color="primary" size="small">
          About The Program
        </Header>
        <div className="section-header-underline color-accent">
          <div />
          <div />
        </div>
        <div>
          <h3 className="page-subheader">
            The Edustipend Ambassador program is a partnership program between Edustipend and Leaders who are looking to create an impact in their
            communities.
          </h3>
          <h3 className="page-subheader">
            We are looking for <span className="color-accent">5 persons (past beneficiaries or otherwise)</span> who can serve as Ambassadors for
            Edustipend. <b>These persons will serve as Ambassadors for Edustipend for three months from October 1st to December 31st, 2023.</b>
          </h3>
          <h3 className="page-subheader">
            We will work closely with each ambassador to understand their story, their learning goals and how much progress they&lsquo;ve made through
            the support of Edustipend.
          </h3>

          <h3 className="page-subheader">
            Together, we will figure out how best to share your learnings and skills in a way that can impact others and our community with a global
            audience. They will play a vital role in representing and promoting the organization's mission and values.
          </h3>
        </div>
      </div>
    </div>
  );
};
