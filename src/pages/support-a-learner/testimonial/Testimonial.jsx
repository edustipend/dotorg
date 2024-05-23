import React from 'react';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard';
import { Container } from '../../../components/Container/ContainerComponent';
import nonsoImg from '../../../assets/testimonials/nonso-boy.jpg';
import ulenyoImg from '../../../assets/testimonials/ulenyo.jpg';
import FawazImg from '../../../assets/testimonials/fawaz_code.jpg';
import Header from '../../../components/Header';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

// Array of testimonial data
const testimonialsData = [
  {
    username: 'Nonso',
    userhandle: '@NonsoBoy70',
    content:
      '@edustipend I thank you so much for this opportunity, the joy I felt recieving the laptop was indescribable. Thank you for rooting for us. God bless the edustipend team for this. I also want to use this opportunity to thank my mentor @t_chukwure for taking a chance on me.',
    postDate: 'March 17, 2023',
    seeLink: 'See on X &rarr;',
    hrefLink: 'https://x.com/edustipend/status/1630614305447223297?s=20',
    source: nonsoImg
  },
  {
    username: 'Ulenyo-Ojo Ohiemii',
    userhandle: '@ulenyo',
    content:
      "This feels a lot like a dreeeaaam. I have been barely coping with coding on mobile and borrowed systems and so I couldn't contain my surprise when I got the mail. Words still fail me. Thank you a million times @edustipend team and @meekg33k for taking a chance on me.",
    postDate: 'March 1, 2023',
    seeLink: 'See on X &rarr;',
    hrefLink: 'https://twitter.com/ulenyo/status/1630710032156246018',
    source: ulenyoImg
  },
  {
    username: 'Fawaz Abdulramon',
    userhandle: '@Fawaz_codes',
    content:
      'I just received an alert of 10K into my MTN account. This is a great source of motivation for me to continue my journey and by the grace of God, I will make good use of it. Thank you @edustipend. Thank you to everyone that has contributed..',
    postDate: 'January 9, 2023',
    seeLink: 'See on X &rarr;',
    hrefLink: 'https://twitter.com/edustipend/status/1630614305447223297',
    source: FawazImg
  },
  {
    username: 'Fawaz Abdulramon',
    userhandle: '@Fawaz_codes',
    content:
      'I just received an alert of 10K into my MTN account. This is a great source of motivation for me to continue my journey and by the grace of God, I will make good use of it. Thank you @edustipend. Thank you to everyone that has contributed..',
    postDate: 'January 9, 2023',
    seeLink: 'See on X &rarr;',
    hrefLink: 'https://twitter.com/edustipend/status/1630614305447223297',
    source: FawazImg
  }
];
const testimonialDescription = `Discover what the community has to say about the transformative power of Edustipend. Real stories, real impact. Here are some testimonials
from individuals whose lives have been touched.`;

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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

function Testimonial() {
  return (
    <div className="testimonial-bkg-wrapper">
      <Container>
        <div className="testimonial__section">
          <Header size="medium" color="secondary" dataTest="another-header-test" className="custom-header-class">
            Testimonials
          </Header>
          <p className="testimonial__description">{testimonialDescription}</p>
          <a href="#" className="testimonial__support-link">
            Support a learner
          </a>
          {/* Scrollable Testimonial Cards */}
          <div className="testimonial__testimonies slider-container">
            <Slider {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  username={testimonial.username}
                  userhandle={testimonial.userhandle}
                  content={testimonial.content}
                  postDate={testimonial.postDate}
                  seeLink={testimonial.seeLink}
                  hrefLink={testimonial.hrefLink}
                  source={testimonial.source}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
