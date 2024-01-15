import React, { useCallback, useEffect } from 'react';
import { useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
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
import { storeUser, setAuthenticated } from '../../../../../store/reducers/UserReducer';
import Cookies from 'js-cookie';
const { HEADER, ERR_HEADER, SUCCESS_BTN, ERR_BTN } = constants;

export const EmailVerified = () => {
  const { setIsActive } = useContext(ModalContext);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isVerified } = useSelector((state) => state.application);
  const { email } = useSelector((state) => state.userDetails);
  const { isAuthenticated } = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const emailToken = searchParams.get('jwt');

  const verifyEmail = useCallback(async () => {
    dispatch(emailVerification(false));
    try {
      const res = await postData(`user/verify?jwt=${emailToken}`, {
        username: email
      });
      if (res.success) {
        //decode the token response on success
        const token = res?.token.split(' ')[1];
        const decode = jwtDecode(token);
        Cookies.set('eduTk', token, {
          secure: true,
          sameSite: 'strict',
          expires: 14
        });
        dispatch(emailVerification(true));
        dispatch(storeUser(decode));
        dispatch(setAuthenticated(true));
        setTimeout(() => {
          nav(0);
        }, 2000);
      } else {
        setErrorMessage(res?.message);
        dispatch(emailVerification(false));
      }
      if (res.error) {
        setErrorMessage(res?.message || res?.error);
        dispatch(emailVerification(false));
      }
    } catch (error) {
      console.log(error.message, 'Error');
    } finally {
      setLoading(false);
    }
  }, [dispatch, emailToken, email, nav]);

  useEffect(() => {
    setIsActive(true);
    verifyEmail();
  }, [setIsActive, verifyEmail]);

  const handleReturn = () => {
    setIsActive(false);
    nav('/');
  };

  if (isAuthenticated) {
    return <Navigate to="/welcome" />;
  }

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
                <p className={styles.prompt}>{errorMessage}</p>
              </div>
              <div className={`${styles.btnContainer} ${styles.btnContainerAltt}`}>
                <Button type={'plain'} size={'large'} label={ERR_BTN} onClick={handleReturn} className={styles.btn} />
              </div>
            </div>
          )}
        </ContentContainer>
      )}
    </Modal>
  );
};
