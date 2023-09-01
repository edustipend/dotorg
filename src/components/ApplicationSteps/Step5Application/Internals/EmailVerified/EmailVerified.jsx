import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import jwt_decode from "jwt-decode";
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
import { emailVerification } from '../../../../../store/reducers/ApplicationReducer';
import { storeUser } from '../../../../../store/reducers/UserReducer';
const { HEADER, ERR_HEADER, SUCCESS_BTN, ERR_BTN, ERR_TEXT, TRY_AGAIN } = constants;

export const EmailVerified = () => {
  const { setIsActive } = useContext(ModalContext);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isVerified } = useSelector((state) => state.application);
  const { email } = useSelector((state) => state.userDetails);

  useEffect(() => {
    const token = window.location.search.split("=")[1]
    console.log(token);
    setIsActive(true);
    const verifyEmail = async () => {
      const res = await postData('/verify', {
        email: email,
        verificationCode: token
      })

      if (res.success) {
        //decode the token response on success
        const decodedToken = jwt_decode(res.token);
        setLoading(false)
        dispatch(emailVerification(true))
        dispatch(storeUser(decodedToken))
        nav('/welcome')
      } else if (!res.success) {
        setLoading(false)
        dispatch(emailVerification(false))
      }
    }
    verifyEmail()
  }, [setIsActive, dispatch, nav, email]);

  const handleReturn = () => {
    setIsActive(false);
    nav(-1)
  };

  return (
    <Modal>
      {loading ? (
        <Loader size={'large'} />
      ) : (
        <ContentContainer>
          {isVerified ? (
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
