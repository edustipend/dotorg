import React, { useEffect, useState } from 'react';
import bell from '../../../../assets/bell.svg';
import success from '../../../../assets/success.png';
import styles from './NotifyForm.module.css';
import { formConstants } from '../constants';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import { postData } from '../../../../services/ApiClient';
const { EMAIL, HEADING, FULLNAME, REASON, SUBTITLE, SUCCESS, WAITLIST_SUCCESS } = formConstants;

const REGEXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const REFERRAL_SOURCES = [
  'Laptop Giveway - Facebook',
  'Laptop Giveway - LinkedIn',
  'Laptop Giveway - Instagram',
  'Laptop Giveway - Twitter',
  'Google Search'
];

const SuccessDisplay = () => {
  return (
    <section className={styles.formArea}>
      <div className={styles.top}>
        <div className={styles.head}>
          <div className={styles.bellContainer}>
            <img className={styles.bell} src={success} alt="success indicator" />
          </div>
          <p className={styles.heading}>{SUCCESS}</p>
        </div>
        <p className={styles.subtitle}>{WAITLIST_SUCCESS}</p>
      </div>
    </section>
  );
};

export const NotifyForm = () => {
  const initialValue = {
    name: '',
    email: ''
  };
  const [userData, setUserData] = useState(initialValue);
  const [disabled, setDisabled] = useState(true);
  const [source, setSource] = useState('');
  const [notificationSuccess, setNotificationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [status, setStatus] = useState({
  //   loading: false,
  //   failure: false
  // })

  const { name, email } = userData;

  //validate email and check if the fullname is atleast > 2
  useEffect(() => {
    if (REGEXP_EMAIL.test(email) && name.length > 2 && REFERRAL_SOURCES.includes(source)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, name, source]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await postData('waitlist/join-waitlist', {
      name: userData.name,
      email: userData.email,
      howDidYouHearAboutUs: source
    });
    console.log('API response', res);

    if (res.success) {
      setNotificationSuccess(true);
    }
  };

  const handleSelect = (option) => {
    setSource(option.payload);
  };

  return (
    <section className={styles.formArea}>
      {notificationSuccess ? (
        <SuccessDisplay />
      ) : (
        <div>
          <div className={styles.top}>
            <div className={styles.head}>
              <div className={styles.bellContainer}>
                <img className={styles.bell} src={bell} alt="bell" />
              </div>
              <p className={styles.heading}>{HEADING}</p>
            </div>
            <p className={styles.subtitle}>{SUBTITLE}</p>
          </div>
          <form className={styles.form}>
            <div className={styles.formField}>
              <label htmlFor="fullname" className={styles.label}>
                {FULLNAME}
                <span className={styles.required}>*</span>
              </label>
              <input
                value={name}
                type="text"
                name="fullname"
                placeholder="Full Name"
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className={styles.Input}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email" className={styles.label}>
                {EMAIL} <span className={styles.required}>*</span>
              </label>
              <input
                value={email}
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className={styles.Input}
              />
            </div>
            <div className={styles.formField}>
              <Select label={REASON} dispatch={handleSelect} options={REFERRAL_SOURCES} />
            </div>
            <section className={styles.buttonContainer}>
              <Button disabled={disabled || loading} label="Notify me" effectAlt type="secondary" className={styles.button} onClick={handleSubmit} />
            </section>
          </form>
        </div>
      )}
    </section>
  );
};
