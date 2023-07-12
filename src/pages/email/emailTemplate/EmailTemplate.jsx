import React from 'react';
import './styles.css';
import { Button } from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import leaner1 from '../../../assets/email/emailTemplate/person1.png';
import leaner2 from '../../../assets/email/emailTemplate/person2.png';
import leaner3 from '../../../assets/email/emailTemplate/person3.png';
import leaner4 from '../../../assets/email/emailTemplate/person4.png';
import leaner5 from '../../../assets/email/emailTemplate/person5.png';
import leaner6 from '../../../assets/email/emailTemplate/person6.png';

const EmailTemplate = () => {
  const validEmail = true;
  const navigate = useNavigate();
  const handleClick = () => {
    if (validEmail) {
      navigate('/demo-create/verified');
    }
  };
  return (
    <div className='emailTemplate-container'>
      <div>
        <div>
          <p>Hello Designer Chi,</p>
          <p>You are almost there</p>
          <p>We are here to support you in your learning goals</p>
          <p>Please click the button below to verify your email address</p>
        </div>
        <div>
          <Button label="Verify My Email" primary={true} onClick={handleClick} />
        </div>
        <div>
          <p>Supporting you to fulfill your learning goals</p>
          <p>The Edustipend Team</p>
        </div>
        <div>
          <img src={leaner1} alt="learner" />
          <img src={leaner2} alt="learner" />
          <img src={leaner3} alt="learner" />
          <img src={leaner4} alt="learner" />
          <img src={leaner5} alt="learner" />
          <img src={leaner6} alt="learner" />
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
