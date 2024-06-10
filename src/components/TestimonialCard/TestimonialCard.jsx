import React from 'react';
import PropTypes from 'prop-types';

import TestimonialStyle from './TestimonialCard.module.css';

function TestimonialCard({ username, userhandle, content, postDate, seeLink, hrefLink, source }) {
  return (
    <div className={TestimonialStyle.testimonial__card}>
      <div className={TestimonialStyle.testimonial__card_header}>
        <div className={TestimonialStyle.testimonial__card_headerUser_profile}>
          <img className={TestimonialStyle.user_profile__image} src={source} alt={username} />

          <div className={TestimonialStyle.user_profile__username}>
            <p className={TestimonialStyle.username}>{username}</p>
            <p className={TestimonialStyle.user_handle}>{userhandle}</p>
          </div>
        </div>

        <p className={TestimonialStyle.beneficiary__tag}>Beneficiary</p>
      </div>

      <div className={TestimonialStyle.testimony__content}>{content}</div>

      <div className={TestimonialStyle.testimony__footer}>
        <span className={TestimonialStyle.date}>{postDate}</span>
        <a href={hrefLink} target="blank" className={TestimonialStyle.platform}>
          {seeLink}
        </a>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  username: PropTypes.string,
  userhandle: PropTypes.string.isRequired,
  content: PropTypes.string,
  postDate: PropTypes.string,
  seeLink: PropTypes.string.isRequired,
  hrefLink: PropTypes.string,
  source: PropTypes.any.isRequired
};

export default TestimonialCard;
