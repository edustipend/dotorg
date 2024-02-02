import React, { useContext } from 'react';
import style from './NewApplication.module.css';
import PropTypes from 'prop-types';
import { success, tears } from '../../../../../assets';
import Button from '../../../../Button';
import { ModalContext } from '../../../../../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export const NewApplication = ({ message, prompt, isSuccess }) => {
  const navigate = useNavigate();
  const { handleNewApplicationModal } = useContext(ModalContext);

  const handleAction = () => {
    if (isSuccess) {
      navigate('/dashboard');
    } else handleNewApplicationModal();
  };

  return (
    <main className={style.main}>
      <img src={isSuccess ? success : tears} alt="" className={style.img} />
      <div className={style.messageContainer}>
        <p className={style.message}>{message}</p>
        <p className={style.prompt}>{prompt}</p>
      </div>
      <div className={style.btnContainer}>
        <Button type="secondary" onClick={handleAction} label={isSuccess ? 'Continue to Dashboard' : 'Close'} className={style.btn} />
      </div>
    </main>
  );
};

NewApplication.propTypes = {
  message: PropTypes.string,
  isSuccess: PropTypes.bool,
  prompt: PropTypes.string
};

NewApplication.defaultProps = {
  message: '',
  isSuccess: false,
  prompt: ''
};
