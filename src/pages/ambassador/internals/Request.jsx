import React from 'react';
import '../styles.css';
import Header from '../../../components/Header';

export const Application = () => {
  return (
    <div className="request-main" id="apply-now">
      <Header className="section-header" color="primary" size="small">
        Application Form
      </Header>

      <div className="request-form-container">
        <iframe
          className="request-form"
          title="google-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSexxdP7Ylp-wA7OWaOcwJnPjXsuJPfo9Y5XDpDHiVrebaojNw/viewform?embedded=true"
          width="640"
          height="1010"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0">
          Loading…
        </iframe>{' '}
      </div>
    </div>
  );
};
