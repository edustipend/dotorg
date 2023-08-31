import React from 'react';
import styles from '../Submit/Submit.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ModalContext } from '../../../../../context/ModalContext';
import Button from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import Quote from '../../../../../components/Quote';
import { constants } from '../SubmitUI/constants';
import { UserPlus, Sad } from '../../../../../assets';
const { HEADER, PROMPT, NO, CREATE, QUOTE, DISMISS } = constants;

export const SubmitUI = ({ isLoading, handleSubmit }) => {
  const { setIsActive } = useContext(ModalContext);
  const { error, errorMessage } = useSelector(state => state.application)

  return (
    <section className={styles.submit}>
      {
        error ?
          <div className="animatedAlt">
            <div className={styles.headerContainer}>
              <img src={Sad} alt="user-plus" className={styles.emoji} />
              <Header className={styles.header}>{errorMessage}</Header>
            </div>
            <div className={`${styles.btnContainer} ${styles.btnContainerAltt}`}>
              <Button type={'secondary'} size={'large'} label={DISMISS} onClick={() => setIsActive((prev) => !prev)} className={styles.btn} />
            </div>
          </div> :
          <div className="animatedAlt">
            <div className={styles.headerContainer}>
              <img src={UserPlus} alt="user-plus" className={styles.emoji} />
              <Header className={styles.header}>{HEADER}</Header>
            </div>
            <div className={styles.bottomSection}>
              <p className={styles.prompt}>{PROMPT}</p>
              <div className={styles.btnContainer}>
                <Button
                  type={'secondary'}
                  effectAlt
                  label={CREATE}
                  isLoading={isLoading}
                  loaderSize={'small'}
                  loaderVariant={'neutral'}
                  onClick={handleSubmit}
                  className={styles.btn}
                />
                <Button disabled={isLoading} type={'plain'} effectAlt label={NO} onClick={() => setIsActive((prev) => !prev)} className={styles.btn} />
              </div>
            </div>
            <div className="quoteContainer">
              <Quote content={QUOTE} className={styles.Quote} />
            </div>
          </div>
      }
    </section>
  );
};

SubmitUI.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool
};

SubmitUI.defaultProps = {
  handleSubmit: () => { },
  isLoading: false
};
