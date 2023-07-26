import React from 'react';
import styles from '../HorizontalStepper/HorizontalStepper.module.css';
import PropTypes from 'prop-types';

const HorizontalStep = ({ stepsData, step, active }) => {
  return (
    <div className={styles.stepsmain}>
      <div className={styles.steps}>
        {active ? <p className={styles.topsteptitle}>{step.step}</p> : <p className={styles.disabledtopsteptitle}>{step.step}</p>}

        {active ? (
          <div className={styles.transparentcircle}>
            <div className={styles.colouredcircle}></div>
          </div>
        ) : (
          <div className={styles.disabledtransparentcircle}>
            <div className={styles.disabledcolouredcircle}></div>
          </div>
        )}

        {active ? <p className={styles.bottomselecttitle}>{step.select}</p> : <p className={styles.disabledbottomselecttitle}>{step.select}</p>}
      </div>
      <div className={styles.gaparrow}>{active !== stepsData.length - 1 && <div>{step.arrow}</div>}</div>
    </div>
  );
};

HorizontalStep.propTypes = {
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      step: PropTypes.string.isRequired,
      select: PropTypes.string.isRequired,
      arrow: PropTypes.string.isRequired
    })
  ).isRequired,
  step: PropTypes.shape({
    id: PropTypes.number.isRequired,
    step: PropTypes.string.isRequired,
    select: PropTypes.string.isRequired,
    arrow: PropTypes.string.isRequired
  }).isRequired,
  active: PropTypes.number.isRequired
};

export default HorizontalStep;
