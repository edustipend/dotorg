import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailExistForm.module.css';
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router';
import { Text } from '../../constants';
import Header from '../../../../components/Header';

export const EmailExistForm = ({ handleNavigate }) => {
  const nav = useNavigate();

  const handleSubmit = () => {
    nav('/login');
    handleNavigate();
  };

  return (
    <div className={styles.content}>
      <div className={styles.emailexist}>
        <Header className={styles.emailexisttext}>{Text.EMAIL_EXIST_TEXT}</Header>
        <p className={styles.logintext}>{Text.LOGIN_TEXT}</p>
      </div>
      <Button label={Text.BUTTON_LABEL} effectAlt type="secondary" className={styles.button} onClick={handleSubmit} />
    </div>
  );
};

EmailExistForm.propTypes = {
  handleNavigate: PropTypes.func
};
