import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionAndAnswer.module.css';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { isApplicationWindowClosed } from '../../../../utils';

export const QuestionAndAnswer = ({ number, question, dispatchType, className, value, ...props }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');
  const isWindowClosed = isApplicationWindowClosed();

  const disableTextbox = isWindowClosed && isDashboard;

  const handleOnchange = (e) => {
    dispatch(dispatchType(e.target.value));
  };

  return (
    <div className={styles.main}>
      <label htmlFor="question" className={styles.label}>
        {number}.
        <p className={styles.question}>
          {question}
          <span className={styles.required}>*</span>
        </p>
      </label>
      <textarea
        value={value}
        name="question"
        id="question"
        cols="30"
        rows="10"
        disabled={disableTextbox}
        {...props}
        onChange={(e) => handleOnchange(e)}
        className={`${styles.textarea} ${className}`}
      />
    </div>
  );
};

QuestionAndAnswer.propTypes = {
  className: PropTypes.string,
  dispatchType: PropTypes.func,
  number: PropTypes.number,
  question: PropTypes.string,
  value: PropTypes.string
};

QuestionAndAnswer.defaultProps = {
  className: '',
  dispatchType: () => {},
  number: 1,
  question: 'Default question',
  value: ''
};
