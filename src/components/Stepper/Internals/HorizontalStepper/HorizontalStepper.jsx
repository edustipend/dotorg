import React from 'react';
import styles from '../HorizontalStepper/HorizontalStepper.module.css';
import PropTypes from 'prop-types';
import gaparrow from '../../../../assets/gaparrow.svg';
import check from '../../../../assets/check.svg';
import { TestId } from '../../constants';

const HorizontalStepper = ({ activeStep, stepsData }) => {
  return (
    <div data-testid={TestId.HORIZONTAL_STEPPER_TEST_ID} className={styles.container}>
      {stepsData?.map((currentStep, index) => {
        const { id, step, label } = currentStep;
        return (
          <div key={id} className={styles.stepsmain}>
            <div className={styles.steps}>
              {activeStep >= id ? <p className={styles.topsteptitle}>{step}</p> : <p className={styles.disabledtopsteptitle}>{step}</p>}

              {activeStep >= id ? (
                <div className={styles.transparentcircle}>
                  <div className={styles.colouredcircle}>{activeStep > id && <img src={check} alt="check mark" />}</div>
                </div>
              ) : (
                <div className={styles.disabledtransparentcircle}>
                  <div className={styles.disabledcolouredcircle}></div>
                </div>
              )}

              {activeStep >= id ? <p className={styles.bottomselecttitle}>{label}</p> : <p className={styles.disabledbottomselecttitle}>{label}</p>}
            </div>
            {index !== stepsData.length - 1 && <img className={styles.gaparrow} src={gaparrow} alt="gap arrow" />}
          </div>
        );
      })}
    </div>
  );
};

HorizontalStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      step: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      arrow: PropTypes.string.isRequired
    })
  ).isRequired
};

export default HorizontalStepper;
