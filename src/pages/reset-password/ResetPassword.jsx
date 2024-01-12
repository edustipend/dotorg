import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { postData } from '../../services/ApiClient';
import { constants } from './constants';

import { useNavigate } from 'react-router-dom';
import { TestId } from './constants';
import styles from './ResetPassword.module.css';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';

const { HEADER, PASSWORD, CONFIRM_PASSWORD, PASSWORD_MIN_LENGTH_ERR, PASSWORD_MISMATCH } = constants;
const { COMPONENT_TEST, HEADER_TEST, BUTTON_TEST, ERROR_TEST } = TestId;

export const ResetPassword = () => {
  const nav = useNavigate();
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordMisMatch, setPasswordMisMatch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.search) {
      const jwt = window.location.search.split('=');
      setToken(jwt[1]);
    }

    //validate the token
    if (token) {
      const decode = jwtDecode(token);
      if (!decode) {
        toast.error('Invalid token');
        setTimeout(() => {
          nav('/forgot-password');
        }, 1500);
      } else if (decode?.exp < Date.now() / 1000) {
        toast.error('expired token');
        setTimeout(() => {
          nav('/forgot-password');
        }, 3000);
      } else {
        setUserId(decode.id);
      }
    }
  }, [token, nav]);

  const onSubmit = async () => {
    const min_length = 8;
    if (password !== confirmPassword) {
      setPasswordMisMatch(true);
      return;
    } else if (password.length < min_length) {
      setPasswordErr(true);
      return;
    } else {
      setPasswordMisMatch(false);
      setPasswordErr(false);
    }
    setLoading(true);
    const response = await postData(`v1/update-password?resetToken=${token}`, {
      userId: userId,
      password
    });
    if (response.success) {
      setLoading(false);
      toast.success('Password changed successfully');
      setTimeout(() => {
        nav('/login');
      }, 1500);
    } else if (!response.success) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <section data-testid={COMPONENT_TEST} className={styles.reset}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Header dataTest={HEADER_TEST} className={styles.header}>
            {HEADER}
          </Header>
          <div className={styles.fields}>
            <div className={styles.field}>
              <div className={styles.single}>
                <Input type="password" value={password} label={PASSWORD} placeholder={PASSWORD} onChange={(e) => setPassword(e.target.value)} />
                {passwordErr ? (
                  <small data-testid={ERROR_TEST} className={styles.small}>
                    {PASSWORD_MIN_LENGTH_ERR}
                  </small>
                ) : undefined}
              </div>
              <div className={styles.single}>
                <Input
                  type="password"
                  value={confirmPassword}
                  label={CONFIRM_PASSWORD}
                  placeholder={CONFIRM_PASSWORD}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {passwordMisMatch ? (
                  <small data-testid={ERROR_TEST} className={styles.small}>
                    {PASSWORD_MISMATCH}
                  </small>
                ) : undefined}
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              dataTest={BUTTON_TEST}
              isLoading={loading}
              loaderSize="small"
              loaderVariant="neutral"
              type="secondary"
              size="large"
              label="Submit"
              onClick={onSubmit}
              className={styles.btn}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
