import React from 'react';
import styles from '../Submit/Submit.module.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ModalContext } from '../../../../../context/ModalContext';
import Button from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import Quote from '../../../../../components/Quote';
import { constants } from '../SubmitUI/constants';
import { UserPlus } from '../../../../../assets';
const { HEADER, PROMPT, NO, CREATE, QUOTE } = constants;

export const SubmitUI = ({ isLoading, handleSubmit }) => {
  const { setIsActive } = useContext(ModalContext);
  return (
    <section className={styles.submit}>
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
              loaderVariant={'nuetral'}
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
    </section>
  );
};

SubmitUI.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool
};

SubmitUI.defaultProps = {
  handleSubmit: () => {},
  isLoading: false
};
