import React, { useContext } from 'react';
import { EmailExistForm } from './internals/EmailExistForm/EmailExistForm';
import closeIcon from '../../assets/close-alt.svg';
import styles from './EmailExist.module.css';
import { ModalContext } from '../../context/ModalContext';

export const EmailExist = () => {
  const { setIsActive } = useContext(ModalContext);

  return (
    <main className={styles.emailexist} data-testid="email-exist">
      <div className={styles.closeContainer} data-testid="closeModal" onClick={() => setIsActive((prev) => !prev)}>
        <img src={closeIcon} alt="closeModal" className={styles.closeModal} />
      </div>
      <EmailExistForm />
    </main>
  );
};
