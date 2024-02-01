import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stepper.module.css';
import backarrow from '../../assets/stepperbackarrow.svg';
import CircularStepper from './Internals/CircularStepper/CircularStepper';
import HorizontalStepper from './Internals/HorizontalStepper/HorizontalStepper';
import Container from '../Container';
import { TestId, Text, stepsData, stepsDataAlt } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { back } from '../../store/reducers/ApplicationReducer';
import { useNavigate } from 'react-router-dom';

const Stepper = ({ activeStep }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const steps = userId ? stepsDataAlt : stepsData;


  const handleNav = () => {
    return userId && activeStep === 1 ? nav('/dashboard') : activeStep === 1 && !userId ? nav('/request') : dispatch(back());
  };

  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.container}>
          <div className={styles.backarrow} onClick={handleNav}>
            <img data-testid={TestId.BACK_ICON_TEST_ID} className={styles.backarrowimg} src={backarrow} alt="back_arrow" />
            <p className={styles.backarrowtext}>{Text.BACK_ICON_TEXT}</p>
          </div>

          <div className={styles.circletext}>
            <CircularStepper activeStep={activeStep} stepsData={steps} />

            <div className={styles.texts}>
              <p data-testid={TestId.TITLE_TEST_ID} className={styles.step}>
                {Text.TITLE + ' ' + activeStep}
              </p>
              <p data-testid={TestId.PARAGRAPH_TEST_ID} className={styles.label}>
                {steps[activeStep - 1].label}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container alternate>
        <div className={styles.bigscreen}>
          <HorizontalStepper activeStep={activeStep} stepsData={steps} />
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
