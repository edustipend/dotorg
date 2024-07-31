import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import linkToUduakImage from '../../assets/team/Uduak.png';
import linkToBlessingImage from '../../assets/team/BlessingAkpan.jpg';
import linkToJoshuaImage from '../../assets/team/Joshua.png';
import linkToBlossomImage from '../../assets/team/BlossomImikan.png';
import linkToAdeboyeImage from '../../assets/team/AdeboyeJoseph.png';
import linkToEzehImage from '../../assets/team/ChijiokeEzeh.png';
import linkToDeborahImage from '../../assets/team/Deborah-ODIMAYO.png';
import linkToAnkpaImage from '../../assets/team/Eno-obongAkpan.png';
import linkToIsiaqImage from '../../assets/team/IsiaqRidwanBukola.png';
import linkToTosinImage from '../../assets/team/Oluwatosin.png';
import linkToPelzImage from '../../assets/team/PelumiAdetoye.png';
import linkToTeniImage from '../../assets/team/teni-oluwa.png';
import linkToUbonImage from '../../assets/team/ubon.png';
import Container from '../../components/Container';

import './MeetTheTeam.css';
const teamMembers = [
  { name: 'Uduak Obong-Eren', role: 'Founder', img: linkToUduakImage },
  { name: 'Blessing Akpan', role: 'Program Manager', img: linkToBlessingImage },
  { name: 'Joshua Alhassan', role: 'Community Manager', img: linkToJoshuaImage },
  { name: 'Blossom Imikan', role: 'Social Media Manager', img: linkToBlossomImage },
  { name: 'Adeboye Joseph', role: 'Graphics Designer', img: linkToAdeboyeImage },
  { name: 'Chijioke Ezeh', role: 'Frontend Engineer', img: linkToEzehImage },
  { name: 'Deborah Odimayo', role: 'Social Media Manager', img: linkToDeborahImage },
  { name: 'Enobong Akpan', role: 'UX Researcher', img: linkToAnkpaImage },
  { name: 'Isiaq Ridwan', role: 'Frontend Engineer', img: linkToIsiaqImage },
  { name: 'Oluwatosin Aduroja', role: 'Graphics Designer', img: linkToTosinImage },
  { name: 'Pelumi Adetoye', role: 'Frontend Engineer', img: linkToPelzImage },
  { name: 'Teniloluwa Sogbesan', role: 'Business Data Analyst', img: linkToTeniImage },
  { name: 'Ubon Udonkang', role: 'UIUX Designer', img: linkToUbonImage }
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

function MeetTheTeam() {
  return (
    <Container>
      <div className="meet-our-team" id="team">
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
