import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './LoginForm.module.css';
import { HEAD_TEXT, LAST_TEXT, SUB_TEXT, TestId, parameters } from './constants';
import { Hand } from '../../assets';
import { postData } from '../../services/ApiClient';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { storeUser } from '../../store/reducers/UserReducer';
import { Link } from 'react-router-dom';
const { EMAIL, EMAIL_PH, EMAIL_TYPE, PASSWORD, PASSWORD_PH, PASSWORD_TYPE, LOGIN, SECONDARY, NEUTRAL, SMALL, RESET } = parameters;

export const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (email.includes('@') && password.length > 5) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    try {
      const res = await postData('login', {
        username: email,
        password: password
      });
      console.log(res, 'Res');
      if (!res.success) {
        setSuccess('');
        setError(res.message);
      }
      if (res.success) {
        console.log(res.token.split(' ')[1]);
        setError('');
        const decodedToken = jwt_decode(res.token.split(' ')[1]);
        console.log(decodedToken);
        localStorage.setItem('userToken', res.token.split(' ')[1]);
        setSuccess(res.message);
        dispatch(storeUser(decodedToken));
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error.message, 'ERROR MSG');
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className={styles.container} data-testid={TestId.LOGIN_FORM_TEST_ID}>
      <img src={Hand} alt="hand" className={styles.img} />
      <Header className={styles.headText}>{HEAD_TEXT}</Header>
      <Text className={styles.subText} content={SUB_TEXT} />
      <form className={styles.form}>
        <Input label={EMAIL} placeholder={EMAIL_PH} type={EMAIL_TYPE} onChange={(e) => setEmail(e.target.value)} value={email} />
        <Input label={PASSWORD} placeholder={PASSWORD_PH} type={PASSWORD_TYPE} onChange={(e) => setPassword(e.target.value)} value={password} />
      </form>
      <Text className={error ? styles.error : styles.success} content={error ? error : success} />
      <Button
        dataTest={TestId.BTN_TEST_ID}
        disabled={disable}
        isLoading={isLoading}
        label={LOGIN}
        loaderSize={SMALL}
        loaderVariant={NEUTRAL}
        onClick={handleSubmit}
        type={SECONDARY}
      />
      <Link to={RESET}>
        <Text className={styles.lastText} content={LAST_TEXT} />
      </Link>
    </div>
  );
};
