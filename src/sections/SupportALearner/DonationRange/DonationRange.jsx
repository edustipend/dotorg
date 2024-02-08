import React, { useCallback, useEffect, useState } from 'react';
import { donateScreen, screenPlatform } from '../../../assets';
import Container from '../../../components/Container';
import styles from './DonationRange.module.css';
import { constants } from './constants';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

export const DonationRange = () => {
  const [value, setValue] = useState(1000);
  const [step, setStep] = useState(4000);
  const nav = useNavigate();

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
    const el = event.target;
    el.style.setProperty('--value', el.value);
    el.style.setProperty('--min', el.min === '' ? '0' : el.min);
    el.style.setProperty('--max', el.max === '' ? '1000000' : el.max);
    el.style.setProperty('--value', el.value);
  };

  const calculateStep = useCallback((value) => {
    if (value === 0) {
      setStep(1000);
    } else {
      setStep(5000);
    }
  }, []);

  const fonmatCurrency = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);

  useEffect(() => {
    calculateStep(value);
  }, [calculateStep, value]);

  const handleNavigate = () => {
    nav('/support-a-learner/donate', { state: { value } });
  };

  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.content}>
          <p className={styles.title}>{constants.title}</p>
          <div className={styles.rangeContainer}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <img src={donateScreen} alt="donateScreen" className={`${styles.donateScreen} ${styles.img}`} />
                <img src={screenPlatform} alt="screenPlatform" className={`${styles.screenPlatform} ${styles.img}`} />
              </div>
            </div>
            <div className={styles.right}>
              <p className={styles.text}>{constants.text}</p>
              <div className={styles.sliderPicker}>
                <p className={styles.sliderText}>{constants.slider}</p>
                <div className={styles.sliderBox}>
                  <p className={styles.value}>₦{fonmatCurrency}</p>
                  <div className={styles.rangeCon}>
                    <input
                      type="range"
                      min={0}
                      max={1000000}
                      step={step}
                      value={value}
                      onChange={(e) => handleChange(e)}
                      className={styles.rangeInput}
                    />
                  </div>
                  <p className={styles.sum}>₦{`${fonmatCurrency} can get ${4} Laptops for ${4} learners`}</p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button label={`Donate ₦${fonmatCurrency}`} type="secondary" onClick={handleNavigate} className={styles.btn} />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};
