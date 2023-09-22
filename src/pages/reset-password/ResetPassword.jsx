import React, { useEffect, useState, useContext } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { postData } from '../../services/ApiClient';
import { Valid } from '../../assets';
import { ModalContext } from '../../context/ModalContext';
import { constants } from './constants';
import { routesConstant } from '../../routesConstant';
import { useNavigate } from 'react-router-dom';
import { TestId } from './constants';
import styles from './ResetPassword.module.css';

const { HEADER, EMAIL, PASSWORD, CODE, CONFIRM_PASSWORD, PASSWORD_MIN_LENGTH_ERR, PASSWORD_MISMATCH } = constants;
const { COMPONENT_TEST, HEADER_TEST, BUTTON_TEST, MODAL_TEST, ERROR_TEST } = TestId

export const ResetPassword = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const { setIsActive } = useContext(ModalContext);
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordMisMatch, setPasswordMisMatch] = useState(false);
  const [error, setError] = useState('');
  const [feedBack, setFeeBack] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.search) {
      const [email, code] = window.location.search.split('&');
      const Email = email.split('=')[1];
      const Code = code.split('=')[1];
      setEmail(Email);
      setVerificationCode(Code);
    }
  }, []);

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
    const response = await postData('update-password', {
      email,
      verificationCode,
      password,
      confirmPassword
    });
    if (response.success) {
      setLoading(false);
      setIsActive((prev) => !prev);
      setFeeBack(response.message);
    } else if (!response.success) {
      setLoading(false);
      setError(response.message);
    }
  };

  return (
    <section data-testid={COMPONENT_TEST} className={styles.reset}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Header dataTest={HEADER_TEST} className={styles.header}>{HEADER}</Header>
          <div className={styles.fields}>
            <div className={styles.field}>
              <Input value={email} label={EMAIL} placeholder={EMAIL} readOnly />
              <Input value={verificationCode} label={CODE} placeholder={CODE} readOnly />
            </div>
            <div className={styles.field}>
              <div className={styles.single}>
                <Input type='password' value={password} label={PASSWORD} placeholder={PASSWORD} onChange={(e) => setPassword(e.target.value)} />
                {passwordErr ? <small data-testid={ERROR_TEST} className={styles.small}>{PASSWORD_MIN_LENGTH_ERR}</small> : undefined}
              </div>
              <div className={styles.single}>
                <Input
                  type='password'
                  value={confirmPassword}
                  label={CONFIRM_PASSWORD}
                  placeholder={CONFIRM_PASSWORD}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {passwordMisMatch ? <small data-testid={ERROR_TEST} className={styles.small}>{PASSWORD_MISMATCH}</small> : undefined}
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              dataTest={BUTTON_TEST}
              isLoading={loading}
              loaderSize='small'
              loaderVariant='neutral'
              type='secondary'
              size='large'
              label='Submit'
              onClick={onSubmit}
              className={styles.btn}
            />
          </div>
          {error ? <p data-testid={ERROR_TEST} className={styles.error}>{error}</p> : undefined}
        </div>
      </div>

      <Modal dataTest={MODAL_TEST}>
        <section className={styles.main}>
          <div className={styles.contentContainer}>
            <div className={styles.Modal}>
              <img src={Valid} alt="valid email" className={styles.img} />
              <p className={styles.feedBack}>{feedBack}</p>
              <Button
                effectAlt
                label='Login'
                type='secondary'
                onClick={() => {
                  nav(routesConstant.Login);
                  setIsActive((prev) => !prev);
                }}
              />
            </div>
          </div>
        </section>
      </Modal>
    </section>
  );
};
