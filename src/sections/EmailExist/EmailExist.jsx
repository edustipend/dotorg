import React, { useContext } from 'react';
import { EmailExistForm } from './internals/EmailExistForm/EmailExistForm';
import closeIcon from '../../assets/close-alt.svg';
import styles from './EmailExist.module.css';
import { ModalContext } from '../../context/ModalContext';
import { CLOSEMODAL_ALT_TEXT, TestId } from './constants';

export const EmailExist = () => {
  const { setIsActive } = useContext(ModalContext);

  const handleNavigate = () => {
    setIsActive(false);
  };

  return (
    <main className={styles.emailexist} data-testid={TestId.EMAIL_TEST_ID}>
      <div className={styles.closeContainer} data-testid={TestId.CLOSEMODAL_TEST_ID} onClick={() => setIsActive((prev) => !prev)}>
        <img src={closeIcon} alt={CLOSEMODAL_ALT_TEXT} className={styles.closeModal} />
      </div>
      <EmailExistForm handleNavigate={handleNavigate} />
    </main>
  );
};
