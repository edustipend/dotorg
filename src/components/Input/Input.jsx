import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Input.module.css';
import { TestId } from './constants';
const { LABEL_ID, INPUT_ID } = TestId;

export const Input = ({ placeholder, label, value, dispatchType, type, size, className }) => {
  const [initialValue, setInitialValue] = useState(value);
  const dispatch = useDispatch()

  const handleOnchange = (e) => {
    setInitialValue(e.target.value);
    dispatch(dispatchType(e.target.value));
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
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  dispatchType: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  placeholder: 'Placeholder...',
  label: 'Some label',
  value: '',
  dispatchType: () => { },
  type: 'text',
  size: '',
  className: ''
};
