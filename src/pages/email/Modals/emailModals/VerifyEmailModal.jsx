import React from 'react';
import {Modal} from '../Modal';
import PaperPlaneTilt from '../../../../assets/email/verificationFlow/PaperPlaneTilt.png';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  return (
    <p>
      A verification email has been sent to this email <br /> <span style={{ color: '#5801FF' }}>chi@edustipend.org.</span> <br />
      Kindly check your email to verify.
    </p>
  );
};

const VerifyEmailModal = () => {
    const isEmailSent = true;
    const navigate = useNavigate();
  
    const seeVerification = () => {
      if (isEmailSent) {
        return navigate('/email-template');
      }
    };
  
  return (
    <div>
      <Modal
        goBack={true}
        imageIcon={PaperPlaneTilt}
        imageIconAlt="verify"
        heading="Verify Email"
        mainIfo={<Info />}
        dontCrtAcc={false}
        quote={`"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson`}
        btnLable="Go to Email"
        goBackLink="/demo-create/account"
        handleClick={seeVerification}
      />
    </div>
  );
};

export default VerifyEmailModal;
