import React from 'react';

// import aboutUs from '../../assets/about-us/about-us.png';
import targetImg from '../../assets/about-us/target.png';

import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      {/* About Us Head */}
      <div className="about-us__flex">
        {/* First Item */}
        <div className="about-us__head">
          {/* <img src={aboutUs} alt="" className="about-us__head--title-img" /> */}
          <h2 className="about-us__head--title">About us</h2>
          <p className="about-us__head--paragraph">
            Our Story, Our Mission. Learn About Our Commitment to Bridging the Digital Divide and Empowering Learners Worldwide
          </p>
        </div>

        {/* Second Item */}
        <img src={targetImg} alt="" className="about-us__head--img" />
      </div>

      <div className="about-us__container">
        {/* About Card */}
        <div className="about-us__card about__mission">
          <h3 className="about-us__mission--title">Our Mission</h3>
          <p className="about-us__mission--paragraph">
            to stoke the flames of a learner’s dream and to keep it from dying and build a critical mass of people who are willing to take a chance on
            others
          </p>
        </div>

        {/* Our Vision */}
        <div className="about-us__card about__vision">
          <h3 className="about-us__mission--title">Our Vision</h3>
          <p className="about-us__mission--paragraph">
            to increase the range of our services to meet the needs of beneficiaries and will build strategic partnerships to allow us expand to into
            other countries in Africa
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
