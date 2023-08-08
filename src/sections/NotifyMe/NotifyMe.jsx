import React, { useContext } from 'react';
import styles from './NotifyMe.module.css';
import closeIcon from '../../assets/close-alt.svg';
import NotifyForm from './internals/NotifyForm';
import { ModalContext } from '../../context/ModalContext';

export const NotifyMe = () => {
  const { handlePopModal } = useContext(ModalContext);
  return (
    <main className={styles.notify}>
      <div className={styles.closeContainer} onClick={handlePopModal}>
        <img src={closeIcon} alt="closeModal" className={styles.closeModal} />
      </div>
      <NotifyForm />
    </main>
  );
};
