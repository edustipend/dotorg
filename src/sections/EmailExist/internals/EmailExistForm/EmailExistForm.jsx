import React, { useContext } from 'react';
import styles from './EmailExistForm.module.css';
import Button from '../../../../components/Button';
import { ModalContext } from '../../../../context/ModalContext';
import { useNavigate } from 'react-router';
import { TestId } from '../../constants';

export const EmailExistForm = () => {
  const nav = useNavigate();

  const { isLoading, setIsLoading } = useContext(ModalContext);

  const handleSubmit = () => {
    setIsLoading(true);
    nav('/login');
    setIsLoading(false);
  };

  return (
    <div className={styles.content}>
      <div className={styles.emailexist}>
        <p className={styles.emailexisttext}>{TestId.EMAIL_EXIST_TEXT}</p>
        <p className={styles.logintext}>{TestId.LOGIN_TEXT}</p>
      </div>
      <Button disabled={isLoading} label="Log In" effectAlt type="secondary" className={styles.button} onClick={handleSubmit} />
    </div>
  );
};
