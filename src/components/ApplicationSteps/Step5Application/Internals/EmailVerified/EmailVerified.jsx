import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../../../../context/ModalContext';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Submit/Submit.module.css';
import Modal from '../../../../Modal';
import Button from '../../../../Button';
import Header from '../../../../Header';
import Loader from '../../../../Loader';
import { Valid, Sad } from '../../../../../assets';
import { constants } from './constants';
import ContentContainer from '../../../ContentContainer';
import { postData } from '../../../../../services/ApiClient';
//import { emailVerification } from '../../../../../store/reducers/ApplicationReducer';
const { HEADER, ERR_HEADER, SUCCESS_BTN, ERR_BTN, ERR_TEXT, TRY_AGAIN } = constants;

export const EmailVerified = () => {
  const { setIsActive } = useContext(ModalContext);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isVerified } = useSelector((state) => state.application);

  useEffect(() => {
    const token = window.location.search.split("=")[1]
    setIsActive(true);
    const res = postData('/verify', token)
    console.log(res);
  }, [setIsActive, dispatch]);

  const handleReturn = () => {
    setIsActive(false);
    nav(-1)
  };
  return (
    <Modal>
      {!isVerified ? (
        <Loader size={'large'} />
      ) : (
        <ContentContainer>
          {!isVerified ? (
            <div className={`${styles.submit} ${styles.submitAlt} animated`}>
              <div className={styles.headerContainer}>
                <img src={Valid} alt="valid" className={styles.emojiAlt} />
                <Header className={`${styles.header} ${styles.header2}`}>{HEADER}</Header>
              </div>
              <div className={`${styles.btnContainer} ${styles.btnContainerAltt}`}>
                <Button type={'secondary'} size={'large'} label={SUCCESS_BTN} onClick={() => nav('/welcome')} className={styles.btn} />
              </div>
            </div>
          ) : (
            <div className={`${styles.submit} animatedAlt`}>
              <div className={styles.headerContainer}>
                <img src={Sad} alt="error" className={styles.emojiAlt} />
                <Header className={`${styles.header} ${styles.header2}`}>{ERR_HEADER}</Header>
                <p className={styles.prompt}>{ERR_TEXT}</p>
              </div>
              <div className={`${styles.btnContainer} ${styles.btnContainerAltt}`}>
                <Button type={'secondary'} size={'large'} label={TRY_AGAIN} onClick={() => nav(0)} className={styles.btn} />
                <Button type={'plain'} size={'large'} label={ERR_BTN} onClick={handleReturn} className={styles.btn} />
              </div>
            </div>
          )}
        </ContentContainer>
      )}
    </Modal>
  );
};
