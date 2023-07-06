import React from 'react';
import '../styles.css';

export const Application = () => {
  return (
    <div className="request-main" id="apply-now">
      <h2 className="section-header">
        <p>Application Form</p>
      </h2>
      <div>
        <iframe
          class="request-form"
          title="google-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSexxdP7Ylp-wA7OWaOcwJnPjXsuJPfo9Y5XDpDHiVrebaojNw/viewform?embedded=true"
          width="640"
          height="1010"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>{' '}
      </div>
    </div>
  );
};
