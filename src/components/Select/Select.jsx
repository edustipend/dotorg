import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Select.module.css';
import dropDown from '../../assets/drop-down.svg';
import { testIds } from './constants'
const { labelId, inputId, optionsId } = testIds;

export const Select = ({ dispatch, label, placeholder, options, type, size }) => {
  const [option, setOption] = useState('');
  const [active, setActive] = useState(false);

  const handleDispatch = (option) => {
    setOption(option);
    dispatch({ type: type, payload: option });
    setActive((pre) => !pre);
  };
  return (
    <main className={styles.main}>
      <label data-testid={labelId} className={styles.label}>{label} <span className={styles.required}>*</span></label>
      <div className={`${styles.defaultContainer} ${styles[size]}`}>
        <div className={styles.selectInput}>
          <input data-testid={inputId} className={styles.select} value={option} placeholder={placeholder}
            onClick={() => setActive((pre) => !pre)}
          />
          <div className={styles.dropDown}>
            <img src={dropDown} alt="drop-down-icon"
              className={active ? `${styles.dropDownArr} ${styles.dropDownAlt}`
                : `${styles.dropDownArr}`}
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
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.string,
  size: PropTypes.string
};

Select.defaultProps = {
  dispatch: () => { },
  label: 'Some label',
  placeholder: 'Select an option',
  options: [],
  type: '',
  size: ''
};
