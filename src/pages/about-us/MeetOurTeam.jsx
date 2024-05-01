import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import Uduak from '../../assets/about-us/Uduak.png';
import Blessing from '../../assets/about-us/Blessing.png';
import Joshua from '../../assets/about-us/Joshua.png';

import './MeetOurTeam.css';
import AboutUs from './AboutUs';

function MeetOurTeam() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <AboutUs />
      <div className="meet-our-team">
        <div className="meet-our-team__typography">
          <h2 className="meet-our-team__heading">
            Meet our team of <span className="meet-our-team__heading--span">leaders</span>, creators, and world class individuals
          </h2>

          <p className="meet-our-team__description">
            Get to Know the Passionate Individuals Committed to Empowering Learners, Each Bringing Unique Skills and Perspectives to Drive Positive
            Change in Communities Worldwide.
          </p>
        </div>

        <div className="meet-our-team__carousel carousel">
          <Slider {...settings}>
            {/* ----------- */}
            <div className="image-box box">
              <img className="team-image team-1" src={Uduak} alt="" />

              <div className="team-image__info">
                <p className="team-image__info--name">Uduak Obong-Eren</p>
                <small className="team-image__info--title">Founder</small>
              </div>
            </div>

            {/* ----------- */}
            <div className="image-box box">
              <img className="team-image team-1" src={Blessing} alt="" />

              <div className="team-image__info">
                <p className="team-image__info--name">Blessing Akpan</p>
                <small className="team-image__info--title">Program Manager</small>
              </div>
            </div>

            {/* ----------- */}
            <div className="image-box box">
              <img className="team-image team-1" src={Joshua} alt="" />

              <div className="team-image__info">
                <p className="team-image__info--name">Joshua Alhassan</p>
                <small className="team-image__info--title">Community Manager</small>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MeetOurTeam;
