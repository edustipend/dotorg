import React, { useState } from 'react';
import styles from './Step4Application.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ContentContainer from '../ContentContainer';
import Header from '../../Header';
import Input from '../../Input';
import Select from '../../../components/Select';
import Button from '../../Button';
import Quote from '../../Quote';
import { checkEmail } from '../../../utils/EmailChecker/emailChecker';
import { BackArrow, RightArrow } from '../../../assets';
import { constants } from './Internals/constants';
import { Hug } from '../../../assets';
import { ScrollOnMount } from '../ScrollOnMount/ScrollOnMount';
import { back, progress } from '../../../store/reducers/ApplicationReducer';
import {
  fullname,
  Email,
  Password,
  Gender,
  stateoforigin,
  twitterhandle,
  howdidyouhear,
  dateofbirth,
} from '../../../store/reducers/UserDetailsReducer';

const {
  HEADER,
  SUBHEADER,
  FULLNAME,
  FULLNAME_PH,
  EMAIL,
  EMAIL_PH,
  GENDER,
  GENDER_PH,
  STATE,
  STATE_PH,
  TWITTER,
  TWITTER_PH,
  AD,
  AD_PH,
  QUOTE,
  DOB_TEXT,
  GENDER_TEXT,
  TWITTER_TEXT,
  GENDER_OPTION,
  STATE_OPTION,
  REFERRAL_SOURCES,
  PASSWORD,
  PASSWORD_PH,
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_PH,
  PASSWORD_MIN_LENGTH_ERR,
  PASSWORD_MISMATCH_ERR,
  DOB
} = constants;

const passwordState = {
  passwordErr: '',
  confirmPassword: '',
  confirmPasswordErr: ''
};
export const Step4Application = () => {
  //scroll on mount
  ScrollOnMount();
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(passwordState);
  const { passwordErr, confirmPassword, confirmPasswordErr } = isPassword;

  const { fullName, email, password, dateOfBirth, gender, stateOfOrigin, twitterHandle, howDidYouHear } = useSelector(
    (state) => state.userDetails
  );

  const userDetails = {
    fullName,
    email,
    gender,
    stateOfOrigin,
    twitterHandle,
    howDidYouHear
  };

  const minLengths = {
    fullName: 2,
    email: 5,
    monthOfBirth: 3,
    dayOfBirth: 1,
    yearOfBirth: 4,
    gender: 4,
    stateOfOrigin: 3,
    twitterHandle: 2,
    howDidYouHear: 3
  };
  /**
   * Carry out this check to ensure that the
   * minimum requirements are met before the button is enabled
   * both objects, userDetails and minLengths keys are used to get the values.
   * The values of userDetails object are then used to match the minimum lengths held
   * as values of the minLengths object.
   * If the value of the userDetails object is 'Email', use the checkEmail function to check it.
   *
   * @returns  either true or false
   */
  const minmumRequired = Object.keys(userDetails).every((item) => {
    if (item === 'email') {
      return checkEmail(userDetails[item]) && userDetails[item].length >= minLengths[item];
    }
    return userDetails[item].length >= minLengths[item];
  });

  const PASSWORD_MIN_LENGTH = 8;
  const handleDispatch = () => {
    if (password !== confirmPassword) {
      setIsPassword({ ...isPassword, confirmPasswordErr: PASSWORD_MISMATCH_ERR });
      return;
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      setIsPassword({ ...isPassword, passwordErr: PASSWORD_MIN_LENGTH_ERR });
      return;
    }
    dispatch(progress());
  };

  return (
    <>
      <ContentContainer>
        <section className={styles.userDetails}>
          <div className={styles.topSection}>
            <div className={styles.headerContainer}>
              <Header className={styles.header}>{HEADER}</Header>
              <img src={Hug} alt="hug_emoji" className={styles.hug} />
            </div>
            <p className={styles.subHeader}>{SUBHEADER}</p>
          </div>
          <form className={styles.form}>
            <div className={styles.formArea}>
              <Input
                value={fullName}
                label={FULLNAME}
                placeholder={FULLNAME_PH}
                onChange={(e) => dispatch(fullname(e.target.value))}
                className={styles.entry}
              />
              <Input value={email} label={EMAIL} placeholder={EMAIL_PH} onChange={(e) => dispatch(Email(e.target.value))} className={styles.entry} />
            </div>

            <div className={styles.formArea}>
              <div>
                <div>
                  <Input label={DOB} value={dateOfBirth} type="date" className={` ${styles.input}`} onChange={(e) => dispatch(dateofbirth(e.target.value))} />
                </div>
                <small className={styles.small}>{DOB_TEXT}</small>
              </div>
              <div>
                <Select
                  value={gender}
                  label={GENDER}
                  placeholder={GENDER_PH}
                  options={GENDER_OPTION}
                  dispatchType={Gender}
                  className={styles.entry}
                />
                <small className={styles.small}>{GENDER_TEXT}</small>
              </div>
            </div>

            <div className={styles.formArea}>
              <Select
                value={stateOfOrigin}
                label={STATE}
                placeholder={STATE_PH}
                options={STATE_OPTION}
                dispatchType={stateoforigin}
                className={styles.entry}
              />
              <div>
                <Input
                  value={twitterHandle}
                  label={TWITTER}
                  placeholder={TWITTER_PH}
                  onChange={(e) => dispatch(twitterhandle(e.target.value))}
                  className={styles.entry}
                />
                <small className={styles.small}>{TWITTER_TEXT}</small>
              </div>
            </div>
            <div className={styles.formArea}>
              <div>
                <Input
                  value={password}
                  label={PASSWORD}
                  type={'password'}
                  placeholder={PASSWORD_PH}
                  onChange={(e) => dispatch(Password(e.target.value))}
                  className={styles.entry}
                />
                <small className={`${styles.small} ${styles.err}`}>{passwordErr}</small>
              </div>
              <div>
                <Input
                  value={confirmPassword}
                  label={CONFIRM_PASSWORD}
                  type={'password'}
                  placeholder={CONFIRM_PASSWORD_PH}
                  onChange={(e) => setIsPassword({ ...isPassword, confirmPassword: e.target.value })}
                  className={styles.entry}
                />
                <small className={`${styles.small} ${styles.err}`}>{confirmPasswordErr}</small>
              </div>
            </div>
            <Select value={howDidYouHear} label={AD} placeholder={AD_PH} options={REFERRAL_SOURCES} dispatchType={howdidyouhear} />

          </form>
        </section>
        <section className={styles.btnContainer}>
          <Button
            icon={BackArrow}
            iconPosition={'back'}
            type={'plain'}
            label={'Back'}
            effectAlt
            onClick={() => dispatch(back())}
            className={styles.btn}
          />
          <Button
            icon={RightArrow}
            type={'secondary'}
            label={'Continue'}
            disabled={!minmumRequired}
            effectAlt
            onClick={handleDispatch}
            className={styles.btn}
          />
        </section>
      </ContentContainer >
      <section className="quoteContainer">
        <Quote content={QUOTE} className="quote" />
      </section>
    </>
  );
};
