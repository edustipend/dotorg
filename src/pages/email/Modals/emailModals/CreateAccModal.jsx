import React from 'react';
import UserPlus from '../../../../assets/email/verificationFlow/UserPlus.png';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../Modal';

const CreateAccModal = () => {
  const setToCreate = true;
  const navigate = useNavigate();

  const createAcct = () => {
    if (setToCreate) {
      return navigate('/demo-create/verify');
    }
  };

  return (
    <div>
      <Modal
        goBack={true}
        imageIcon={UserPlus}
        imageIconAlt="User"
        heading="Create an account"
        mainIfo="As part of your stipend request process, we are creating an account for you, 
        to help save your application process and information 
        so as to avoid your details being discarded"
        dontCrtAcc={true}
        quote={`"It does not matter how slowly you go, as long as you do not stop." - Confucius`}
        btnLable="Yes, Create My Account"
        goBackLink="/demo-create"
        handleClick={createAcct}
      />
    </div>
  );
};

export default CreateAccModal;
