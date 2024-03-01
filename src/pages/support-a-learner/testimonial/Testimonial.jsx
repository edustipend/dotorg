import React, { useState } from 'react';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard';
import { Container } from '../../../components/Container/ContainerComponent';
import nonsoImg from '../../../assets/testimonials/nonso-boy.jpg';
import ulenyoImg from '../../../assets/testimonials/ulenyo.jpg';
import FawazImg from '../../../assets/testimonials/fawaz_code.jpg';
// import { useState } from 'react';

function Testimonial() {
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

  // ----------- TEST ----------
  const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = (direction) => {
  //   const container = document.querySelector('.testimonial__testimonies-container');
  //   const cardWidth = container.offsetWidth / 2; // Adjust based on your card width

  //   if (direction === 'left') {
  //     setScrollPosition(scrollPosition - cardWidth);
  //   } else if (direction === 'right') {
  //     setScrollPosition(scrollPosition + cardWidth);
  //   }
  // };

  const handleScroll = (direction) => {
    const container = document.querySelector('.testimonial__testimonies-container');
    const cardWidth = container.offsetWidth / 2; // Adjust based on your card width
    const totalWidth = testimonialsData.length * cardWidth;
    const containerWidth = container.offsetWidth;

    if (direction === 'left') {
      setScrollPosition((prevPosition) => Math.max(0, prevPosition - containerWidth));
    } else if (direction === 'right') {
      setScrollPosition((prevPosition) => Math.min(totalWidth - containerWidth, prevPosition + containerWidth));
    }
  };
  // ----------- END OF TEST -----------

  // Duplicate the testimonialsData to create an infinite scroll effect
  const infiniteTestimonialsData = [...testimonialsData, ...testimonialsData, ...testimonialsData];
  return (
    <Container>
      <div className="testimonial__section">
        <h2 className="testimonial__heading">Testimonials</h2>
        <p className="testimonial__description">{testimonialDescription}</p>
        <a href="#" className="testimonial__support-link">
          Support a learner
        </a>
        {/* Left Arrow */}
        <div className="left-arrow arrow" onClick={() => handleScroll('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
          </svg>
        </div>
        {/* Scrollable Testimonial Cards */}
        <div className="testimonial__testimonies-container">
          {/* Testimonial Cards */}
          <div className="testimonial__testimonies" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {infiniteTestimonialsData.map((testimonial, index) => (
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
          </div>
        </div>
        {/* Right Arrow */}
        <div className="right-arrow arrow" onClick={() => handleScroll('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </div>
      </div>
    </Container>
  );
}

export default Testimonial;
