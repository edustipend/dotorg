import React, { useContext } from 'react';
import style from './NewApplication.module.css';
import PropTypes from 'prop-types';
import { success, tears } from '../../../../../assets';
import Button from '../../../../Button';
import { ModalContext } from '../../../../../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export const NewApplication = ({ message, isSuccess }) => {
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
      <p className={style.message}>{message}</p>
      <div className={style.btnContainer}>
        <Button type="secondary" onClick={handleAction} label={isSuccess ? 'Continue to Dashboard' : 'Close'} className={style.btn} />
      </div>
    </main>
  );
};

NewApplication.propTypes = {
  message: PropTypes.string,
  isSuccess: PropTypes.bool
};

NewApplication.defaultProps = {
  message: '',
  isSuccess: false
};
