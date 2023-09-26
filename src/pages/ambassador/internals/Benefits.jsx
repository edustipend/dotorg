import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';
import { benefitsData } from '../constant';
import { StaticText } from '../constant';

const Benefit = ({ imageSrc, title, description }) => (
  <div className="benefits">
    <div className="benefits-data-icon-div">
      <img src={imageSrc} alt={`${title} Icon`} height="50px" width="50px" />
    </div>
    <Text className="data-stipend" content={title} />
    <Text className="data-stipend-text" content={description} />
  </div>
);

Benefit.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export const Benefits = () => {
  return (
    <div className="benefits-main" style={{ backgroundColor: 'white' }}>
      <div className="benefit-main-child">
        <div className="benefits-main-header">
          <Header className="section-header" color="primary" size="small">
            {StaticText.Header}
          </Header>
          <div className="section-header-underline color-primary">
            <div />
            <div />
          </div>
        </div>

        <div className="benefits-container">
          {benefitsData.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};
