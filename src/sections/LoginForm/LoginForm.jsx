import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './LoginForm.module.css';
import { HEAD_TEXT, LAST_TEXT, SUB_TEXT, TestId, parameters } from './constants';
import { Hand } from '../../assets';
import { postData } from '../../services/ApiClient';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { storeUser } from '../../store/reducers/UserReducer';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
const { EMAIL, EMAIL_PH, EMAIL_TYPE, PASSWORD, PASSWORD_PH, PASSWORD_TYPE, LOGIN, SECONDARY, NEUTRAL, SMALL, RESET } = parameters;

export const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const nav = useNavigate();

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

      if (!res.success) {
        toast.error('Invalid credentials');
      }
      if (res.success) {
        const token = res?.token.split(' ')[1];
        const decode = jwtDecode(token);
        console.log(decode, 'USER');
        Cookies.set('eduTk', token, {
          secure: true,
          sameSite: 'strict',
          expires: 14
        });
        toast.success('Logged in successfully');
        dispatch(storeUser(decode));
        setTimeout(() => {
          nav(0);
        }, 1000);
      }
    } catch (error) {
      toast.error('Something went wrong');
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
      <Button
        dataTest={TestId.BTN_TEST_ID}
        disabled={disable}
        isLoading={isLoading}
        label={LOGIN}
        loaderSize={SMALL}
        loaderVariant={NEUTRAL}
        onClick={handleSubmit}
        className={styles.btn}
        type={SECONDARY}
      />
      <Link to={RESET}>
        <Text className={styles.lastText} content={LAST_TEXT} />
      </Link>
    </div>
  );
};
