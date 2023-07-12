import React from 'react';
import {Modal} from '../Modal';
import Verified from '../../../../assets/email/verificationFlow/check-verified-02.png';

const EmailVerifiedModal = () => {
  //   const handleRedirect = () => {
  //     setIsOpen(false);
  //     navigate('/');
  //   };
  return (
    <div>
      <Modal
        goBack={false}
        imageIcon={Verified}
        imageIconAlt="verified"
        heading="Email Verified Successfully "
        mainIfo="Create a new password so you can log in to your account easily"
        dontCrtAcc={false}
        btnLable="Set Password"
        quote=""
      />
    </div>
  );
};

export default EmailVerifiedModal;
