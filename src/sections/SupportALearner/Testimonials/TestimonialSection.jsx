import React from 'react';
import TestimonialCard from './TestimonialCard';

import './TestimonialCard.css';

function TestimonialSection() {
  return (
    <div className="testimonial__section">
      <h2 className="testimonial__heading">Testimonials</h2>
      <p className="testimonial__description">
        Discover what the community has to say about transformative power of Edustipend. Real stories, real impact. Here are some testimonials from
        individuals who's lives have been touched,
      </p>

      {/* Support a learner Button */}
      <a href="#" className="testimonial__support-link">
        Support a learner
      </a>

      <div className="left-arrow arrow">
        <i class="bx bx-left-arrow-alt"></i>
      </div>

      <div className="testimonial__testimonies">
        <TestimonialCard
          username="Nonso"
          userhandle="@NonsoBoy70"
          content="@edustipend I thank you so much for this opportunity, the joy I felt
            recieving the laptop was indescribable. Thank you for rooting for us.
            God bless the edustipend team for this. I also want to use this
            opportunity to thank my mentor @t_chukwure for taking a chance on me."
          postDate="March 17, 2023"
          seeLink="See on X &rarr;"
        />
        <TestimonialCard
          username="Ulenyo-Ojo Ohiemii"
          userhandle="@ulenyo"
          content="This feels alot like a dreeeaaam. I have been barely coping with coding on mobile and borrowed systems and so I couldn't contain my surprise when I got the mail. Words still fail me. Thank you a million times @edustipend team and @meekg33k for taking a chance on me."
          postDate="March 1, 2023"
          seeLink="See on X &rarr;"
        />
        <TestimonialCard
          username="Ibrahim Yakubu A..."
          userhandle="@ibrahim29835768"
          content="I just received an alert of 10K into my MTN account. This is a great source of motivation for me to continue my journey and by the grace of God, I will make good use of it. Thank you @edustipend. Thank you to everyone that has contributed.."
          postDate="January 9, 2023"
          seeLink="See on X &rarr;"
        />
      </div>

      {/* Right Arrow */}
      <div className="right-arrow arrow">
        <i class="bx bx-right-arrow-alt"></i>
      </div>
    </div>
  );
}

export default TestimonialSection;
