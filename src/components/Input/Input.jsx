import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';
import { TestId } from './constants';
const { LABEL_ID, INPUT_ID } = TestId;

export const Input = ({ dispatch, placeholder, label, value, dispatchType, type, size, className }) => {
  const [initialValue, setInitialValue] = useState(value);

  const handleOnchange = (e) => {
    setInitialValue(e.target.value);
    dispatch({ type: dispatchType, payload: e.target.value });
  };

  return (
    <section className={styles.main}>
      <label data-testid={LABEL_ID} htmlFor="input" className={styles.label}>
        {label} <span className={styles.required}>*</span>
      </label>
      <input
        data-testid={INPUT_ID}
        type={type}
        name="input"
        placeholder={placeholder}
        value={initialValue}
        onChange={(e) => handleOnchange(e)}
        className={`${styles.input} ${styles[size]} ${className}`}
      />
    </section>
  );
};

Input.propTypes = {
  dispatch: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  dispatchType: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  dispatch: () => { },
  placeholder: 'Placeholder...',
  label: 'Some label',
  value: '',
  dispatchType: '',
  type: 'text',
  size: '',
  className: ''
};
