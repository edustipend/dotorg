import React from 'react';
import '../styles.css';
import Header from '../../../components/Header';
import { Texts } from '../constant';

export const Application = () => {
  return (
    <div className="request-main" id="apply-now">
      <Header className="section-header" color="primary" size="small">
        {Texts.Apply}
      </Header>

      <div className="request-form-container">
        <iframe
          className="request-form"
          title="google-form"
          src="https://forms.gle/v4Zw9Qwr7Cyd7eRq9"
          width="640"
          height="1010"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>{' '}
      </div>
    </div>
  );
};
