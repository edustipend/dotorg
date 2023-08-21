import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stepper.module.css';
import backarrow from '../../assets/stepperbackarrow.svg';
import CircularStepper from './Internals/CircularStepper/CircularStepper';
import HorizontalStepper from './Internals/HorizontalStepper/HorizontalStepper';
import Container from '../Container';
import { Text, stepsData } from './constants';

const Stepper = ({ activeStep }) => {

  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.container}>
          <div className={styles.backarrow}>
            <img data-testid="backarrow" className={styles.backarrowimg} src={backarrow} alt="back" />
            <p className={styles.backarrowtext}>{Text.BACK_ICON_TEXT}</p>
          </div>

          <div className={styles.circletext}>
            <CircularStepper activeStep={activeStep} stepsData={stepsData} />

            <div className={styles.texts}>
              <p data-testid="step 1" className={styles.step}>
                {Text.TITLE + ' ' + activeStep}
              </p>
              <p data-testid="select stipend category" className={styles.label}>
                {stepsData[activeStep - 1].label}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container alternate>
        <div className={styles.bigscreen}>
          <HorizontalStepper activeStep={activeStep} stepsData={stepsData} />
        </div>
      </Container>
    </>
  );
};

export default Stepper;

Stepper.propTypes = {
  activeStep: PropTypes.number
}

Stepper.defaultProps = {
  activeStep: 1
}
