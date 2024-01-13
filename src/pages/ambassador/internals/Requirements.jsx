import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';
import { Texts, requirementsData } from '../constant';

export const Requirements = () => {
  return (
    <div className="requirement-main" id="requirements">
      <div className="about-main-child">
        <Header className="req-section-header" size="small">
          <span style={{ color: '#5801FF', textTransform: 'uppercase' }}> {Texts.Req}</span>
        </Header>
        <div className="requirement-main-child">
          {requirementsData.map((requirement, index) => (
            <div key={index} className="bullet-wrapper">
              <div className="bullet bullet-accent">
                <div className="bullet-check bullet-accent" />
              </div>
              <Text className="requirement-header-text" content={requirement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
