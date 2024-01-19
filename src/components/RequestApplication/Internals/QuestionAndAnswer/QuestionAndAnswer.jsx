import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionAndAnswer.module.css';
import { useDispatch } from 'react-redux';
import { TestId } from '../../constants';
export const QuestionAndAnswer = ({ number, question, dispatchType, className, value, ...props }) => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(dispatchType(e.target.value));
  };

  return (
    <div data-testid={TestId.COMPONENT_ID} className={styles.main}>
      <label htmlFor="question" className={styles.label}>
        {number}.
        <p className={styles.question} data-testid={TestId.QUESTION_ID}>
          {question}
          <span className={styles.required}>*</span>
        </p>
      </label>
      <textarea
        data-testid={TestId.ANSWER_ID}
        value={value}
        name="question"
        id="question"
        cols="30"
        rows="10"
        {...props}
        onChange={(e) => handleOnChange(e)}
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
