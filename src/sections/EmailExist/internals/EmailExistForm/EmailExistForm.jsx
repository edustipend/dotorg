import React, { useContext } from 'react';
import styles from './EmailExistForm.module.css';
import Button from '../../../../components/Button';
import { ModalContext } from '../../../../context/ModalContext';
import { useNavigate } from 'react-router';

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
        <p className={styles.emailexisttext}>Your Email Exist!</p>
        <p className={styles.logintext}>Kindly, Log In</p>
      </div>
      <Button disabled={isLoading} label="Log In" effectAlt type="secondary" className={styles.button} onClick={handleSubmit} />
    </div>
  );
};
