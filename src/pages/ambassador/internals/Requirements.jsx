import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import '../styles.css';
<<<<<<< HEAD
import { Texts, requirementsData } from '../constant';
=======
import { requirementsData } from '../constant';
>>>>>>> 8822c9c2abb87a6605290487cd79f0730f84cf8f

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
