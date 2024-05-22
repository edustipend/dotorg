import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import linkToUduakImage from '../../assets/Uduak.png';
import linkToBlessingImage from '../../assets/Blessing.png';
import linkToJoshuaImage from '../../assets/Joshua.png';
// import linkToBlossomImage from '../../assets/team/Blossom Imikan - Social Media Manager .jpg';
import Container from '../../components/Container';

import './MeetTheTeam.css';

function MeetTheTeam() {
  const teamMembers = [
    { name: 'Uduak Obong-Eren', role: 'Founder', img: linkToUduakImage },
    { name: 'Blessing Akpan', role: 'Program Manager', img: linkToBlessingImage },
    { name: 'Joshua Alhassan', role: 'Community Manager', img: linkToJoshuaImage }
    // { name: 'Blossom Imikan', role: 'Social Media Manager', img: linkToBlossomImage }
  ];

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
    <Container>
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

            {teamMembers.map((member, index) => (
              <div key={index} className="image-box box">
                <img className="team-image team-1" src={member.img} alt={member.name} />
                <div className="team-image__info">
                  <p className="team-image__info--name">{member.name}</p>
                  <small className="team-image__info--title">{member.role}</small>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
}

export default MeetTheTeam;
