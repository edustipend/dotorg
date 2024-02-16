import React from 'react';
import './TestimonialCard.css';
import PropTypes from 'prop-types';

function TestimonialCard({ username, userhandle, content, postDate, seeLink }) {
  return (
    <div className="testimonial__card">
      {/* Testimonial Card Header */}
      <div className="testimonial__card-header">
        <div className="testimonial__card-header--user-profile">
          <div className="user-profile--image"></div>

          <div className="user-profile--username">
            <p className="user-name">{username}</p>
            <p className="user-handle">{userhandle}</p>
          </div>
        </div>

        <p className="beneficiary__tag">Beneficiary</p>
      </div>

      {/* Testimonial Card Body */}
      <div className="testimony__content">{content}</div>

      {/* Footer */}
      <div className="testimony__footer">
        <span className="date">{postDate}</span>
        <a href="#" className="platform">
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
  seeLink: PropTypes.string.isRequired
};

export default TestimonialCard;
