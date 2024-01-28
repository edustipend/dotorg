import React from 'react';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ModalContext } from '../../../../../context/ModalContext';
import styles from '../Submit/Submit.module.css';
import Header from '../../../../../components/Header';
import Quote from '../../../../../components/Quote';
import { constants } from './constants';
import { PaperPlane, BackArrow } from '../../../../../assets';
import PropTypes from 'prop-types';
const { HEADER, PARA1, PARA2, QUOTE } = constants;

export const VerifyEmail = ({ message }) => {
  const { handleVerifyCurrentUser } = useContext(ModalContext);
  const { newApplication } = useSelector((state) => state.application);
  const { email } = useSelector((state) => state.userDetails);
  const { email: currentUser } = useSelector((state) => state.user);

  return (
    <div className={styles.submit}>
      <img src={BackArrow} alt="backArrow" onClick={() => handleVerifyCurrentUser()} className={styles.arrow} />
      <div className={`${styles.alt} animated`}>
        <div className={styles.headerContainer}>
          <img src={PaperPlane} alt="user-plus" className={styles.emoji} />
          <Header className={styles.header}>{message ? message : HEADER}</Header>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.prompt}>{PARA1}</p>
          <p className={styles.userEmail}>{newApplication ? currentUser : email}</p>
          <p className={styles.prompt}>{PARA2}</p>
        </div>
        <div className="quoteContainer">
          <Quote content={QUOTE} className={styles.Quote} />
        </div>
      </div>
    </div>
  );
};

VerifyEmail.propTypes = {
  message: PropTypes.string
};

VerifyEmail.defaultProps = {
  message: ''
};
