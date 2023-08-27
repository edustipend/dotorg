import React, { useState } from 'react';
import styles from './Step4Application.module.css'
import { useDispatch, useSelector } from 'react-redux';
import ContentContainer from '../Internals/ContentContainer';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Quote from '../../../components/Quote';
import { checkEmail } from '../../../utils/EmailChecker/emailChecker';
import { BackArrow, RightArrow } from '../../../assets';
import { constants } from './Internals/constants';
import { Hug } from '../../../assets';
import { ScrollOnMount } from '../Internals/ScrollOnMount/ScrollOnMount';
import { back, progress } from '../../../redux/ApplicationReducer'
import {
  fullName, email, monthOfBirth,
  dayOfBirth, yearOfBirth, gender,
  stateOfOrigin, twitterHandle, howDidYouHear
} from '../../../redux/UserDetailsReducer';

const {
  HEADER, SUBHEADER, FULLNAME, FULLNAME_PH, EMAIL, EMAIL_PH,
  MTH_PH, DAY_PH, YR_PH, GENDER, GENDER_PH, STATE, STATE_PH, DOB,
  TWITTER, TWITTER_PH, AD, AD_PH, QUOTE, DOB_TEXT, GENDER_TEXT,
  TWITTER_TEXT, MONTHS_OPTION, GENDER_OPTION, STATE_OPTION, REFERRAL_SOURCES,
  PASSWORD, PASSWORD_PH, CONFIRM_PASSWORD, CONFIRM_PASSWORD_PH
} = constants

const passwordState = {
  password: '',
  passwordErr: '',
  confirmPassword: '',
  confirmPasswordErr: '',
}
export const Step4Application = () => {
  //scroll on mount
  ScrollOnMount()
  const dispatch = useDispatch()
  const [isPassword, setIsPassword] = useState(passwordState)
  const { password, passwordErr, confirmPassword, confirmPasswordErr } = isPassword

  const {
    FullName,
    Email,
    MonthOfBirth,
    DayOfBirth,
    YearOfBirth,
    Gender,
    StateOfOrigin,
    TwitterHandle,
    HowDidYouHear
  } = useSelector(state => state.userDetails)

  const userDetails = {
    FullName,
    Email,
    MonthOfBirth,
    DayOfBirth,
    YearOfBirth,
    Gender,
    StateOfOrigin,
    TwitterHandle,
    HowDidYouHear
  }

  const minLengths = {
    FullName: 2,
    Email: 5,
    MonthOfBirth: 3,
    DayOfBirth: 1,
    YearOfBirth: 4,
    Gender: 4,
    StateOfOrigin: 3,
    TwitterHandle: 2,
    HowDidYouHear: 3
  }
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
  const minmumRequired = Object.keys(userDetails).every(item => {
    if (item === 'Email') {
      return checkEmail(userDetails[item]) && userDetails[item].length >= minLengths[item];
    }
    return userDetails[item].length >= minLengths[item];
  });

  const handleDispatch = () => {
    if (password !== confirmPassword) {
      setIsPassword({ ...isPassword, confirmPasswordErr: 'password mismatch' });
      return;
    } else if (password.length < 8) {
      setIsPassword({ ...isPassword, passwordErr: 'A minimum of 8 char is required' });
      return
    }
    dispatch(progress())
  }


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
                value={FullName}
                label={FULLNAME}
                placeholder={FULLNAME_PH}
                onChange={e => dispatch(fullName(e.target.value))}
                className={styles.entry}
              />
              <Input
                value={Email}
                label={EMAIL}
                placeholder={EMAIL_PH}
                onChange={e => dispatch(email(e.target.value))}
                className={styles.entry}
              />
            </div>

            <div className={styles.formArea}>
              <div>
                <label className={styles.label}>
                  {DOB} <span className={styles.required}>*</span>
                </label>
                <div className={styles.dob}>
                  <Select
                    value={MonthOfBirth}
                    includeLabel={false}
                    options={MONTHS_OPTION}
                    placeholder={MTH_PH}
                    dispatchType={monthOfBirth}
                    className={styles.entry}
                  />
                  <Input
                    value={DayOfBirth}
                    includeLabel={false}
                    placeholder={DAY_PH}
                    type={'number'}
                    onChange={e => dispatch(dayOfBirth(e.target.value))}
                    className={styles.entry}
                  />
                  <Input
                    value={YearOfBirth}
                    includeLabel={false}
                    placeholder={YR_PH}
                    type={'number'}
                    onChange={e => dispatch(yearOfBirth(e.target.value))}
                    className={styles.entry}
                  />
                </div>
                <small className={styles.small}>{DOB_TEXT}</small>
              </div>
              <div>
                <Select
                  value={Gender}
                  label={GENDER}
                  placeholder={GENDER_PH}
                  options={GENDER_OPTION}
                  dispatchType={gender}
                  className={styles.entry}
                />
                <small className={styles.small}>{GENDER_TEXT}</small>
              </div>
            </div>

            <div className={styles.formArea}>
              <Select
                value={StateOfOrigin}
                label={STATE}
                placeholder={STATE_PH}
                options={STATE_OPTION}
                dispatchType={stateOfOrigin}
                className={styles.entry}
              />
              <div>
                <Input
                  value={TwitterHandle}
                  label={TWITTER}
                  placeholder={TWITTER_PH}
                  onChange={e => dispatch(twitterHandle(e.target.value))}
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
                  onChange={e => setIsPassword({ ...isPassword, password: e.target.value })}
                  className={styles.entry}
                />
                <small className={styles.small}>{passwordErr}</small>
              </div>
              <div>
                <Input
                  value={confirmPassword}
                  label={CONFIRM_PASSWORD}
                  type={'password'}
                  placeholder={CONFIRM_PASSWORD_PH}
                  onChange={e => setIsPassword({ ...isPassword, confirmPassword: e.target.value })}
                  className={styles.entry}
                />
                <small className={styles.small}>{confirmPasswordErr}</small>
              </div>
            </div>
            <Select
              value={HowDidYouHear}
              label={AD}
              placeholder={AD_PH}
              options={REFERRAL_SOURCES}
              dispatchType={howDidYouHear}
            />
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
      </ContentContainer>
      <section className='quoteContainer'>
        <Quote content={QUOTE} className='quote' />
      </section>
    </>
  );
};