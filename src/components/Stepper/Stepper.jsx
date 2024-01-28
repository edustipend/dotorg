import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stepper.module.css';
import backarrow from '../../assets/stepperbackarrow.svg';
import CircularStepper from './Internals/CircularStepper/CircularStepper';
import HorizontalStepper from './Internals/HorizontalStepper/HorizontalStepper';
import Container from '../Container';
import { TestId, Text, stepsData } from './constants';
import { useDispatch } from 'react-redux';
import { back } from '../../store/reducers/ApplicationReducer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Stepper = ({ activeStep }) => {
  const { newApplication } = useSelector((state) => state.application) || {};
  const { isVerified } = useSelector((state) => state.user);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (activeStep === 1 && newApplication) {
      nav('/dashboard');
      return;
    } else if (activeStep === 1) {
      nav('/request');
    }
    dispatch(back());
  };

  const adjustStepper = () => {
    return !isVerified && newApplication;
  };

  const style = adjustStepper();

  return (
    <>
      <div className={style ? `${styles.mobile} ${styles.mobileAlt}` : `${styles.mobile}`}>
        <div className={styles.container}>
          <div className={styles.backarrow} onClick={handleClick}>
            <img data-testid={TestId.BACK_ICON_TEST_ID} className={styles.backarrowimg} src={backarrow} alt="back_arrow" />
            <p className={styles.backarrowtext}>{Text.BACK_ICON_TEXT}</p>
          </div>

          <div className={styles.circletext}>
            <CircularStepper activeStep={activeStep} stepsData={stepsData} />

            <div className={styles.texts}>
              <p data-testid={TestId.TITLE_TEST_ID} className={styles.step}>
                {newApplication ? 'Final Step' : <>{Text.TITLE + ' ' + activeStep}</>}
              </p>
              <p data-testid={TestId.PARAGRAPH_TEST_ID} className={styles.label}>
                {stepsData[activeStep - 1].label}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container alternate>
        <div className={style ? `${styles.bigscreen} ${styles.bigscreenAlt}` : `${styles.bigscreen}`}>
          <HorizontalStepper activeStep={activeStep} stepsData={stepsData} />
        </div>
      </Container>
    </>
  );
};

export default Stepper;

Stepper.propTypes = {
  activeStep: PropTypes.number
};

Stepper.defaultProps = {
  activeStep: 1
};
