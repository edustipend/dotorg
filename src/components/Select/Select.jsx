import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Select.module.css';
import dropDown from '../../assets/drop-down.svg';

export const Select = ({ dispatch, label, placeholder, options, type }) => {
  const [option, setOption] = useState(placeholder);
  const [active, setActive] = useState(false);

  const handleDispatch = (option) => {
    setOption(option);
    dispatch({ type: type, payload: option });
    setActive((pre) => !pre);
  };
  return (
    <main>
      <label className={styles.label}>{label}</label>
      <div className={styles.select}>
        <div className={styles.defaultContainer} onClick={() => setActive((pre) => !pre)}>
          <span className={styles.default}>{option}</span>
          <img src={dropDown} alt="drop-down-icon" className={styles.dropDown} />
        </div>
        <div className={styles.optionsContainer}>
          {active &&
            options?.map((itm, idx) => {
              return (
                <div key={idx} className={styles.option} onClick={() => handleDispatch(itm)}>
                  <span className={styles.itm}>{itm}</span>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

Select.propTypes = {
  dispatch: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.string
};

Select.defaultProps = {
  dispatch: () => {},
  label: 'Some string',
  placeholder: 'Select an option',
  options: [],
  type: ''
};
