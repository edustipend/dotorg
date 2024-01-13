import React, { useCallback, useEffect } from 'react';
import { useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate, useSearchParams } from 'react-router-dom';
>>>>>>> 5690207569507f949c7cc025f037030b8066414d
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
  const [searchParams] = useSearchParams();
  const emailToken = searchParams.get('jwt');

  const verifyEmail = useCallback(async () => {
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
        // nav('/welcome');
      } else {
        setErrorMessage(res.message);
        dispatch(emailVerification(false));
      }
      if (res.error) {
        setErrorMessage(res.error);
        dispatch(emailVerification(false));
      }
    } catch (error) {
      console.log(error.message, 'Error');
    } finally {
      setLoading(false);
    }
  }, [dispatch, emailToken, email]);

  useEffect(() => {
    setIsActive(true);
    verifyEmail();
  }, [setIsActive, verifyEmail]);

  const handleReturn = () => {
    setIsActive(false);
    nav(-1);
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
