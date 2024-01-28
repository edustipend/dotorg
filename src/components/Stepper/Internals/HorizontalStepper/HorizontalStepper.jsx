import React from 'react';
import styles from '../HorizontalStepper/HorizontalStepper.module.css';
import PropTypes from 'prop-types';
import gaparrow from '../../../../assets/gaparrow.svg';
import check from '../../../../assets/check.svg';
import { TestId } from '../../constants';
import { useSelector } from 'react-redux';
const HorizontalStepper = ({ activeStep, stepsData }) => {
  const { newApplication } = useSelector((state) => state.application);
  const calculateLength = () => {
    if (newApplication) {
      return 3;
    } else {
      return stepsData?.length;
    }
  };

  return (
    <div data-testid={TestId.HORIZONTAL_STEPPER_TEST_ID} className={styles.container}>
      {stepsData?.slice(0, calculateLength()).map((currentStep, index) => {
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

              {activeStep >= id ? (
                <p className={styles.bottomselecttitle}>{index === 2 ? 'Submit' : label}</p>
              ) : (
                <p className={styles.disabledbottomselecttitle}>{index === 2 ? 'Submit' : label}</p>
              )}
            </div>
            {newApplication ? (
              <>{index !== stepsData.length - 2 - 1 && <img className={styles.gaparrow} src={gaparrow} alt="gap arrow" />}</>
            ) : (
              <>{index !== stepsData.length - 1 && <img className={styles.gaparrow} src={gaparrow} alt="gap arrow" />}</>
            )}
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
      id: PropTypes.number,
      step: PropTypes.string,
      label: PropTypes.string,
      arrow: PropTypes.string
    })
  ).isRequired
};

HorizontalStepper.defaultProps = {
  activeStep: 1,
  stepsData: []
};

export default HorizontalStepper;
