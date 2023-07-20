import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Select.module.css';
import dropDown from '../../assets/drop-down.svg';
import { testIds } from './constants';
const { labelId, inputId, optionsId } = testIds;

export const Select = ({ dispatch, dispatchType, label, placeholder, options, size, value }) => {
  const [option, setOption] = useState(value);
  const [active, setActive] = useState(false);

  const handleDispatch = (Option) => {
    setOption(Option);
    dispatch({ type: dispatchType, payload: Option });
    setActive((pre) => !pre);
  };
  return (
    <main className={styles.main}>
      <label data-testid={labelId} className={styles.label}>
        {label} <span className={styles.required}>*</span>
      </label>
      <div className={`${styles.defaultContainer} ${styles[size]}`}>
        <div className={styles.selectInput}>
          <input
            data-testid={inputId}
            value={option}
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
        </div>
        {active && (
          <div data-testid={optionsId} className={styles.optionsContainer}>
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
    </main>
  );
};

Select.propTypes = {
  dispatch: PropTypes.func,
  dispatchType: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  size: PropTypes.string,
  value: PropTypes.string
};

Select.defaultProps = {
  dispatch: () => { },
  dispatchType: '',
  label: 'Some label',
  placeholder: 'Select an option',
  options: [],
  size: '',
  value: ''
};
