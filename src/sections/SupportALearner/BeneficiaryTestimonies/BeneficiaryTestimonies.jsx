import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard';
import { Container } from '../../../components/Container/ContainerComponent';
import nonsoImg from '../../../assets/testimonials/nonso-boy.jpg';
import ulenyoImg from '../../../assets/testimonials/ulenyo.jpg';
import FawazImg from '../../../assets/testimonials/fawaz_code.jpg';
import Header from '../../../components/Header';
import BeneficiaryStyle from './BeneficiaryTestimonies.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const testimonialsData = [
  {
    username: 'Nonso',
    userhandle: '@NonsoBoy70',
    content:
      '@edustipend I thank you so much for this opportunity, the joy I felt recieving the laptop was indescribable. Thank you for rooting for us. God bless the edustipend team for this. I also want to use this opportunity to thank my mentor @t_chukwure for taking a chance on me.',
    postDate: 'March 17, 2023',
    seeLink: 'See on X',
    hrefLink: 'https://x.com/edustipend/status/1630614305447223297?s=20',
    source: nonsoImg
  },
  {
    username: 'Ulenyo-Ojo Ohiemii',
    userhandle: '@ulenyo',
    content:
      "This feels a lot like a dreeeaaam. I have been barely coping with coding on mobile and borrowed systems and so I couldn't contain my surprise when I got the mail. Words still fail me. Thank you a million times @edustipend team and @meekg33k for taking a chance on me.",
    postDate: 'March 1, 2023',
    seeLink: 'See on X',
    hrefLink: 'https://twitter.com/ulenyo/status/1630710032156246018',
    source: ulenyoImg
  },
  {
    username: 'Fawaz Abdulramon',
    userhandle: '@Fawaz_codes',
    content:
      'I just received an alert of 10K into my MTN account. This is a great source of motivation for me to continue my journey and by the grace of God, I will make good use of it. Thank you @edustipend. Thank you to everyone that has contributed..',
    postDate: 'January 9, 2023',
    seeLink: 'See on X',
    hrefLink: 'https://twitter.com/edustipend/status/1630614305447223297',
    source: FawazImg
  },
  {
    username: 'Fawaz Abdulramon',
    userhandle: '@Fawaz_codes',
    content:
      'I just received an alert of 10K into my MTN account. This is a great source of motivation for me to continue my journey and by the grace of God, I will make good use of it. Thank you @edustipend. Thank you to everyone that has contributed..',
    postDate: 'January 9, 2023',
    seeLink: 'See on X',
    hrefLink: 'https://twitter.com/edustipend/status/1630614305447223297',
    source: FawazImg
  }
];
const testimonialDescription = `Discover what the community has to say about the transformative power of Edustipend. Real stories, real impact. Here are some testimonials
  from individuals whose lives have been touched.`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
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
      breakpoint: 768,
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

function BeneficiaryTestimonies() {
  return (
    <div data-testid={'Testimonial'} className={BeneficiaryStyle.testimonialBigWrapper}>
      <Container>
        <div className={BeneficiaryStyle.testimonial__section}>
          <Header size="medium" color="secondary" dataTest="another-header-test" className="custom-header-class">
            Testimonials
          </Header>
          <div className={BeneficiaryStyle.horizontal__line}></div>
          <p className={BeneficiaryStyle.testimonial__description}>{testimonialDescription}</p>
          <Link to="/support-a-learner/donate" className={BeneficiaryStyle.testimonial__supportLink}>
            Support a Learner
          </Link>
          {/* Scrollable Testimonial Cards */}
          <div className={`${BeneficiaryStyle.testimonial__testimonies} slider-container`}>
            <Slider {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  username={testimonial?.username}
                  userhandle={testimonial?.userhandle}
                  content={testimonial?.content}
                  postDate={testimonial?.postDate}
                  seeLink={testimonial?.seeLink}
                  hrefLink={testimonial?.hrefLink}
                  source={testimonial?.source}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BeneficiaryTestimonies;
