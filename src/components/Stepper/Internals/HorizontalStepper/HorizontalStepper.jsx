import React from 'react';
import styles from '../HorizontalStepper/HorizontalStepper.module.css';
import PropTypes from 'prop-types';
import gaparrow from '../../../../assets/gaparrow.svg';
import check from '../../../../assets/check.svg';

const HorizontalStepper = ({ activeStep, stepsData }) => {
  return (
    <div data-testid="horizontal stepper" className={styles.container}>
      {stepsData.map((currentStep, index) => {
        const { id, step, select } = currentStep;
        return (
          <div key={id} className={styles.stepsmain}>
            <div className={styles.steps}>
              {activeStep >= id ? <p className={styles.topsteptitle}>{step}</p> : <p className={styles.disabledtopsteptitle}>{step}</p>}

              {activeStep >= id ? (
                <div className={styles.transparentcircle}>
                  <div className={styles.colouredcircle}>
                    {activeStep > id && <img src={check} alt="check mark" />}
                    </div>
                </div>
              ) : (
                <div className={styles.disabledtransparentcircle}>
                  <div className={styles.disabledcolouredcircle}></div>
                </div>
              )}

              {activeStep >= id ? <p className={styles.bottomselecttitle}>{select}</p> : <p className={styles.disabledbottomselecttitle}>{select}</p>}
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
      select: PropTypes.string.isRequired,
      arrow: PropTypes.string.isRequired
    })
  ).isRequired
};

export default HorizontalStepper;
