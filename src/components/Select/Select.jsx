import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Select.module.css';
import dropDown from '../../assets/drop-down.svg';
import { TestId } from './constants';
import { useDispatch } from 'react-redux';
const { LABEL_ID, INPUT_ID, OPTIONS_ID } = TestId;

export const Select = ({ dispatchType, label, includeLabel, placeholder, options, size, value, className }) => {
  const [option, setOption] = useState(value);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleDispatch = (Option) => {
    setOption(Option);
    dispatch(dispatchType(Option));
    setActive((pre) => !pre);
  };
  return (
    <div className={`${styles.main} ${className}`}>
      {includeLabel ? (
        <label data-testid={LABEL_ID} className={styles.label}>
          {label} <span className={styles.required}>*</span>
        </label>
      ) : undefined}
      <div className={`${styles.defaultContainer} ${styles[size]}`}>
        <div className={styles.selectInput}>
          <input
            data-testid={INPUT_ID}
            value={option}
            readOnly
            placeholder={placeholder}
            onClick={() => setActive((pre) => !pre)}
            className={styles.select}
          />
          <div className={styles.dropDown}>
            <img
              src={dropDown}
              alt="drop-down-icon"
              className={
                active
                  ? `${styles.dropDownArr} 
            ${styles.dropDownAlt}`
                  : `${styles.dropDownArr}`
              }
            />
          </div>
          <div className={styles.effect} />
        </div>
        {active && (
          <div
            data-testid={OPTIONS_ID}
            className={`${styles.optionsContainer} ${options.length > 2 ? `${styles.optionsContainer}  ${styles.optionsContainerAlt} ` : ''}`}
          >
            {options?.map((itm, idx) => {
              return (
                <div key={idx} className={styles.option} onClick={() => handleDispatch(itm)}>
                  <span className={styles.itm}>{itm}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

Select.propTypes = {
  dispatchType: PropTypes.func,
  label: PropTypes.string,
  includeLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  size: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string
};

Select.defaultProps = {
  dispatchType: () => {},
  label: 'Some label',
  includeLabel: true,
  placeholder: 'Select an option',
  options: [],
  size: '',
  value: '',
  className: ''
};
